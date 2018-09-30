import { mount } from '@vue/test-utils';
import row from './row';

describe('Row', () => {
  function mountComponent(propsData, slots){
    return mount(row, {propsData, slots});
  }

  it('should have appropriate class', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['row']);
  });

  it('should render default slot', () => {
    const wrapper = mountComponent(null, {default: '<p>hello!</p>'});
    expect(wrapper.find('p').text()).toEqual('hello!');
  });

  it('should look vertical centered', () => {
    const wrapper = mountComponent({verticalCentered: true});
    expect(wrapper.classes()).toEqual(['row', 'row-vertical-centered']);
  });

  it('should allow vertical offset option', () => {
    const wrapper = mountComponent({ verticalOffset: '3' });
    expect(wrapper.classes().includes('row-vertical-offset-3')).toEqual(true);
  });
});
