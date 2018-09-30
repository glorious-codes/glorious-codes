import '@styles/row.styl';
import template from './row.html';

export default {
  name: 'row',
  props: {
    verticalCentered: Boolean,
    verticalOffset: String
  },
  data(){
    return {};
  },
  computed: {
    classes(){
      return {
        'row-vertical-centered': this.verticalCentered,
        [`row-vertical-offset-${this.verticalOffset}`]: !!this.verticalOffset
      };
    }
  },
  template
};
