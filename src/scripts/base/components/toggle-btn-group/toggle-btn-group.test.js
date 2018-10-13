import { mount } from '@vue/test-utils';
import btn from '@scripts/base/components/btn/btn';
import btnGroup from '@scripts/base/components/btn-group/btn-group';
import toggleBtnGroup from './toggle-btn-group';

describe('Toggle Btn Group', () => {

  function createComponent(slots){
    return mount(toggleBtnGroup, { slots });
  }

  it('should have appropriate css classes', () => {
    const wrapper = createComponent();
    expect(wrapper.classes()).toContain('toggle-btn-group');
  });

  it('should contains btn group', () => {
    const wrapper = createComponent();
    expect(wrapper.contains(btnGroup)).toEqual(true);
  });

  it('should render default slot', () => {
    const wrapper = createComponent({default: '<button>Button</button>'});
    expect(wrapper.find('button').text()).toContain('Button');
  });

  it('should set button as pressed on click', () => {
    const wrapper = createComponent({default: [btn, btn]});
    const buttons = wrapper.findAll(btn);
    buttons.at(0).trigger('click');
    expect(buttons.at(0).classes().includes('toggle-btn-pressed')).toEqual(true);
  });

  it('should release other buttons when some button gets pressed', () => {
    const wrapper = createComponent({default: [btn, btn]});
    const buttons = wrapper.findAll(btn);
    buttons.at(0).element.classList.add('toggle-btn-pressed');
    buttons.at(1).trigger('click');
    expect(buttons.at(0).classes().includes('toggle-btn-pressed')).toEqual(false);
  });

  it('should keep button pressed if a pressed button gets clicked', () => {
    const wrapper = createComponent({default: [btn, btn]});
    const buttons = wrapper.findAll(btn);
    buttons.at(0).element.classList.add('toggle-btn-pressed');
    buttons.at(0).trigger('click');
    expect(buttons.at(0).classes().includes('toggle-btn-pressed')).toEqual(true);
  });

  it('should set initial pressed button', () => {
    const wrapper = createComponent({default: [
      '<button>First</button>',
      '<button pressed>Second</button>'
    ]});
    const buttons = wrapper.findAll('button');
    expect(buttons.at(1).classes().includes('toggle-btn-pressed')).toEqual(true);
  });

  it('should not set initial pressed button if no pressed attributes has been given', () => {
    const wrapper = createComponent({default: [
      '<button>First</button>',
      '<button>Second</button>'
    ]});
    const buttons = wrapper.findAll('button');
    expect(buttons.at(0).classes().includes('toggle-btn-pressed')).toEqual(false);
    expect(buttons.at(1).classes().includes('toggle-btn-pressed')).toEqual(false);
  });

  it('should remove initial pressed state after set pressed button appearance', () => {
    const wrapper = createComponent({default: [
      '<button>First</button>',
      '<button pressed>Second</button>'
    ]});
    const buttons = wrapper.findAll('button');
    expect(buttons.at(1).attributes().pressed).toEqual(undefined);
  });
});
