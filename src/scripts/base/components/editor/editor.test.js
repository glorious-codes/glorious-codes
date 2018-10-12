import { shallowMount } from '@vue/test-utils';
import CodeFlask from 'codeflask';
import idService from '@scripts/base/services/id/id';
import { CodeFlaskMock, codeFlaskInstanceMock } from '@mocks/codeflask';
import editor from './editor';

jest.mock('codeflask');
CodeFlask.mockImplementation(CodeFlaskMock);

describe('Editor', () => {

  function createComponent(propsData){
    return shallowMount(editor, { propsData });
  }

  function stubIdGeneration(generatedId){
    idService.generate = jest.fn(() => generatedId);
  }

  it('should render an editor', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toEqual(['editor']);
  });

  it('should set editor id on create', () => {
    stubIdGeneration('123');
    const wrapper = createComponent();
    expect(wrapper.vm.id).toEqual('123');
  });

  it('should build editor on mount', () => {
    stubIdGeneration('123');
    createComponent({language: 'js'});
    expect(CodeFlask).toHaveBeenCalledWith('[editor-id="123"]', {
      language: 'js'
    });
  });

  it('should set editor content on mount', () => {
    const code = 'const test = true;';
    createComponent({code});
    expect(codeFlaskInstanceMock.updateCode).toHaveBeenCalledWith(code);
  });

  it('should set change listener on mount', () => {
    const onCodeChange = jest.fn();
    createComponent({onCodeChange});
    expect(codeFlaskInstanceMock.onUpdate).toHaveBeenCalledWith(onCodeChange);
  });
});
