import '@styles/cookie-demo.styl';
import '@glorious/demo/dist/gdemo.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import GDemo from '@glorious/demo';
import Prism from 'prismjs';
import template from './cookie-demo.html';

export default {
  name: 'cookie-demo',
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
