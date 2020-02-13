import '@styles/codes-menu.styl';
import baseLink from '@scripts/base/components/base-link/base-link';
import baseMenu from '@scripts/base/components/base-menu/base-menu';
import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import template from './codes-menu.html';

export default {
  name: 'codes-menu',
  components: {
    baseLink,
    baseMenu,
    list,
    listItem
  },
  template
};
