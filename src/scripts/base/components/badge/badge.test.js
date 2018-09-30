import { mount } from '@vue/test-utils';
import badge from './badge';

describe('Badge', () => {

  function createComponent(propsData){
    return mount(badge, { propsData });
  }

  it('should render a default badge', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toContain('badge');
  });

  it('should render a success badge', () => {
    const wrapper = createComponent({theme: 'success'});
    expect(wrapper.classes()).toContain('badge-success');
  });

  it('should render a badge with icon', () => {
    const iconName = 'user';
    const wrapper = createComponent({iconName});
    expect(wrapper.find('.icon').classes()).toContain(iconName);
  });

  it('should render a badge text', () => {
    const text = 'Some Text';
    const wrapper = createComponent({text});
    expect(wrapper.find('span').text()).toContain(text);
  });

});
