import '@styles/hero-heading.styl';
import logo from '@scripts/base/components/logo/logo';
import template from './hero-heading.html';

export default {
  name: 'hero-heading',
  components: {
    logo
  },
  props: ['heading'],
  template
};
