import '@images/codes-916x460.png';
import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import codesMenu from '@scripts/codes/components/codes-menu/codes-menu';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Glorious Codes',
  description: [
    'Glorious Codes is a project that values clean code and continuous',
    'refactoring as a way of getting high quality software.'
  ],
  keywords: 'npm, packages, glorious, demo, pitsby, taslonic, cookie',
  imageFilename: 'codes-916x460.png'
});

export default {
  name: 'codes',
  components: {
    row,
    rowItem,
    viewport,
    viewSummary,
    codesMenu
  },
  head,
  template
};
