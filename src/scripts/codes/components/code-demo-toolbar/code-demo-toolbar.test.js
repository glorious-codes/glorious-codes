import { shallowMount } from '@vue/test-utils';
import codeDemoToolbar from './code-demo-toolbar';

describe('Code Demo Toolbar', () => {
  function mountComponent(slots){
    return shallowMount(codeDemoToolbar, { slots });
  }

  it('should render left slot', () => {
    const wrapper = mountComponent({left: '<p>Left</p>'});
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('Left');
  });

  it('should render right slot', () => {
    const wrapper = mountComponent({right: '<p>Right</p>'});
    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toEqual('Right');
  });
});
