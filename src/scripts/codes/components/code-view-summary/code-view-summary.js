import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import externalLink from '@scripts/base/components/external-link/external-link';
import codesBackLink from '@scripts/codes/components/codes-back-link/codes-back-link';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import template from './code-view-summary.html';

export default {
  name: 'code-view-summary',
  props: {
    heading: String,
    heroHeading: Boolean,
    externalLinkHref: String
  },
  components: {
    list,
    listItem,
    externalLink,
    codesBackLink,
    viewSummary
  },
  template
};
