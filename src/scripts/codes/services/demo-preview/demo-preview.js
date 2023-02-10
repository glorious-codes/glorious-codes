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
  if(tag) tag.remove();
}

function configGlobalVariables(errorCallback){
  setGlobalVariable('compilationErrorHandler', buildCompilationErrorHandler(errorCallback));
  setGlobalVariable('GDemo', GDemo);
  setGlobalVariable('Prism', Prism);
}

function buildCompilationErrorHandler(errorCallback){
  return err => errorCallback(err);
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
  return `(function(GDemo, Prism, compilationErrorHandler, ${getWindowPropsToBlock().join(',')}){
    'use strict';
    try {
      ${demoCode}
    } catch(err) {
      compilationErrorHandler && compilationErrorHandler(err);
    }
  }(window.GDemo, window.Prism, window.compilationErrorHandler));`;
}

function getWindowPropsToBlock(){
  return Object.getOwnPropertyNames(window).filter(prop => !shouldIgnoreWindowProp(prop));
}

function shouldIgnoreWindowProp(attr){
  return [
    'GDemo',
    'Prism',
    'compilationErrorHandler',
    'eval',
    '__core - js_shared__',
    '__core-js_shared__',
    'jest-symbol-do-not-touch'
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
