import { mount } from '@vue/test-utils';
import alert from './alert';

describe('Alert', () => {
  let propsDataMock;

  function mockPropsData(){
    propsDataMock = {
      alert: {
        theme: 'error',
        message: 'some message!',
        retryAction: jest.fn()
      }
    };
  }

  function createComponent(propsData){
    return mount(alert, { propsData });
  }

  beforeEach(() => {
    mockPropsData();
  });

  it('should render a default alert', () => {
    delete propsDataMock.theme;
    delete propsDataMock.retryAction;
    const wrapper = createComponent(propsDataMock);
    expect(wrapper.classes()).toContain('alert');
  });

  it('should render an error alert', () => {
    const wrapper = createComponent(propsDataMock);
    expect(wrapper.classes()).toContain('alert-error');
  });

  it('should show some message', () => {
    const wrapper = createComponent(propsDataMock);
    expect(wrapper.find('.alert-message').text()).toEqual('some message!');
  });

  it('should render retry button if retry custom action was passed', () => {
    const wrapper = createComponent(propsDataMock);
    expect(wrapper.contains('button')).toBe(true);
  });

  it('should call retry custom action if it was passed', () => {
    const wrapper = createComponent(propsDataMock);
    wrapper.find('button').trigger('click');
    expect(propsDataMock.alert.retryAction).toHaveBeenCalled();
  });

  it('should not render retry button if no retry custom action was passed', () => {
    delete propsDataMock.alert.retryAction;
    const wrapper = createComponent(propsDataMock);
    expect(wrapper.contains('button')).toBe(false);
  });

  it('should remove alert if alert object is destroyed', () => {
    const wrapper = createComponent(propsDataMock);
    wrapper.setProps({ alert: null });
    expect(wrapper.contains('.alert')).toBe(false);
  });
});
