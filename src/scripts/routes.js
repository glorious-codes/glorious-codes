import codesHome from '@scripts/codes/views/home/home';
import codesCookie from '@scripts/codes/views/cookie/cookie';
import codesCrud from '@scripts/codes/views/crud/crud';
import authorHome from '@scripts/author/views/home/home';

const routes = [
  {
    path: '/',
    name: 'codes',
    component: codesHome,
    appMenu: {
      text: 'Codes'
    }
  },
  {
    path: '/cookie',
    name: 'cookie',
    component: codesCookie,
    codesMenu: {
      text: 'Glorious Cookie'
    },
  },
  {
    path: '/crud',
    name: 'crud',
    component: codesCrud,
    codesMenu: {
      text: 'Glorious Crud'
    },
  },
  {
    path: '/author',
    name: 'author',
    component: authorHome,
    appMenu: {
      text: 'Author'
    },
  }
];

export default routes;
