import { shallowMount } from '@vue/test-utils';
import list from '@scripts/base/components/list/list';
import menuService from '@scripts/base/services/menu/menu';
import baseMenu from './base-menu';

describe('Base Menu', () => {
  function mountComponent(propsData){
    return shallowMount(baseMenu, {propsData});
  }

  function mockMenuItems(){
    return [
      {label: 'Home', iconName: 'home', routeName: 'home'},
      {label: 'Author', iconName: 'person', routeName: 'author'}
    ];
  }

  beforeEach(() => {
    menuService.buildItems = jest.fn(() => mockMenuItems());
  });

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['base-menu']);
  });

  it('should build menu items according menu name', () => {
    const menuName = 'appMenu';
    mountComponent({menuName});
    expect(menuService.buildItems).toHaveBeenCalledWith(menuName);
  });

  it('should set built items as items', () => {
    const wrapper = mountComponent({menuName: 'appMenu'});
    expect(wrapper.vm.items).toEqual(mockMenuItems());
  });

  it('should contain a list', () => {
    const wrapper = mountComponent();
    expect(wrapper.contains(list)).toEqual(true);
  });

  it('should contain two list items', () => {
    const wrapper = mountComponent();
    const items = wrapper.findAll('listitem-stub');
    expect(items.length).toEqual(2);
  });

  it('should contain two base links', () => {
    const wrapper = mountComponent();
    const links = wrapper.findAll('baselink-stub');
    expect(links.length).toEqual(2);
    expect(links.at(0).attributes('routename')).toEqual('home');
    expect(links.at(0).attributes('iconname')).toEqual('home');
    expect(links.at(0).text()).toEqual('Home');
    expect(links.at(1).attributes('routename')).toEqual('author');
    expect(links.at(1).attributes('iconname')).toEqual('person');
    expect(links.at(1).text()).toEqual('Author');
  });
});
