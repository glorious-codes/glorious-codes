import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@scripts/home/views/home'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
