import home from '@scripts/home/views/home'
import author from '@scripts/author/views/author'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/author',
    name: 'author',
    component: author
  }
];

export default routes;
