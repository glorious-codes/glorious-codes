import '@images/cookie-916x460.png';
import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import cookieDemo from '@scripts/codes/components/cookie-demo/cookie-demo';
import template from './cookie.html';

const head = seoService.buildHead({
  title: 'Glorious Cookie',
  description: 'The tiniest cookies library.',
  keywords: 'glorious, cookie, browser',
  imageFilename: 'cookie-916x460.png'
});

export default {
  name: 'cookie',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    cookieDemo
  },
  head,
  template
};
