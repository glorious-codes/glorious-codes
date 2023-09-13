import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import rasketDemo from '@scripts/codes/components/rasket-demo/rasket-demo';
import rasket from './rasket';

describe('Rasket View', () => {
  function mountComponent(){
    return shallowMount(rasket);
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
    expect(viewSummary.getAttribute('heading')).toEqual('Rasket');
  });

  it('should code view summary contain a repository name', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('repositoryname')).toEqual('glorious-rasket');
  });

  it('should contain a rasket demo', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(rasketDemo)).toEqual(true);
  });
});
