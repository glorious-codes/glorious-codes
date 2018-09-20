import { shallowMount } from '@vue/test-utils';
import list from './list';

describe('List', () => {
  function mountComponent(slots){
    return shallowMount(list, {slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['list']);
  });

  it('should render default slot', () => {
    const wrapper = mountComponent({default: '<li>Item</li>'});
    expect(wrapper.find('li').text()).toEqual('Item');
  });
});
