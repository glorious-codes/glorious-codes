import { shallowMount } from '@vue/test-utils';
import badge from '@scripts/base/components/badge/badge';
import codeWeightBadge from './code-weight-badge';

describe('Code Weight Badge', () => {
  function mountComponent(propsData){
    return shallowMount(codeWeightBadge, {propsData});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['code-weight-badge']);
  });

  it('should contain a badge', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(badge)).toEqual(true);
  });

  it('should badge contain a icon', () => {
    const wrapper = mountComponent();
    const badgeElement = wrapper.find('badge-stub').element;
    expect(badgeElement.getAttribute('iconname')).toEqual('ion-cube');
  });

  it('should badge use a success theme', () => {
    const wrapper = mountComponent();
    const badgeElement = wrapper.find('badge-stub').element;
    expect(badgeElement.getAttribute('theme')).toEqual('success');
  });

  it('should allow a custom text', () => {
    const text = '4kb Gzipped';
    const wrapper = mountComponent({text});
    const badgeElement = wrapper.find('badge-stub').element;
    expect(badgeElement.getAttribute('text')).toEqual(text);
  });
});
