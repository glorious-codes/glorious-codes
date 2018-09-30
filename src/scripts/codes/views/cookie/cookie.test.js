import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import cookieDemo from '@scripts/codes/components/cookie-demo/cookie-demo';
import cookie from './cookie';

describe('Codes Cookie View', () => {
  function mountComponent(){
    return shallowMount(cookie);
  }

  it('should contain a viewport', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(viewport)).toEqual(true);
  });

  it('should contain a vertical centered row', () => {
    const wrapper = mountComponent();
    const row = wrapper.find('row-stub').element;
    expect(row.getAttribute('vertical-centered')).toBeDefined();
  });

  it('should contain a code view summary', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(codeViewSummary)).toEqual(true);
  });

  it('should code view summary contain a heading', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('heading')).toEqual('Glorious Cookie');
  });

  it('should code view summary contain an external link', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('externallinkhref')).toEqual('https://github.com/rafaelcamargo/glorious-cookie#install');
  });

  it('should contain a code weight badge', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(codeWeightBadge)).toEqual(true);
  });

  it('should code weight badge contain a text', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeweightbadge-stub').element;
    expect(viewSummary.getAttribute('text')).toEqual('1kb Gzipped');
  });

  it('should contain a cookie demo', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(cookieDemo)).toEqual(true);
  });
});
