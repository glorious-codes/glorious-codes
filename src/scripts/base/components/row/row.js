import '@styles/row.styl';
import template from './row.html';

export default {
  name: 'row',
  props: {
    verticalCentered: Boolean
  },
  data(){
    return {};
  },
  computed: {
    classes(){
      return {
        'row-vertical-centered': this.verticalCentered
      };
    }
  },
  template
};
