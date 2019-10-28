import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import demoDemo from '@scripts/codes/components/demo-demo/demo-demo';
import demo from './demo';

describe('Demo View', () => {
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

  it('should code view summary contain a repository name', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('repositoryname')).toEqual('glorious-demo');
  });

  it('should code view summary contain a code weight', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('codeweight')).toEqual('4.6');
  });

  it('should code view summary contain a tagline', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('codeviewsummary-stub').element;
    expect(viewSummary.getAttribute('tagline')).toEqual(
      'The easiest way of creating animations to show your code in action.'
    );
  });

  it('should contain a demo demo', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(demoDemo)).toEqual(true);
  });
});
