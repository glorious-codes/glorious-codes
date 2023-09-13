import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import rasketDemo from '@scripts/codes/components/rasket-demo/rasket-demo';
import template from './rasket.html';

const head = seoService.buildHead({
  title: 'Rasket',
  description: 'A simple Pub-Sub implementation.',
  keywords: 'rasket, pub-sub pattern'
});

export default {
  name: 'rasket',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    codeWeightBadge,
    rasketDemo
  },
  head,
  template
};
