import DEFAULT_DEMO_CODE from '@scripts/codes/constants/demo-demo';
import alert from '@scripts/base/components/alert/alert';
import btn from '@scripts/base/components/btn/btn';
import row from '@scripts/base/components/row/row';
import rowItem from '@scripts/base/components/row-item/row-item';
import demoPreviewService from '@scripts/codes/services/demo-preview/demo-preview';
import template from './demo-demo.html';

export default {
  name: 'demo-demo',
  components: {
    alert,
    btn,
    row,
    rowItem
  },
  data(){
    return {
      alert: null,
      demoCode: '',
      isEditorVisible: null,
      isPreviewerVisible: null
    };
  },
  mounted(){
    this.setDemoCode(DEFAULT_DEMO_CODE);
    this.preview();
  },
  methods: {
    setDemoCode(code){
      this.demoCode = code;
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
    }
  },
  template
};
