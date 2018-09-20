import { shallowMount } from '@vue/test-utils';
import baseLink from '@scripts/base/components/base-link/base-link';
import externalLink from './external-link';

describe('External Link', () => {
  function mountComponent(propsData, slots){
    return shallowMount(externalLink, {propsData, slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['external-link']);
  });

  it('should contain a base link', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(baseLink)).toEqual(true);
  });

  it('should contain a base link', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(baseLink)).toEqual(true);
  });

  it('should base link contain an icon', () => {
    const iconName = 'ion-android-open';
    const wrapper = mountComponent();
    expect(wrapper.find('baselink-stub').element.getAttribute('iconname')).toEqual(iconName);
  });

  it('should contain a href', () => {
    const href = 'http://nashios.com';
    const wrapper = mountComponent({ href });
    expect(wrapper.vm.href).toEqual(href);
  });

  it('should base link transclude content', () => {
    const wrapper = mountComponent(null, {default: '<span>Click here</span>'});
    expect(wrapper.find('span').text()).toEqual('Click here');
  });
});
