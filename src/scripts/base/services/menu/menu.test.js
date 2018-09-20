import { routesMock } from '@mocks/routes';
import routeService from '@scripts/base/services/route/route';
import menuService from './menu';

describe('Menu Service', () => {
  beforeEach(() => {
    routeService.getRoutes = jest.fn(() => routesMock);
  });

  it('should build items', () => {
    expect(menuService.buildItems('appMenu')).toEqual([
      {label: 'Home', iconName: 'home', routeName: 'home'},
      {label: 'Author', iconName: 'person', routeName: 'author'}
    ]);
  });
});
