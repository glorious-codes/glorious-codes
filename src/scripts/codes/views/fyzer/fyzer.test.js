import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import fyzerDemo from '@scripts/codes/components/fyzer-demo/fyzer-demo';
import fyzer from './fyzer';

describe('Fyzer View', () => {
  function mountComponent(){
    return shallowMount(fyzer);
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
    expect(viewSummary.getAttribute('heading')).toEqual('Glorious Fyzer');
  });

  it('should code view summary contain a repository name', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('repositoryname')).toEqual('glorious-fyzer');
  });

  it('should contain a fyzer demo', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(fyzerDemo)).toEqual(true);
  });
});
