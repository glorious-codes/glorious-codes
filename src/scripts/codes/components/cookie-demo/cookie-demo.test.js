import { shallowMount } from '@vue/test-utils';
import Prism from 'prismjs';
import GDemo from '@glorious/demo';
import { GDemoMock, gDemoInstanceMock } from '@mocks/glorious-demo';
import cookieDemo from './cookie-demo';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

describe('Cookie Demo', () => {
  function mountComponent(){
    return shallowMount(cookieDemo);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['cookie-demo']);
  });

  it('should contain container attribute', () => {
    const wrapper = mountComponent();
    const container = wrapper.element;
    expect(container.getAttribute('data-cookie-demo-container')).toBeDefined();
  });

  it('should instantiate Glorious Demo on mount', () => {
    mountComponent();
    expect(GDemoMock).toHaveBeenCalledWith('[data-cookie-demo-container]');
  });

  it('should play demo on mount', () => {
    const code = `
import gcookie from '@glorious/cookie';

gcookie.set('username', 'Rafael');

const cookies = gcookie.get();
console.log(cookies); // { username: 'Rafael' }

gcookie.remove('username');
`;
    const highlightedCode = Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript'
    );
    mountComponent();
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      minHeight: '400px',
      windowTitle: 'demo.js'
    });
    expect(gDemoInstanceMock.write).toHaveBeenCalledWith(highlightedCode);
    expect(gDemoInstanceMock.end).toHaveBeenCalled();
  });
});
