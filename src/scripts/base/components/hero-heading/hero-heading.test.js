import { mount } from '@vue/test-utils';
import heroHeading from './hero-heading';

describe('Hero Heading', () => {
  function mountComponent(propsData){
    return mount(heroHeading, { propsData });
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent({heading: 'Compilorama'});
    expect(wrapper.classes()).toEqual(['hero-heading']);
  });

  it('should render a heading', () => {
    const wrapper = mountComponent({heading: 'Compilorama'});
    expect(wrapper.find('h1').html()).toEqual('<h1>Compilorama</h1>');
  });
});
