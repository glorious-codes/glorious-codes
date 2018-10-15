import '@styles/copy-btn.styl';
import ClipboardJS from 'clipboard';
import btn from '@scripts/base/components/btn/btn';
import icon from '@scripts/base/components/icon/icon';
import template from './copy-btn.html';

export default {
  name: 'copy-btn',
  components: {
    btn,
    icon
  },
  props: ['copyText', 'iconName', 'size'],
  data(){
    return {
      copyButton: null,
      feedback: null,
      isFeedbackVisible: null
    };
  },
  mounted(){
    this.buildCopyButton();
    this.setButtonListener('success', this.onCopySuccess);
    this.setButtonListener('error', this.onCopyError);
  },
  methods: {
    buildCopyButton(){
      const copyButton = new ClipboardJS(this.getBaseButton());
      this.setCopyButton(copyButton);
    },
    getBaseButton(){
      return this.$el.firstElementChild;
    },
    setCopyButton(button){
      this.copyButton = button;
    },
    setButtonListener(trigger, action){
      this.copyButton.on(trigger, action);
    },
    onCopySuccess(){
      this.setFeedback({text: 'Copied!', iconName: 'ion-ios-checkmark'});
      this.onCopyComplete();
    },
    onCopyError(){
      this.setFeedback({text: 'Failed!', iconName: 'ion-ios-close'});
      this.onCopyComplete();
    },
    setFeedback(feedback){
      this.feedback = feedback;
    },
    onCopyComplete(){
      this.setFeedbackVisibility(true);
      setTimeout(() => {
        this.setFeedbackVisibility(false);
      }, 2000);
    },
    setFeedbackVisibility(isFeedbackVisible){
      this.isFeedbackVisible = isFeedbackVisible;
    }
  },
  template
};
