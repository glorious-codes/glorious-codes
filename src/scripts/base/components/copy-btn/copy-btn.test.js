import { shallowMount } from '@vue/test-utils';
import ClipboardJS from 'clipboard';
import btn from '@scripts/base/components/btn/btn';
import { ClipboardJSMock, clipboardJSInstanceMock } from '@mocks/clipboardjs';
import copyBtn from './copy-btn';

jest.useFakeTimers();
jest.mock('clipboard');
ClipboardJS.mockImplementation(ClipboardJSMock);

describe('Copy Btn', () => {
  function createComponent(propsData, slots){
    return shallowMount(copyBtn, { propsData, slots });
  }

  it('should have appropriate css classes', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toContain('copy-btn');
  });

  it('should contain a base button', () => {
    const wrapper = createComponent();
    expect(wrapper.contains(btn)).toEqual(true);
  });

  it('should instantiate clipboardjs on mount', () => {
    const wrapper = createComponent();
    expect(ClipboardJS).toHaveBeenCalledWith(wrapper.vm.$el.firstElementChild);
  });

  it('should build copy button on mount', () => {
    const wrapper = createComponent();
    expect(wrapper.vm.copyButton).toEqual(clipboardJSInstanceMock);
  });

  it('should optionally accept a custom icon', () => {
    const wrapper = createComponent({iconName: 'user'});
    const icon = wrapper.find('icon-stub').element;
    expect(icon.getAttribute('name')).toEqual('user');
  });

  it('should optionally accept a size', () => {
    const wrapper = createComponent({size: 'small'});
    const button = wrapper.find('btn-stub').element;
    expect(button.getAttribute('size')).toEqual('small');
  });

  it('should set copy button text', () => {
    const wrapper = createComponent({copyText: 'text to copy'});
    const button = wrapper.find('btn-stub').element;
    expect(button.getAttribute('data-clipboard-text')).toEqual('text to copy');
  });

  it('should render default slot', () => {
    const wrapper = createComponent(null, {default: '<p>Text</p>'});
    expect(wrapper.find('p').text()).toContain('Text');
  });

  it('should set copy success listener on mount', () => {
    const wrapper = createComponent();
    expect(clipboardJSInstanceMock.on).toHaveBeenCalledWith(
      'success',
      wrapper.vm.onCopySuccess
    );
  });

  it('should set copy error listener on mount', () => {
    const wrapper = createComponent();
    expect(clipboardJSInstanceMock.on).toHaveBeenCalledWith(
      'error',
      wrapper.vm.onCopyError
    );
  });

  it('should set success feedback on copy success', () => {
    const wrapper = createComponent();
    wrapper.vm.onCopySuccess();
    expect(wrapper.vm.feedback).toEqual({
      text: 'Copied!',
      iconName: 'ion-ios-checkmark'
    });
  });

  it('should set error feedback on copy error', () => {
    const wrapper = createComponent();
    wrapper.vm.onCopyError();
    expect(wrapper.vm.feedback).toEqual({
      text: 'Failed!',
      iconName: 'ion-ios-close'
    });
  });

  it('should show feedback on copy complete', () => {
    const wrapper = createComponent();
    wrapper.vm.onCopySuccess();
    expect(wrapper.vm.isFeedbackVisible).toEqual(true);
  });

  it('should hide feedback after 2 seconds after it has been shown', () => {
    const wrapper = createComponent();
    wrapper.vm.onCopySuccess();
    jest.advanceTimersByTime(2000);
    expect(wrapper.vm.isFeedbackVisible).toEqual(false);
  });
});
