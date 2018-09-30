import '@styles/btn.styl';
import icon from '@scripts/base/components/icon/icon';
import template from './btn.html';

export default {
  name: 'btn',
  components: {
    icon
  },
  props: [
    'iconName',
    'theme',
    'size'
  ],
  computed: {
    classes() {
      return {
        [`btn-${this.theme}`]: ['primary','danger'].includes(this.theme),
        [`btn-${this.size}`]: ['small'].includes(this.size)
      };
    },
  },
  template
};
