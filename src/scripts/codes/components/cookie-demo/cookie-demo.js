import '@styles/cookie-demo.styl';
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
import template from './cookie-demo.html';

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
      tweet: `Just discovered the simplest and tiniest library to handle cookies! ${ENV.APP.BASE_URL}/cookie`
    };
  },
  mounted(){
    this.play();
  },
  methods: {
    play(){
      const gdemo = new GDemo('[data-cookie-demo-container]');
      const code = `
import gcookie from '@glorious/cookie';

gcookie.set('username', 'Rafael');

const cookies = gcookie.get();
console.log(cookie); // { username: 'Rafael' }

gcookie.remove('username');
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
