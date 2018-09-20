const _public = {};

let router;

_public.init = routerInstance => {
  router = routerInstance;
};

_public.getRoutes = () => {
  return router.options.routes;
};

export default _public;
