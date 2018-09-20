import { shallowMount } from '@vue/test-utils';
import viewSummary from './view-summary';

describe('View Summary', () => {
  function mountComponent(propsData, slots){
    return shallowMount(viewSummary, {propsData, slots});
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['view-summary']);
  });

  it('should render hero heading if hero heading option is given', () => {
    const wrapper = mountComponent({heroHeading: true, heading: 'Hello!'});
    const heroHeading = wrapper.find('heroheading-stub').element;
    expect(heroHeading.getAttribute('heading')).toEqual('Hello!');
  });

  it('should not render hero heading if hero heading option is not given', () => {
    const wrapper = mountComponent();
    expect(wrapper.findAll('heroheading-stub').length).toEqual(0);
  });

  it('should render regular heading if hero heading is not given', () => {
    const wrapper = mountComponent({heading: 'Hello!'});
    expect(wrapper.find('h1').text()).toEqual('Hello!');
  });

  it('should not render regular heading if hero heading is given', () => {
    const wrapper = mountComponent({heroHeading: true, heading: 'Hello!'});
    expect(wrapper.findAll('h1').length).toEqual(0);
  });

  it('should render default slot', () => {
    const wrapper = mountComponent(null, {default: '<p>Paragraph</p>'});
    expect(wrapper.find('p').text()).toEqual('Paragraph');
  });
});
