import seoService from '@scripts/base/services/seo/seo';
import template from './author.html'

const head = seoService.buildHead({
  title: 'Author',
  description: [
    'My name is Rafael Camargo, developer with a sharp eye for design focused',
    'on Frontend/UI Architecture. Maker of Nashios, Teleflik and Dollert.'
  ],
  keywords: 'Rafael Camargo, nashios, teleflik, dollert, frontend, UI'
});

export default {
  name: 'author',
  head,
  template
}
