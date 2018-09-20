import seoService from '@scripts/base/services/seo/seo';
import viewport from '@scripts/base/components/viewport/viewport';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import authorViewSummary from '@scripts/author/components/author-view-summary/author-view-summary';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Author',
  description: [
    'My name is Rafael Camargo, developer with a sharp eye for design focused',
    'on Frontend/UI Architecture. Maker of Nashios, Teleflik and Dollert.'
  ],
  keywords: 'Rafael Camargo, nashios, teleflik, dollert, frontend, UI, design'
});

export default {
  name: 'author',
  components: {
    viewport,
    row,
    rowItem,
    authorViewSummary
  },
  head,
  template
};
