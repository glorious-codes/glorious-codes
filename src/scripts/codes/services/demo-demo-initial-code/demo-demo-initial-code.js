import ENV from '@environment';
import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import routeService from '@scripts/base/services/route/route';

const INITIAL_CODE_QUERY_PARAM = 'demo';
const OPENING_BRACE_CODE = '%OPBR%';
const CLOSING_BRACE_CODE = '%CLBR%';

const _public = {};

_public.get = () => {
  const demo = routeService.getQueryParams(INITIAL_CODE_QUERY_PARAM);
  return demo ? decodeBraces(window.atob(demo)) : DEFAULT_DEMO_CODE;
};

_public.buildParameterizedUrl = demoCode => {
  const code = encodeBraces(demoCode);
  const queryParam = INITIAL_CODE_QUERY_PARAM;
  return `${ENV.APP.BASE_URL}/demo?${queryParam}=${window.btoa(code)}`;
};

function encodeBraces(string){
  return string
    .replace(/\{/g, OPENING_BRACE_CODE)
    .replace(/\}/g, CLOSING_BRACE_CODE);
}

function decodeBraces(string){
  const opbrRegex = new RegExp(OPENING_BRACE_CODE, 'g');
  const clbrRegex = new RegExp(CLOSING_BRACE_CODE, 'g');
  return string.replace(opbrRegex, '{').replace(clbrRegex, '}');
}

export default _public;
