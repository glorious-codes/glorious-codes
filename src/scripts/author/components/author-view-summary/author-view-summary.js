import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import externalLink from '@scripts/base/components/external-link/external-link';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import template from './author-view-summary.html';

export default {
  name: 'author-view-summary',
  props: {
    heading: String
  },
  components: {
    list,
    listItem,
    externalLink,
    viewSummary
  },
  template
};
