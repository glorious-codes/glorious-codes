import { mount } from '@vue/test-utils';
import logo from '@scripts/base/components/logo/logo';
import heroHeading from './hero-heading';

describe('Hero Heading', () => {
  function mountComponent(propsData){
    return mount(heroHeading, { propsData });
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent({heading: 'Glorious Codes'});
    expect(wrapper.classes()).toEqual(['hero-heading']);
  });

  it('should contain a logo', () => {
    const wrapper = mountComponent({heading: 'Glorious Codes'});
    expect(wrapper.contains(logo)).toEqual(true);
  });

  it('should show one word per line', () => {
    const wrapper = mountComponent({heading: 'Glorious Codes'});
    expect(wrapper.find('h1').html()).toEqual('<h1>Glorious<br>Codes</h1>');
  });
});
