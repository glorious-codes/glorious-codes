import ENV from '@environment';

const _public = {};

_public.buildHead = ({ title, description, keywords, imageFilename }) => {
  const desc = Array.isArray(description) ? description.join(' ') : description;
  const imageUrl = `${ENV.APP.BASE_URL}/images/${imageFilename}`;
  return {
    title: {
      inner: title
    },
    meta: [
      { name: 'application-name', content: '' },
      { name: 'description', content: desc, id: 'desc' },
      { name: 'keywords', content: keywords },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:site', content: '@gloriouscodes' },
      { name: 'twitter:creator', content: '@rcamargo' },
      // Google+ / Schema.org
      { itemprop: 'name', content: title },
      { itemprop: 'desc', content: desc },
      // Facebook / Open Graph
      { property: 'og:title', content: title },
      { property: 'og:image', content: imageUrl }
    ]
  };
};

export default _public;
