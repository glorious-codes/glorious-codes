import '@styles/ad-banner.styl';
import icon from '@scripts/base/components/icon/icon';
import template from './ad-banner.html';

export default {
  name: 'ad-banner',
  components: {
    icon
  },
  props: ['href'],
  template
};
