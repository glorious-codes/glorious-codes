import { shallowMount } from '@vue/test-utils';
import Prism from 'prismjs';
import GDemo from '@glorious/demo';
import { GDemoMock, gDemoInstanceMock } from '@mocks/glorious-demo';
import rasketDemo from './rasket-demo';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

describe('Rasket Demo', () => {
  function mountComponent(){
    return shallowMount(rasketDemo);
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['rasket-demo']);
  });

  it('should contain container attribute', () => {
    const wrapper = mountComponent();
    const container = wrapper.element;
    expect(container.getAttribute('data-rasket-demo-container')).toBeDefined();
  });

  it('should instantiate Glorious Demo on mount', () => {
    mountComponent();
    expect(GDemoMock).toHaveBeenCalledWith('[data-rasket-demo-container]');
  });

  it('should play demo on mount', () => {
    const code = `
import rasket from '@glorious/rasket';

// Use subscribe method to be notified about
// the event you are interested in:
const id = rasket.subscribe('user:updated', user => {
  console.log(user.name);
});

setTimeout(() => {
  // Use publish method to notify all the subscribers
  // interested in the respective event.
  // You can pass some data as second argument:
  rasket.publish('user:updated', { name: 'Rafael' });

  // When you are no longer interested in that event,
  // you can unsubscribe from that.
  rasket.unsubscribe(id);
}, 3000);
`;
    const highlightedCode = Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript'
    );
    mountComponent();
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      minHeight: '490px',
      windowTitle: 'demo.js'
    });
    expect(gDemoInstanceMock.write).toHaveBeenCalledWith(highlightedCode, { onCompleteDelay: 2000 });
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('terminal', { minHeight: '490px', promptString: '$' });
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('node demo.js', { onCompleteDelay: 3000 });
    expect(gDemoInstanceMock.respond).toHaveBeenCalledWith('Rafael');
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('');
    expect(gDemoInstanceMock.end).toHaveBeenCalled();
  });
});
