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
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Title' },
        { name: 'twitter:description', content: 'Description' },
        { itemprop: 'name', content: 'Title' },
        { itemprop: 'desc', content: 'Description' },
        { property: 'og:title', content: 'Title' },
        { property: 'og:image', content: 'http://localhost:7000/images/test.png' }
      ]
    });
  });

  it('should set a regular twitter card by default', () => {
    const data = seoService.buildHead({});
    expect(data.meta[3].content).toEqual('summary');
  });

  it('should use default thumbnail', () => {
    const data = seoService.buildHead({});
    expect(data.meta[9].content).toEqual('http://localhost:7000/images/social-250x250.png');
  });

  it('should optionally set a large twitter card', () => {
    const data = seoService.buildHead({ imageSize: 'large' });
    expect(data.meta[3].content).toEqual('summary_large_image');
  });
});
