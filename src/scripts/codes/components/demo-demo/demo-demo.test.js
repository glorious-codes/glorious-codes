import { shallowMount } from '@vue/test-utils';
import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import demoPreviewService from '@scripts/codes/services/demo-preview/demo-preview';
import demoDemo from './demo-demo';

describe('Demo Demo', () => {
  function mountComponent(){
    return shallowMount(demoDemo);
  }

  beforeEach(() => {
    demoPreviewService.build = jest.fn();
  });

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['demo-demo']);
  });

  it('should contain demo container attribute', () => {
    const wrapper = mountComponent();
    const container = wrapper.element;
    expect(container.getAttribute('data-demo-container')).toBeDefined();
  });

  it('should build default demo preview on mount', () =>{
    const wrapper = mountComponent();
    expect(demoPreviewService.build).toHaveBeenCalledWith(
      DEFAULT_DEMO_CODE,
      wrapper.vm.onDemoCodeCompilationError
    );
  });

  it('should preview default demo code on mount', () =>{
    const wrapper = mountComponent();
    expect(wrapper.vm.isPreviewerVisible).toEqual(true);
    expect(wrapper.vm.isEditorVisible).toEqual(false);
  });

  it('should allow editing demo code', () => {
    const wrapper = mountComponent();
    wrapper.vm.showEditor();
    expect(wrapper.vm.isPreviewerVisible).toEqual(false);
    expect(wrapper.vm.isEditorVisible).toEqual(true);
  });

  it('should preview an edited demo code', () => {
    const demoCode = 'console.log("test")';
    const wrapper = mountComponent();
    wrapper.vm.demoCode = demoCode;
    wrapper.vm.preview();
    expect(demoPreviewService.build).toHaveBeenCalledWith(
      demoCode,
      wrapper.vm.onDemoCodeCompilationError
    );
  });

  it('should set an alert on demo code compilation error', () => {
    const message = 'Some error';
    const wrapper = mountComponent();
    wrapper.vm.onDemoCodeCompilationError({message});
    expect(wrapper.vm.alert).toEqual({
      message: `Compilation Error: ${message}.`,
      theme: 'error'
    });
  });

  it('should clear alert on show demo code editor', () => {
    const wrapper = mountComponent();
    wrapper.vm.alert = {some: 'alert'};
    wrapper.vm.showEditor();
    expect(wrapper.vm.alert).toEqual(null);
  });
});
