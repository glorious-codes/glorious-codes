import '@styles/view-summary.styl';
import heroHeading from '@scripts/base/components/hero-heading/hero-heading';
import template from './view-summary.html';

export default {
  name: 'view-summary',
  props: {
    heading: String,
    heroHeading: Boolean
  },
  components: {
    heroHeading
  },
  template
};
