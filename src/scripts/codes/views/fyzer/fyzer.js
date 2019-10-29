import '@images/fyzer-200x200.png';
import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import fyzerDemo from '@scripts/codes/components/fyzer-demo/fyzer-demo';
import template from './fyzer.html';

const head = seoService.buildHead({
  title: 'Glorious Fyzer',
  description: 'Listen when some element just appears above the page fold.',
  keywords: 'glorious, fyzer, page fold',
  imageFilename: 'fyzer-200x200.png'
});

export default {
  name: 'fyzer',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    codeWeightBadge,
    fyzerDemo
  },
  head,
  template
};
