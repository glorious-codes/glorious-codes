import { shallowMount } from '@vue/test-utils';
import baseMenu from '@scripts/base/components/base-menu/base-menu';
import codesMenu from './codes-menu';

describe('Codes Menu', () => {
  function mountComponent(){
    return shallowMount(codesMenu);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['codes-menu']);
  });

  it('should contain a base menu', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(baseMenu)).toEqual(true);
  });

  it('should base menu name to be codes menu', () => {
    const wrapper = mountComponent();
    const baseMenu = wrapper.find('basemenu-stub').element;
    expect(baseMenu.getAttribute('menuname')).toEqual('codesMenu');
  });
});
