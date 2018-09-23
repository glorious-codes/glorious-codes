import analyticsService from '@scripts/base/services/analytics/analytics';

const _public = {};

let router;

_public.init = routerInstance => {
  router = routerInstance;
  startTrackingRouteNavigation();
};

_public.getRoutes = () => {
  return router.options.routes;
};

function startTrackingRouteNavigation(){
  router.afterEach(to => {
    analyticsService.trackPageView(to.path);
  });
}

export default _public;
