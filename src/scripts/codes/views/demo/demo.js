import '@images/demo-916x460.png';
import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import demoDemo from '@scripts/codes/components/demo-demo/demo-demo';
import template from './demo.html';

const head = seoService.buildHead({
  title: 'Glorious Demo',
  description: 'The easiest way to show your code in action.',
  keywords: 'glorious, demo, demonstration, code',
  imageFilename: 'demo-916x460.png'
});

export default {
  name: 'demo',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    codeWeightBadge,
    demoDemo
  },
  head,
  template
};
