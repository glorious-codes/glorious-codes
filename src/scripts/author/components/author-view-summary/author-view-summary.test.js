import { shallowMount } from '@vue/test-utils';
import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import externalLink from '@scripts/base/components/external-link/external-link';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import authorViewSummary from './author-view-summary';

describe('Author View Summary', () => {
  function mountComponent(){
    return shallowMount(authorViewSummary);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['author-view-summary']);
  });

  it('should contain two paragraphs', () => {
    const wrapper = mountComponent();
    expect(wrapper.findAll('p').length).toEqual(2);
  });

  it('should contain link for Nashios project', () => {
    const link = 'https://www.nashios.com/?utm_source=glorious-codes&utm_medium=author';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(0).attributes('href')).toEqual(link);
  });

  it('should contain link for Teleflik project', () => {
    const link = 'http://teleflik.com/?utm_source=glorious-codes&utm_medium=author';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(1).attributes('href')).toEqual(link);
  });

  it('should contain link for Dollert project', () => {
    const link = 'https://chrome.google.com/webstore/detail/dollert/lkbhlmhaiggihoihajncjlnmbpigbkam';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(2).attributes('href')).toEqual(link);
  });

  it('should contain link for sending an email', () => {
    const link = 'mailto:hello@rafaelcamargo.com';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(3).attributes('href')).toEqual(link);
  });

  it('should contain a view summary', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(viewSummary)).toEqual(true);
  });

  it('should view summary contain a heading', () => {
    const wrapper = mountComponent();
    expect(wrapper.find(viewSummary).attributes('heading')).toEqual('Author');
  });

  it('should contain a list', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(list)).toEqual(true);
  });

  it('should contain three list items', () => {
    const wrapper = mountComponent();
    expect(wrapper.findAll(listItem).length).toEqual(3);
  });

  it('should contain external link for Github', () => {
    const link = 'https://github.com/rafaelcamargo';
    const wrapper = mountComponent();
    expect(wrapper.findAll(externalLink).at(0).attributes('href')).toEqual(link);
  });

  it('should contain external link for Twitter', () => {
    const link = 'https://twitter.com/rcamargo';
    const wrapper = mountComponent();
    expect(wrapper.findAll(externalLink).at(1).attributes('href')).toEqual(link);
  });

  it('should contain external link for Dribbble', () => {
    const link = 'https://dribbble.com/rcamargo';
    const wrapper = mountComponent();
    expect(wrapper.findAll(externalLink).at(2).attributes('href')).toEqual(link);
  });
});
