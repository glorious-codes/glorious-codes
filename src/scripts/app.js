import '@styles/_native.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import template from './app.html'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = {
  name: 'app',
  template
};

const mountedApp = new Vue({
  el: '[data-app]',
  router,
  render: h => h(app),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
});
