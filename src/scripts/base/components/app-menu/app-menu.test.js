import { shallowMount } from '@vue/test-utils';
import baseMenu from '@scripts/base/components/app-menu/app-menu';
import appMenu from './app-menu';

describe('App Menu', () => {
  function mountComponent(){
    return shallowMount(appMenu);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['app-menu']);
  });

  it('should contain a base menu', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(baseMenu)).toEqual(true);
  });
});
