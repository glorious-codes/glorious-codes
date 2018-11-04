import { shallowMount } from '@vue/test-utils';
import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import codesBackLink from '@scripts/codes/components/codes-back-link/codes-back-link';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import codeViewSummary from './code-view-summary';

describe('Code View Summary', () => {
  function mountComponent(propsData){
    return shallowMount(codeViewSummary, {
      propsData,
      stubs: ['gh-btns-star']
    });
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['code-view-summary']);
  });

  it('should contain a view summary', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(viewSummary)).toEqual(true);
  });

  it('should contain a heading', () => {
    const wrapper = mountComponent({heading: 'Hello'});
    const viewSummary = wrapper.find('viewsummary-stub').element;
    expect(viewSummary.getAttribute('heading')).toEqual('Hello');
  });

  it('should allow hero heading', () => {
    const wrapper = mountComponent({heroHeading: true});
    const viewSummary = wrapper.find('viewsummary-stub').element;
    expect(viewSummary.getAttribute('heroheading')).toBeDefined();
  });

  it('should contain a list', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(list)).toEqual(true);
  });

  it('should contain two list items', () => {
    const wrapper = mountComponent();
    expect(wrapper.findAll(listItem).length).toEqual(2);
  });

  it('should contain a link back to codes', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(codesBackLink)).toEqual(true);
  });

  it('should set repository slug', () => {
    const wrapper = mountComponent({ repositoryName: 'glorious-demo' });
    expect(wrapper.vm.repositorySlug).toEqual(
      'glorious-codes/glorious-demo'
    );
  });

  it('should set documentation link', () => {
    const wrapper = mountComponent({ repositoryName: 'glorious-demo' });
    expect(wrapper.vm.documentationLink).toEqual(
      'https://github.com/glorious-codes/glorious-demo#installation'
    );
  });

  it('should documentation link contain "See documentation" text', () => {
    const wrapper = mountComponent();
    const externalLink = wrapper.find('externallink-stub').element;
    expect(externalLink.innerHTML.trim()).toEqual('See documentation');
  });

  it('should show code weight badge if code weight has been passed', () => {
    const wrapper = mountComponent({ codeWeight: '4.6' });
    expect(wrapper.contains(codeWeightBadge)).toEqual(true);
  });

  it('should set code weight badge text if code weight has been passed', () => {
    const wrapper = mountComponent({ codeWeight: '4.6' });
    expect(wrapper.vm.codeWeightBadgeText).toEqual('4.6kb Gzipped');
  });

  it('should not show code weight badge if no code weight has been passed', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(codeWeightBadge)).toEqual(false);
  });
});
