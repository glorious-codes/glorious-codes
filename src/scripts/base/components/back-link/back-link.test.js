import { shallowMount } from '@vue/test-utils';
import baseLink from '@scripts/base/components/base-link/base-link';
import backLink from './back-link';

describe('Back Link', () => {
  function mountComponent(propsData){
    return shallowMount(backLink, {propsData});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['back-link']);
  });

  it('should contain a base link', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(baseLink)).toEqual(true);
  });
});
