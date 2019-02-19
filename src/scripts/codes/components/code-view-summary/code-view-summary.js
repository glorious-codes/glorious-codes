import '@styles/code-view-summary.styl';
import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import externalLink from '@scripts/base/components/external-link/external-link';
import githubButtonWidget from '@scripts/base/components/github-button-widget/github-button-widget';
import codeWeightBadge from '@scripts/codes/components/code-weight-badge/code-weight-badge';
import codesBackLink from '@scripts/codes/components/codes-back-link/codes-back-link';
import viewSummary from '@scripts/base/components/view-summary/view-summary';
import template from './code-view-summary.html';

const DOCS_BASE_URL = 'https://github.com';

export default {
  name: 'code-view-summary',
  props: {
    codeWeight: String,
    externalLinkHref: String,
    heading: String,
    heroHeading: Boolean,
    repositoryName: String,
    tagline: String
  },
  components: {
    codesBackLink,
    githubButtonWidget,
    codeWeightBadge,
    externalLink,
    list,
    listItem,
    viewSummary
  },
  data(){
    return {
      repositorySlug: null,
      documentationLink: null,
      codeWeightBadgeText: null
    };
  },
  mounted(){
    this.setRepositorySlug(this.buildRepositorySlug(this.repositoryName));
    this.setDocumentationLink(this.buildDocumentationLink(this.repositoryName));
    this.setCodeWeightBadgeText(this.buildCodeWeightBadgeText(this.codeWeight));
    this.handleCustomContentCssClass();
  },
  methods: {
    buildRepositorySlug(repositoryName){
      return `glorious-codes/${repositoryName}`;
    },
    buildDocumentationLink(repositoryName){
      return `${DOCS_BASE_URL}/${this.buildRepositorySlug(repositoryName)}#installation`;
    },
    buildCodeWeightBadgeText(codeWeight){
      return `${codeWeight}kb Gzipped`;
    },
    setRepositorySlug(slug){
      this.repositorySlug = slug;
    },
    setDocumentationLink(link){
      this.documentationLink = link;
    },
    setCodeWeightBadgeText(text){
      this.codeWeightBadgeText = text;
    },
    handleCustomContentCssClass(){
      const container = this.$el.querySelector('[data-code-view-summary-custom-content]');
      if(container.children.length)
        container.classList.add('code-view-summary-custom-content');
    }
  },
  template
};
