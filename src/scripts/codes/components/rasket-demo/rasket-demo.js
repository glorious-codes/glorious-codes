import '@styles/rasket-demo.styl';
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
import template from './rasket-demo.html';

export default {
  name: 'rasket-demo',
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
      return `Just discovered a simple Pub-Sub implementation! ${ENV.APP.BASE_URL}/rasket`;
    },
    setTweet(tweet){
      this.tweet = tweet;
    },
    play(){
      const gdemo = new GDemo('[data-rasket-demo-container]');
      const code = `
import rasket from '@glorious/rasket';

// Use subscribe method to be notified about
// the event you are interested in:
const id = rasket.subscribe('user:updated', user => {
  console.log(user.name);
});

setTimeout(() => {
  // Use publish method to notify all the subscribers
  // interested in the respective event.
  // You can pass some data as second argument:
  rasket.publish('user:updated', { name: 'Rafael' });

  // When you are no longer interested in that event,
  // you can unsubscribe from that.
  rasket.unsubscribe(id);
}, 3000);
`;
      const highlightedCode = Prism.highlight(
        code,
        Prism.languages.javascript,
        'javascript'
      );
      gdemo.openApp('editor', { minHeight: '490px', windowTitle: 'demo.js' })
        .write(highlightedCode, { onCompleteDelay: 2000 })
        .openApp('terminal', { minHeight: '490px', promptString: '$' })
        .command('node demo.js', { onCompleteDelay: 3000 })
        .respond('Rafael')
        .command('')
        .end();
    }
  },
  template
};
