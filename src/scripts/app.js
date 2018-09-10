import '@styles/_native.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import template from './app.html'

const app = {
  name: 'app',
  template
};

new Vue({
  el: '[data-app]',
  router,
  render: h => h(app),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
