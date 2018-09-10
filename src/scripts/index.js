import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import router from './router'

new Vue({
  el: '[data-app]',
  router,
  render: h => h(app),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
