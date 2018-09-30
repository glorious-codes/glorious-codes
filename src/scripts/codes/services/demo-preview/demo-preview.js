import '@glorious/demo/dist/gdemo.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import GDemo from '@glorious/demo';
import Prism from 'prismjs';

const _public = {};

_public.build = (demoCode, errorCallback) => {
  clearDemoPreviewContainer();
  removeCurrentDemoCodeScriptTag();
  configGlobalVariables(errorCallback);
  buildDemoCodeScriptTag(demoCode);
  deleteGlobalVariables();
};

function clearDemoPreviewContainer(){
  const tag = document.querySelector('[data-demo-container]');
  tag.innerHTML = '';
}

function removeCurrentDemoCodeScriptTag(){
  const tag = document.querySelector('[data-demo-code]');
  if(tag)
    tag.remove();
}

function configGlobalVariables(errorCallback){
  setGlobalVariable('compilationErrorHandler', buildCompilationErrorHandler(errorCallback));
  setGlobalVariable('GDemo', GDemo);
  setGlobalVariable('Prism', Prism);
}

function buildCompilationErrorHandler(errorCallback){
  const compilationErrorHandler = err => {
    errorCallback(err);
  };
  return compilationErrorHandler;
}

function setGlobalVariable(name, variable){
  window[name] = variable;
}

function buildDemoCodeScriptTag(demoCode){
  const tag = document.createElement('script');
  tag.setAttribute('data-demo-code','');
  tag.innerHTML = wrapInsideIIFE(demoCode);
  document.body.appendChild(tag);
}

function wrapInsideIIFE(demoCode){
  return `(function(${getWindowPropsToBlock().join(',')}){
    'use strict';
    try {
      ${demoCode}
    } catch(err) {
      compilationErrorHandler(err);
    }
  }());`;
}

function getWindowPropsToBlock(){
  return Object.getOwnPropertyNames(window).filter(prop => {
    return !shouldIgnoreWindowProp(prop);
  });
}

function shouldIgnoreWindowProp(attr){
  return [
    'GDemo',
    'Prism',
    'compilationErrorHandler',
    'eval',
    '__core - js_shared__',
    '__core-js_shared__'
  ].includes(attr);
}

function deleteGlobalVariables(){
  deleteGlobalVariable('compilationErrorHandler');
  deleteGlobalVariable('GDemo');
  deleteGlobalVariable('Prism');
}

function deleteGlobalVariable(name){
  delete window[name];
}

export default _public;
