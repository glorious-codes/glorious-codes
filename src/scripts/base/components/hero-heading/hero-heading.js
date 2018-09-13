import '@styles/hero-heading.styl';
import logo from '@scripts/base/components/logo/logo';
import template from './hero-heading.html';

export default {
  name: 'hero-heading',
  components: {
    logo
  },
  props: ['heading'],
  data(){
    return {
      text: ''
    }
  },
  created(){
    this.setText(this.oneWordPerLine(this.heading));
  },
  methods: {
    oneWordPerLine(text){
      const words = text.split(' ');
      return words.join('<br>');
    },
    setText(text){
      this.text = text;
    }
  },
  template
}
