import '@images/cookie-916x460.png';
import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import cookieDemo from '@scripts/codes/components/cookie-demo/cookie-demo';
import template from './cookie.html';

const head = seoService.buildHead({
  title: 'Glorious Cookie',
  description: 'The tiniest cookies library.',
  keywords: 'glorious, cookie, browser',
  imageFilename: 'cookie-916x460.png',
  imageSize: 'large'
});

export default {
  name: 'cookie',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    codeWeightBadge,
    cookieDemo
  },
  head,
  template
};
