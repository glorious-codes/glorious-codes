import VueRouter from 'vue-router';
import { routesMock } from '@mocks/routes';
import routeService from './route';

describe('Route Service', () => {
  const routerMock = new VueRouter({
    routes: routesMock,
    mode: 'history'
  });

  it('should get routes', () => {
    routeService.init(routerMock);
    expect(routeService.getRoutes()).toEqual(routesMock);
  });
});
