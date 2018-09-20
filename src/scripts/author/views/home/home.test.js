import { shallowMount } from '@vue/test-utils';
import viewport from '@scripts/base/components/viewport/viewport';
import authorViewSummary from '@scripts/author/components/author-view-summary/author-view-summary';
import authorHome from './home';

describe('Author Home View', () => {
  function mountComponent(){
    return shallowMount(authorHome);
  }

  it('should contain a viewport', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(viewport)).toEqual(true);
  });

  it('should contain a author view summary', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(authorViewSummary)).toEqual(true);
  });
});
