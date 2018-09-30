import GDemo from '@glorious/demo';
import { GDemoMock } from '@mocks/glorious-demo';
import demoPreviewService from '@scripts/codes/services/demo-preview/demo-preview';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

describe('Demo Preview Service', () => {
  function createContainerHtmlTag(){
    const container = document.createElement('div');
    container.setAttribute('data-demo-container','');
    return container;
  }

  beforeEach(() => {
    document.body.appendChild(createContainerHtmlTag());
  });

  afterEach(() => {
    const demoContainer = document.querySelector('[data-demo-container]');
    const scriptContainer = document.querySelector('[data-demo-container]');
    demoContainer.remove();
    scriptContainer.remove();
  });

  it('should build a script tag containing some custom script', () => {
    const demoCode = 'const gdemo = new GDemo("#container");';
    demoPreviewService.build(demoCode);
    expect(GDemoMock).toHaveBeenCalledWith('#container');
  });

  it('should remove an existing script tag before building another one', () => {
    demoPreviewService.build();
    demoPreviewService.build();
    const demoCodeScriptTags = document.querySelectorAll('[data-demo-code]');
    expect(demoCodeScriptTags.length).toEqual(1);
  });

  it('should invoke some custom error callback when demo code tries to use some global attribute', () => {
    const errorCallback = jest.fn();
    demoPreviewService.build('alert("oi");', errorCallback);
    expect(errorCallback).toHaveBeenCalled();
  });
});
