import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import codesMenu from '@scripts/codes/components/codes-menu/codes-menu';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Compilorama',
  description: [
    'Compilorama is a software development company run solely by Rafael Camargo.'
  ],
  keywords: 'npm, packages, glorious demo, pitsby, taslonic'
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
