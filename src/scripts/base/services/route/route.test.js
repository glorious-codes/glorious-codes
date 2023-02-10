import VueRouter from 'vue-router';
import routesMock from '@mocks/routes';
import { pause } from '@scripts/base/services/testing/testing';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from './route';

describe('Route Service', () => {
  let router;

  function mockRouterInstance(){
    router = new VueRouter({
      routes: routesMock
    });
  }

  function stubRouterPush(){
    router.push = jest.fn();
  }

  beforeEach(() => {
    mockRouterInstance();
    window.open = jest.fn();
    analyticsService.trackPageView = jest.fn();
    routeService.setRouter(router);
  });

  it('should get routes', () => {
    expect(routeService.getRoutes()).toEqual(routesMock);
  });

  it('should go to route', () => {
    stubRouterPush();
    routeService.goTo('second');
    expect(router.push).toHaveBeenCalledWith({
      name: 'second',
      params: undefined,
      query: undefined
    });
  });

  it('should go to route passing route params', () => {
    stubRouterPush();
    routeService.goTo('second', {params: {some: 'param'}});
    expect(router.push).toHaveBeenCalledWith({
      name: 'second',
      params: {some: 'param'},
      query: undefined
    });
  });

  it('should go to route passing query params', () => {
    stubRouterPush();
    routeService.goTo('second', {query: {some: 'query'}});
    expect(router.push).toHaveBeenCalledWith({
      name: 'second',
      params: undefined,
      query: {some: 'query'}
    });
  });

  it('should get all query params', () => {
    const queryMock = {some: 'otherQuery'};
    router.push({ query: queryMock });
    expect(routeService.getQueryParams()).toEqual(queryMock);
  });

  it('should get specific query param', () => {
    const queryMock = {first: 'query', second: 'otherQuery'};
    router.push({ query: queryMock });
    expect(routeService.getQueryParams('second')).toEqual('otherQuery');
  });

  it('should set query params', () => {
    stubRouterPush();
    const queryMock = {some: 'evenOtherQuery'};
    routeService.setQueryParams(queryMock);
    expect(router.push).toHaveBeenCalledWith({
      query: queryMock
    });
  });

  it('should open an url', () => {
    const url = 'http://some.url.com';
    routeService.openUrl(url);
    expect(window.open).toHaveBeenCalledWith(url);
  });

  it('should open an url with query params', () => {
    const url = 'http://some.url.com';
    const params = {
      name: 'João',
      surname: 'Guimarães'
    };
    routeService.openUrl(url, params);
    expect(window.open).toHaveBeenCalledWith(`${url}?name=Jo%C3%A3o&surname=Guimar%C3%A3es`);
  });

  it('should track route navigation', async () => {
    routeService.setRouter(router);
    router.afterHooks[0]();
    await pause();
    expect(analyticsService.trackPageView).toHaveBeenCalled();
  });
});
