import '@styles/editor.styl';
import CodeFlask from 'codeflask';
import idService from '@scripts/base/services/id/id';
import template from './editor.html';

export default {
  name: 'editor',
  props: ['language', 'code', 'onCodeChange'],
  data(){
    return {
      id: null,
      editor: null
    };
  },
  created(){
    this.setId(idService.generate());
  },
  mounted(){
    this.buildEditor();
    this.setContent(this.code);
    this.setChangeListener(this.onCodeChange);
  },
  methods: {
    buildEditor(){
      this.editor = new CodeFlask(`[editor-id="${this.id}"]`, {
        language: this.language
      });
    },
    setId(id){
      this.id = id;
    },
    setContent(content){
      this.editor.updateCode(content);
    },
    setChangeListener(handler){
      this.editor.onUpdate(handler);
    }
  },
  template
};
