import { shallowMount } from '@vue/test-utils';
import appContainer from '@scripts/base/components/app-container/app-container';
import viewport from './viewport';

describe('Viewport', () => {
  function mountComponent(slots){
    return shallowMount(viewport, {slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['viewport']);
  });

  it('should contain app container', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(appContainer)).toEqual(true);
  });

  it('should render default slot', () => {
    const wrapper = mountComponent({default: '<p>Paragraph</p>'});
    expect(wrapper.find('p').text()).toEqual('Paragraph');
  });
});
