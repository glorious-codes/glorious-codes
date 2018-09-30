export default `
const gdemo = new GDemo('[data-demo-container]');

const code = 'console.log("Hello World!");'

const highlightedCode = Prism.highlight(
  code,
  Prism.languages.javascript,
  'javascript'
);

gdemo
  .openApp('editor', { minHeight: '400px', windowTitle: 'demo.js' })
  .write(highlightedCode, { onCompleteDelay: 2000 })
  .openApp('terminal', { minHeight: '400px', promptString: '$' })
  .command('node ./demo')
  .respond('Hello World!')
  .command('')
  .end();
`;
