import { shallowMount } from '@vue/test-utils';
import btnGroup from './btn-group';

describe('Btn Group', () => {

  function createComponent(slots){
    return shallowMount(btnGroup, { slots });
  }

  it('should render a btn group', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toContain('btn-group');
  });

  it('should render default slot', () => {
    const wrapper = createComponent({default: '<button>Button</button>'});
    expect(wrapper.find('button').text()).toContain('Button');
  });

});
