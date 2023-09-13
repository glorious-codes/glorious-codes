import { shallowMount } from '@vue/test-utils';
import list from '@scripts/base/components/list/list';
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

  it('should contain link for Author website', () => {
    const link = 'https://rafaelcamargo.com';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(0).attributes('href')).toEqual(link);
  });

  it('should contain link for Typenik project', () => {
    const link = 'https://typenik.com';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(1).attributes('href')).toEqual(link);
  });

  it('should contain link for Nashios project', () => {
    const link = 'https://nashios-web.web.app';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(2).attributes('href')).toEqual(link);
  });

  it('should contain link for Teleflik project', () => {
    const link = 'https://play.google.com/store/apps/details?id=com.ionicframework.teleflik479683';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(3).attributes('href')).toEqual(link);
  });

  it('should contain link for sending an email', () => {
    const link = 'https://rafaelcamargo.com/contact';
    const wrapper = mountComponent();
    const projectLinks = wrapper.findAll('a');
    expect(projectLinks.at(4).attributes('href')).toEqual(link);
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

  it('should contain external link for Github', () => {
    const link = 'https://github.com/rafaelcamargo';
    const wrapper = mountComponent();
    expect(wrapper.findAll(externalLink).at(0).attributes('href')).toEqual(link);
  });

  it('should contain external link for Dribbble', () => {
    const link = 'https://dribbble.com/rcamargo';
    const wrapper = mountComponent();
    expect(wrapper.findAll(externalLink).at(1).attributes('href')).toEqual(link);
  });
});
