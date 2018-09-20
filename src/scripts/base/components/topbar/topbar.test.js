import { shallowMount } from '@vue/test-utils';
import appContainer from '@scripts/base/components/app-container/app-container';
import appMenu from '@scripts/base/components/app-menu/app-menu';
import topbar from './topbar';

describe('Base Menu', () => {
  function mountComponent(propsData){
    return shallowMount(topbar, {propsData});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['topbar']);
  });

  it('should contain an app container', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(appContainer)).toEqual(true);
  });

  it('should contain an app menu', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(appMenu)).toEqual(true);
  });
});
