import { shallowMount } from '@vue/test-utils';
import baseLink from './base-link';

describe('Base Link', () => {
  function mountComponent(propsData, slots){
    return shallowMount(baseLink, {propsData, stubs: ['router-link'], slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['base-link']);
  });

  it('should render a router link for internal links', () => {
    const wrapper = mountComponent({routeName: 'codes'});
    expect(wrapper.findAll('router-link-stub').length).toEqual(1);
  });

  it('should render some text for internal links', () => {
    const wrapper = mountComponent({routeName: 'codes'}, {default: 'Link Text'});
    expect(wrapper.find('router-link-stub').text()).toEqual('Link Text');
  });

  it('should render an anchor for external links', () => {
    const wrapper = mountComponent({href: 'https://nashios.com'});
    expect(wrapper.find('a').attributes('href')).toEqual('https://nashios.com');
  });

  it('should render some text for external links', () => {
    const wrapper = mountComponent({href: 'https://nashios.com'}, {default: 'Nashios Text'});
    expect(wrapper.find('a').text()).toEqual('Nashios Text');
  });

  it('should external links open in a new tab', () => {
    const wrapper = mountComponent({href: 'https://nashios.com'}, {default: 'Nashios Text'});
    expect(wrapper.find('a').attributes('target')).toEqual('_blank');
  });

  it('should optionally render an icon', () => {
    const wrapper = mountComponent({iconName: 'user'});
    expect(wrapper.find('icon-stub').attributes('name')).toEqual('user');
  });
});
