import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import home from './home';

describe('Codes Home View', () => {
  function mountComponent(){
    return shallowMount(home);
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

  it('should contain a view summary', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(viewSummary)).toEqual(true);
  });

  it('should view summary contain a heading', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('viewsummary-stub').element;
    expect(viewSummary.getAttribute('heading')).toEqual('Glorious Codes');
  });

  it('should view summary heading to be a hero heading', () => {
    const wrapper = mountComponent();
    const viewSummary = wrapper.find('viewsummary-stub').element;
    expect(viewSummary.getAttribute('heroheading')).toBeDefined();
  });
});
