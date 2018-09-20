import { shallowMount } from '@vue/test-utils';
import listItem from './list-item';

describe('List Item', () => {
  function mountComponent(slots){
    return shallowMount(listItem, {slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['list-item']);
  });

  it('should render default slot', () => {
    const wrapper = mountComponent({default: '<span>Item Content</span>'});
    expect(wrapper.find('span').text()).toEqual('Item Content');
  });
});
