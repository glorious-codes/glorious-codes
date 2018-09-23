import VueRouter from 'vue-router';
import { routesMock } from '@mocks/routes';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from './route';

describe('Route Service', () => {
  function mockRouter(){
    return new VueRouter({
      routes: routesMock,
      mode: 'history'
    });
  }

  beforeEach(() => {
    analyticsService.trackPageView = jest.fn();
  });

  it('should get routes', () => {
    routeService.init(mockRouter());
    expect(routeService.getRoutes()).toEqual(routesMock);
  });

  it('should track route navigation', () => {
    const toPathMock = '/mock';
    const routerMock = mockRouter();
    routeService.init(routerMock);
    routerMock.afterHooks[0]({
      path: toPathMock
    });
    expect(analyticsService.trackPageView).toHaveBeenCalledWith(toPathMock);
  });
});
