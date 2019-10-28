import codesHome from '@scripts/codes/views/home/home';
import codesCookie from '@scripts/codes/views/cookie/cookie';
import codesCrud from '@scripts/codes/views/crud/crud';
import codesDemo from '@scripts/codes/views/demo/demo';
import codesFyzer from '@scripts/codes/views/fyzer/fyzer';
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
    }
  },
  {
    path: '/crud',
    name: 'crud',
    component: codesCrud,
    codesMenu: {
      text: 'Glorious Crud'
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: codesDemo,
    codesMenu: {
      text: 'Glorious Demo'
    }
  },
  {
    path: '/fyzer',
    name: 'fyzer',
    component: codesFyzer,
    codesMenu: {
      text: 'Glorious Fyzer'
    }
  },
  {
    path: '/author',
    name: 'author',
    component: authorHome,
    appMenu: {
      text: 'Author'
    }
  }
];

export default routes;
