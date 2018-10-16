import ENV from '@environment';
import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import routeService from '@scripts/base/services/route/route';

const INITIAL_CODE_QUERY_PARAM = 'demo';

const _public = {};

_public.get = () => {
  const demo = routeService.getQueryParams(INITIAL_CODE_QUERY_PARAM);
  return demo ? window.atob(demo) : DEFAULT_DEMO_CODE;
};

_public.buildParameterizedUrl = demoCode => {
  const queryParam = INITIAL_CODE_QUERY_PARAM;
  return `${ENV.APP.BASE_URL}/demo?${queryParam}=${window.btoa(demoCode)}`;
};

export default _public;
