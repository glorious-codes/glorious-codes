import { shallowMount } from '@vue/test-utils';
import Prism from 'prismjs';
import GDemo from '@glorious/demo';
import dateService from '@scripts/base/services/date/date';
import { GDemoMock, gDemoInstanceMock } from '@mocks/glorious-demo';
import crudDemo from './crud-demo';

jest.mock('@glorious/demo');
GDemo.mockImplementation(GDemoMock);

function buildExpectedHighlightedCode(){
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
  return Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );
}

describe('Crud Demo', () => {
  function mountComponent(){
    return shallowMount(crudDemo);
  }

  beforeEach(() => {
    dateService.getNow = jest.fn(() => {
      return new Date(2018, 8, 19);
    });
  });

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toEqual(['crud-demo']);
  });

  it('should contain container attribute', () => {
    const wrapper = mountComponent();
    const container = wrapper.element;
    expect(container.getAttribute('data-crud-demo-container')).toBeDefined();
  });

  it('should instantiate Glorious Demo on mount', () => {
    mountComponent();
    expect(GDemoMock).toHaveBeenCalledWith('[data-crud-demo-container]');
  });

  it('should show editor when play demo', () => {
    const highlightedCode = buildExpectedHighlightedCode();
    mountComponent();
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('editor', {
      minHeight: '400px',
      windowTitle: 'demo.js'
    });
    expect(gDemoInstanceMock.write).toHaveBeenCalledWith(highlightedCode, {
      onCompleteDelay: 2000
    });
  });

  it('should show a terminal when play demo', () => {
    mountComponent();
    expect(gDemoInstanceMock.openApp).toHaveBeenCalledWith('terminal', {
      minHeight: '400px',
      promptString: '$'
    });
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('curl localhost:9000/beers \\');
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('-H \'content-type: application/json\' \\', {
      promptString: '>'
    });
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('-d \'{"name": "Opa Bier", "rating": "Awesome!"}\'', {
      onCompleteDelay: 1300
    });
    expect(gDemoInstanceMock.respond).toHaveBeenCalledWith('{ "_id" : "5b135939d58e2639309f59df" }');
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('curl localhost:9000/beers/5b135939d58e2639309f59df', {
      promptString: '$',
      onCompleteDelay: 1300
    });
    expect(gDemoInstanceMock.respond).toHaveBeenCalledWith(
/* eslint-disable indent */
`{
  "_id" : "5b135939d58e2639309f59df",
  "name" : "Opa Bier",
  "rating": "Awesome!",
  "createdAt" : "${new Date(2018, 8, 19).toISOString()}"
}`
    );
    expect(gDemoInstanceMock.command).toHaveBeenCalledWith('');
    expect(gDemoInstanceMock.end).toHaveBeenCalled();
  });
});
