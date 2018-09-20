import { shallowMount } from '@vue/test-utils';
import backLink from '@scripts/base/components/back-link/back-link';
import codesBackLink from './codes-back-link';

describe('Code View Summary', () => {
  function mountComponent(propsData){
    return shallowMount(codesBackLink, {propsData});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['codes-back-link']);
  });

  it('should contain a back link', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(backLink)).toEqual(true);
  });

  it('should back link route name point to codes', () => {
    const wrapper = mountComponent();
    const backLink = wrapper.find('backlink-stub').element;
    expect(backLink.getAttribute('routename')).toEqual('codes');
  });

  it('should back link contain "All Codes" text', () => {
    const wrapper = mountComponent();
    const backLink = wrapper.find('backlink-stub').element;
    expect(backLink.innerHTML.trim()).toEqual('All codes');
  });
});
