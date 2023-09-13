import '@images/social-250x250.png';
import ENV from '@environment';

const _public = {};

_public.buildHead = ({ title, description, keywords, imageFilename, imageSize }) => {
  const desc = Array.isArray(description) ? description.join(' ') : description;
  return {
    title: {
      inner: title
    },
    meta: [
      { name: 'application-name', content: '' },
      { name: 'description', content: desc, id: 'desc' },
      { name: 'keywords', content: keywords },
      // Twitter
      { name: 'twitter:card', content: buildTwitterCardSize(imageSize) },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc },
      // Google+ / Schema.org
      { itemprop: 'name', content: title },
      { itemprop: 'desc', content: desc },
      // Facebook / Open Graph
      { property: 'og:title', content: title },
      { property: 'og:image', content: buildImageUrlPath(imageFilename) }
    ]
  };
};

function buildTwitterCardSize(imageSize){
  return imageSize == 'large' ? 'summary_large_image' : 'summary';
}

function buildImageUrlPath(imageFilename){
  const filename = imageFilename || 'social-250x250.png';
  return `${ENV.APP.BASE_URL}/images/${filename}`;
}

export default _public;
