import { shallowMount } from '@vue/test-utils';
import icon from './icon';

describe('Icon', () => {

  it('should render an icon', () => {
    const wrapper = shallowMount(icon, {propsData: { name: 'user' }});
    expect(wrapper.classes()).toContain('icon');
    expect(wrapper.classes()).toContain('user');
  });

});
