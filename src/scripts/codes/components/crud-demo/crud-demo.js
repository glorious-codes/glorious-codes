import '@styles/crud-demo.styl';
import '@glorious/demo/dist/gdemo.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import GDemo from '@glorious/demo';
import Prism from 'prismjs';
import dateService from '@scripts/base/services/date/date';
import template from './crud-demo.html';

export default {
  name: 'cookie-demo',
  mounted(){
    this.play();
  },
  methods: {
    play(){
      const gdemo = new GDemo('[data-crud-demo-container]');
      const code = `
import express from 'express';
import GCrud from 'gcrud';

const app = express();
const gCrud = new GCrud(
  'mongodb://localhost:27017',
  'gcrud',
  app
);
const beersResource = gCrud.build('beers');

app.listen(9000);
`;
      const highlightedCode = Prism.highlight(
        code,
        Prism.languages.javascript,
        'javascript'
      );
      gdemo
        .openApp('editor', { minHeight: '400px', windowTitle: 'demo.js' })
        .write(highlightedCode, { onCompleteDelay: 2000 })
        .openApp('terminal', { minHeight: '400px', promptString: '$' })
        .command('curl localhost:9000/beers \\')
        .command('-H \'content-type: application/json\' \\', { promptString: '>' })
        .command('-d \'{"name": "Opa Bier", "rating": "Awesome!"}\'', { onCompleteDelay: 1300 })
        .respond('{ "_id" : "5b135939d58e2639309f59df" }')
        .command(
          'curl localhost:9000/beers/5b135939d58e2639309f59df',
          { promptString: '$', onCompleteDelay: 1300 }
        )
        .respond(`{
  "_id" : "5b135939d58e2639309f59df",
  "name" : "Opa Bier",
  "rating": "Awesome!",
  "createdAt" : "${dateService.getNow().toISOString()}"
}`
        )
        .command('')
        .end();
    }
  },
  template
};
