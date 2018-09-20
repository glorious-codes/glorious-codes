import list from '@scripts/base/components/list/list';
import listItem from '@scripts/base/components/list-item/list-item';
import baseLink from '@scripts/base/components/base-link/base-link';
import menuService from '@scripts/base/services/menu/menu';
import template from './base-menu.html';

export default {
  name: 'base-menu',
  props: ['menuName'],
  data(){
    return {
      items: []
    };
  },
  components: {
    list,
    listItem,
    baseLink
  },
  created(){
    this.setItems(menuService.buildItems(this.menuName));
  },
  methods: {
    setItems(items){
      this.items = items;
    }
  },
  template
};
