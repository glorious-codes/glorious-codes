import '@styles/demo-demo.styl';
import ENV from '@environment';
import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import alert from '@scripts/base/components/alert/alert';
import btn from '@scripts/base/components/btn/btn';
import btnGroup from '@scripts/base/components/btn-group/btn-group';
import copyBtn from '@scripts/base/components/copy-btn/copy-btn';
import editor from '@scripts/base/components/editor/editor';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import toggleBtnGroup from '@scripts/base/components/toggle-btn-group/toggle-btn-group';
import tweetBtn from '@scripts/base/components/tweet-btn/tweet-btn';
import routeService from '@scripts/base/services/route/route';
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
    tweetBtn
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
    this.updateDemoCode(this.getInitialDemoCode());
  },
  mounted(){
    this.preview();
  },
  methods: {
    getInitialDemoCode(){
      const demo = routeService.getQueryParams('demo');
      return demo ? window.atob(demo) : DEFAULT_DEMO_CODE;
    },
    setDemoCode(code){
      this.demoCode = code;
    },
    buildDemoLink(demoCode){
      const link = `${ENV.APP.BASE_URL}/demo?demo=${window.btoa(demoCode)}`;
      this.setDemoLink(link);
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
      this.buildDemoLink(this.demoCode);
    }
  },
  template
};
