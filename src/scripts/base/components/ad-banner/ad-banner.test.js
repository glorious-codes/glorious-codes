import { shallowMount } from '@vue/test-utils';
import adBanner from './ad-banner';

describe('Ad Banner', () => {
  function createComponent(propsData, slots){
    return shallowMount(adBanner, { propsData, slots });
  }

  it('should contain the appropriate css class', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toContain('ad-banner');
  });

  it('should contain an "open in external tab" icon', () => {
    const wrapper = createComponent();
    expect(wrapper.find('icon-stub').attributes('name')).toEqual('ion-android-open');
  });

  it('should accept an href', () => {
    const href = 'https://rafaelcamargo.com';
    const wrapper = createComponent({ href });
    expect(wrapper.element.getAttribute('href')).toEqual(href);
  });

  it('should href open in a new tab', () => {
    const wrapper = createComponent();
    expect(wrapper.element.getAttribute('target')).toEqual('_blank');
  });

  it('should transclude some content', () => {
    const wrapper = createComponent({}, { default: '<p>Hello</p>' });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
