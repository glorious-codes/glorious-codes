import routeService from '@scripts/base/services/route/route';

const _public = {};

_public.buildItems = menuName => {
  const menuRoutes = filterRoutesByMenuName(menuName);
  return menuRoutes.map(menuRoute => {
    return {
      label: menuRoute[menuName].text,
      iconName: menuRoute[menuName].iconName,
      routeName: menuRoute.name
    };
  });
};

function filterRoutesByMenuName(menuName){
  return routeService.getRoutes().filter(route => {
    return route[menuName];
  });
}

export default _public;
