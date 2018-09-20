import baseLink from '@scripts/base/components/base-link/base-link';
import template from './external-link.html';

export default {
  name: 'external-link',
  props: ['href', 'text'],
  components: {
    baseLink
  },
  template
};
