import seoService from './seo';

describe('SEO Service', () => {
  it('should build items', () => {
    const data = {
      title: 'Title',
      description: 'Description',
      keywords: 'Keywords',
      imageFilename: 'test.png'
    };

    expect(seoService.buildHead(data)).toEqual({
      title: {
        inner: 'Title'
      },
      meta: [
        { name: 'application-name', content: '' },
        { name: 'description', content: 'Description', id: 'desc' },
        { name: 'keywords', content: 'Keywords' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Title' },
        { name: 'twitter:description', content: 'Description' },
        { name: 'twitter:site', content: '@gloriouscodes' },
        { name: 'twitter:creator', content: '@rcamargo' },
        { itemprop: 'name', content: 'Title' },
        { itemprop: 'desc', content: 'Description' },
        { property: 'og:title', content: 'Title' },
        { property: 'og:image', content: 'http://localhost:7000/images/test.png' }
      ]
    });
  });
});
