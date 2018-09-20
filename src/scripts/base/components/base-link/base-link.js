import '@styles/base-link.styl';
import icon from '@scripts/base/components/icon/icon';
import template from './base-link.html';

export default {
  name: 'base-link',
  props: ['href', 'routeName', 'iconName'],
  components: {
    icon
  },
  template
};
