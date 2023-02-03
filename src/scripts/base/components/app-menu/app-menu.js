import '@styles/app-menu.styl';
import baseMenu from '@scripts/base/components/base-menu/base-menu';
import baseLink from '@scripts/base/components/base-link/base-link';
import listItem from '@scripts/base/components/list-item/list-item';
import template from './app-menu.html';

export default {
  name: 'app-menu',
  components: {
    baseMenu,
    baseLink,
    listItem
  },
  template
};
