import '@styles/topbar.styl';
import appContainer from '@scripts/base/components/app-container/app-container';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import appMenu from '@scripts/base/components/app-menu/app-menu';
import template from './topbar.html';

export default {
  name: 'topbar',
  components: {
    appContainer,
    row,
    rowItem,
    appMenu
  },
  template
};
