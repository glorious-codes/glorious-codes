import codesDemo from '@scripts/codes/views/demo/demo';

const routes = [
  {
    path: '/',
    name: 'home',
    component: codesDemo,
    codesMenu: {
      text: 'Glorious Demo'
    }
  }
];

export default routes;
