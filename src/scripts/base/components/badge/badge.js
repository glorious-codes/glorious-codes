import '@styles/badge.styl';
import icon from '@scripts/base/components/icon/icon';
import template from './badge.html';

export default {
  name: 'badge',
  components: {
    icon
  },
  props: [
    'iconName',
    'text',
    'theme'
  ],
  computed: {
    classes() {
      return {
        [`badge-${this.theme}`]: ['success'].includes(this.theme)
      };
    },
  },
  template
};
