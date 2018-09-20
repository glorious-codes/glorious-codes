import { mount } from '@vue/test-utils';
import appContainer from './app-container';

describe('App Container', () => {
  it('should have appropriate css classes', () => {
    const wrapper = mount(appContainer);
    expect(wrapper.classes()).toEqual(['app-container']);
  });
});
