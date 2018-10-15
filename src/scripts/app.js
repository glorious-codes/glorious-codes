import '@styles/_native.styl';
import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import ENV from '@environment';
import routes from './routes';
import topbar from '@scripts/base/components/topbar/topbar';
import routeService from '@scripts/base/services/route/route';
import analyticsService from '@scripts/base/services/analytics/analytics';
import template from './app.html';

Vue.use(VueHead, {
  separator: '',
  complement: ''
});
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

routeService.setRouter(router);
analyticsService.init(ENV.ANALYTICS);

const app = {
  name: 'app',
  components: {
    topbar
  },
  template
};

/* eslint-disable no-unused-vars */
const mountedApp = new Vue({
  el: '[data-app]',
  router,
  render: h => h(app),
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
});
