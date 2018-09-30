import '@styles/alert.styl';
import btn from '@scripts/base/components/btn/btn';
import template from './alert.html';

export default {
  name: 'alert',
  props: ['alert'],
  components: {
    btn
  },
  methods: {
    retry(){
      this.alert.retryAction();
    }
  },
  computed: {
    classes() {
      return {
        [`alert-${this.alert.theme}`]: ['error'].includes(this.alert.theme),
      };
    },
  },
  template
};
