import seoService from '@scripts/base/services/seo/seo';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import viewport from '@scripts/base/components/viewport/viewport';
import codeViewSummary from '@scripts/codes/components/code-view-summary/code-view-summary';
import crudDemo from '@scripts/codes/components/crud-demo/crud-demo';
import template from './crud.html';

const head = seoService.buildHead({
  title: 'Glorious Crud',
  description: 'A bare minimum and extensible crud generator.',
  keywords: 'glorious, crud, bare minimum, extensible'
});

export default {
  name: 'cookie',
  components: {
    row,
    rowItem,
    viewport,
    codeViewSummary,
    crudDemo
  },
  head,
  template
};
