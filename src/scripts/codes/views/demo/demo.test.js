import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import demoDemo from '@scripts/codes/components/demo-demo/demo-demo';
import demo from './demo';

describe('Codes Crud View', () => {
  function mountComponent(){
    return shallowMount(demo);
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
    expect(viewSummary.getAttribute('heading')).toEqual('Glorious Demo');
  });

  it('should code view summary contain an external link', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('externallinkhref')).toEqual('https://github.com/rafaelcamargo/glorious-demo#install');
  });

  it('should contain a code weight badge', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(codeWeightBadge)).toEqual(true);
  });

  it('should code weight badge contain a text', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeweightbadge-stub').element;
    expect(viewSummary.getAttribute('text')).toEqual('4.6kb Gzipped');
  });

  it('should contain a demo demo', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(demoDemo)).toEqual(true);
  });
});
