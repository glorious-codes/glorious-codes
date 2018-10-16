import '@styles/demo-demo.styl';
import ENV from '@environment';
import alert from '@scripts/base/components/alert/alert';
import btn from '@scripts/base/components/btn/btn';
import btnGroup from '@scripts/base/components/btn-group/btn-group';
import copyBtn from '@scripts/base/components/copy-btn/copy-btn';
import editor from '@scripts/base/components/editor/editor';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import toggleBtnGroup from '@scripts/base/components/toggle-btn-group/toggle-btn-group';
import tweetBtn from '@scripts/base/components/tweet-btn/tweet-btn';
import codeDemoToolbar from '@scripts/codes/components/code-demo-toolbar/code-demo-toolbar';
import demoDemoInitialCodeService from '@scripts/codes/services/demo-demo-initial-code/demo-demo-initial-code';
import demoPreviewService from '@scripts/codes/services/demo-preview/demo-preview';
import template from './demo-demo.html';

export default {
  name: 'demo-demo',
  components: {
    alert,
    btn,
    btnGroup,
    copyBtn,
    editor,
    row,
    rowItem,
    toggleBtnGroup,
    tweetBtn,
    codeDemoToolbar
  },
  data(){
    return {
      alert: null,
      demoCode: null,
      isEditorVisible: null,
      isPreviewerVisible: null,
      demoLink: null,
      tweet: `Just discovered an easy way to show some code in action! ${ENV.APP.BASE_URL}/demo`
    };
  },
  created(){
    this.updateDemoCode(demoDemoInitialCodeService.get());
  },
  mounted(){
    this.preview();
  },
  methods: {
    setDemoCode(code){
      this.demoCode = code;
    },
    setDemoLink(link){
      this.demoLink = link;
    },
    onDemoCodeCompilationError({ message }){
      const msg = `Compilation Error: ${message}.`;
      this.setAlert({message: msg, theme: 'error'});
    },
    setAlert(alert){
      this.alert = alert;
    },
    showEditor(){
      this.setEditorVisibility(true);
      this.setPreviewerVisibility(false);
      this.setAlert(null);
    },
    showPreviewer(){
      this.setEditorVisibility(false);
      this.setPreviewerVisibility(true);
    },
    setEditorVisibility(isVisible){
      this.isEditorVisible = isVisible;
    },
    setPreviewerVisibility(isVisible){
      this.isPreviewerVisible = isVisible;
    },
    preview(){
      this.showPreviewer();
      demoPreviewService.build(
        this.demoCode,
        this.onDemoCodeCompilationError
      );
    },
    onEditorCodeChange(code){
      this.updateDemoCode(code);
    },
    updateDemoCode(code){
      this.setDemoCode(code);
      this.setDemoLink(demoDemoInitialCodeService.buildParameterizedUrl(code));
    }
  },
  template
};
