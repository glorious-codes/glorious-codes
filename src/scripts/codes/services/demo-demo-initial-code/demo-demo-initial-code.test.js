import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import demoDemoInitialCodeService from './demo-demo-initial-code';
import routeService from '@scripts/base/services/route/route';

describe('Demo Demo Initial Code Service', () => {
  function stubGetQueryParams(paramValue){
    routeService.getQueryParams = jest.fn(() => paramValue);
  }

  it('should get default demo demo initial code', () => {
    stubGetQueryParams();
    expect(demoDemoInitialCodeService.get()).toEqual(DEFAULT_DEMO_CODE);
  });

  it('should get custom demo demo initial code', () => {
    const code = 'const test = true;';
    stubGetQueryParams(window.btoa(code));
    expect(demoDemoInitialCodeService.get()).toEqual(code);
  });

  it('should decode braces when getting custom demo demo initial code', () => {
    const urlParamValue = window.btoa('function greet()%OPBR% console.log("Hello"); %CLBR% greet();');
    const code = 'function greet(){ console.log("Hello"); } greet();';
    stubGetQueryParams(urlParamValue);
    expect(demoDemoInitialCodeService.get()).toEqual(code);
  });

  it('should build custom demo demo initial code url', () => {
    const code = 'const test = true;';
    expect(demoDemoInitialCodeService.buildParameterizedUrl(code)).toEqual(
      'http://localhost:7000/demo?demo=Y29uc3QgdGVzdCA9IHRydWU7'
    );
  });

  it('should encode braces when building demo demo initial code url', () => {
    const urlParamValue = window.btoa('function greet()%OPBR% console.log("Hello"); %CLBR% greet();');
    const code = 'function greet(){ console.log("Hello"); } greet();';
    expect(demoDemoInitialCodeService.buildParameterizedUrl(code)).toEqual(
      `http://localhost:7000/demo?demo=${urlParamValue}`
    );
  });
});
