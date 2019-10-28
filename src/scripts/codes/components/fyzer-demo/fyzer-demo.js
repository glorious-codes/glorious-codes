import '@styles/fyzer-demo.styl';
import '@glorious/demo/dist/gdemo.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import GDemo from '@glorious/demo';
import Prism from 'prismjs';
import ENV from '@environment';
import baseLink from '@scripts/base/components/base-link/base-link';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import tweetBtn from '@scripts/base/components/tweet-btn/tweet-btn';
import codeDemoToolbar from '@scripts/codes/components/code-demo-toolbar/code-demo-toolbar';
import template from './fyzer-demo.html';

export default {
  name: 'cookie-demo',
  components: {
    baseLink,
    row,
    rowItem,
    tweetBtn,
    codeDemoToolbar
  },
  data(){
    return {
      tweet: ''
    };
  },
  mounted(){
    this.play();
    this.setTweet(this.buildTweet());
  },
  methods: {
    buildTweet(){
      return [
        'Just discovered the easiest way of observing when an element',
        `appears above the page fold! ${ENV.APP.BASE_URL}/fyzer`
      ].join(' ');
    },
    setTweet(tweet){
      this.tweet = tweet;
    },
    play(){
      const gdemo = new GDemo('[data-fyzer-demo-container]');
      const code = `
import fyzer from '@glorious/fyzer';

const element = document.querySelector('#myElement');

const subscriptionId = fyzer.subscribe(element, () => {
  // This function will be called every time
  // element appears above the fold.
});

// When you no longer needs to observe the element's
// position, you can unsubscribe from Fyzer:
fyzer.unsubscribe(subscriptionId);
`;
      const highlightedCode = Prism.highlight(
        code,
        Prism.languages.javascript,
        'javascript'
      );
      gdemo.openApp('editor', { minHeight: '400px', windowTitle: 'demo.js' })
        .write(highlightedCode)
        .end();
    }
  },
  template
};
