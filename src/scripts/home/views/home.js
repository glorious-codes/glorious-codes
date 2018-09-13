import seoService from '@scripts/base/services/seo/seo';
import logo from '@scripts/base/components/logo/logo';
import heroHeading from '@scripts/base/components/hero-heading/hero-heading';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Glorious Codes',
  description: [
    'Glorious Codes is a project that values clean code and continuous',
    'refactoring as a way of getting high quality software.'
  ],
  keywords: 'npm, packages, glorious, demo, cookie'
});

export default {
  name: 'home',
  components: {
    logo,
    heroHeading
  },
  head,
  template
}
