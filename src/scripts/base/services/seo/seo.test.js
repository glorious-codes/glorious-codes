import seoService from './seo';

describe('SEO Service', () => {
  it('should build items', () => {
    const data = {
      title: 'Title',
      description: 'Description',
      keywords: 'Keywords'
    };

    expect(seoService.buildHead(data)).toEqual({
      title: {
        inner: 'Title'
      },
      meta: [
        { name: 'application-name', content: '' },
        { name: 'description', content: 'Description', id: 'desc' },
        { name: 'keywords', content: 'Keywords' },
        { name: 'twitter:title', content: 'Title' },
        { name: 'twitter:desc', content: 'Description' },
        { name: 'twitter:site', content: 'http://localhost:7000' },
        { name: 'twitter:creator', content: '@rcamargo' },
        { itemprop: 'name', content: 'Title' },
        { itemprop: 'desc', content: 'Description' },
        { property: 'og:title', content: 'Title' },
        { property: 'og:image', content: 'http://localhost:7000/images/glorious-codes-1012x508.png' }
      ]
    });
  });
});
