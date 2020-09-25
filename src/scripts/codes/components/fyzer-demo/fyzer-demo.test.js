import { shallowMount } from '@vue/test-utils';
import Prism from 'prismjs';
import GDemo from '@glorious/demo';
import { GDemoMock, gDemoInstanceMock } from '@mocks/glorious-demo';
import fyzerDemo from './fyzer-demo';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

describe('Fyzer Demo', () => {
  function mountComponent(){
    return shallowMount(fyzerDemo);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['fyzer-demo']);
  });

  it('should contain container attribute', () => {
    const wrapper = mountComponent();
    const container = wrapper.element;
    expect(container.getAttribute('data-fyzer-demo-container')).toBeDefined();
  });

  it('should instantiate Glorious Demo on mount', () => {
    mountComponent();
    expect(GDemoMock).toHaveBeenCalledWith('[data-fyzer-demo-container]');
  });

  it('should play demo on mount', () => {
    const code = `
import fyzer from '@glorious/fyzer';

const element = document.querySelector('#myElement');

const subscriptionId = fyzer.subscribe(element, () => {
  // This function will be called every time
  // element appears above the fold.
});

// When you no longer need to observe the element's
// position, you can unsubscribe from Fyzer:
fyzer.unsubscribe(subscriptionId);
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
