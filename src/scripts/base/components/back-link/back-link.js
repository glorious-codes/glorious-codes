import baseLink from '@scripts/base/components/base-link/base-link';
import template from './back-link.html';

export default {
  name: 'back-link',
  props: ['routeName'],
  components: {
    baseLink
  },
  template
};
