import '@styles/toggle-btn-group.styl';
import btnGroup from '@scripts/base/components/btn-group/btn-group';
import template from './toggle-btn-group.html';

let PRESSED_CSS_CLASS = 'toggle-btn-pressed';

export default {
  name: 'toggle-btn-group',
  components: {
    btnGroup
  },
  mounted(){
    const buttons = this.findButtons();
    this.configInitialPressedButton(buttons);
    this.setButtonsListener(buttons);
  },
  methods: {
    findButtons(){
      return this.$el.querySelectorAll('button');
    },
    configInitialPressedButton(buttons){
      buttons.forEach(button => {
        if(this.shouldButtonStartPressed(button)) {
          this.configButtonPressState(button);
          this.removeInitialPressedState(button);
        }
      });
    },
    shouldButtonStartPressed(button){
      return button.getAttribute('pressed') !== null;
    },
    removeInitialPressedState(button){
      button.removeAttribute('pressed');
    },
    setButtonsListener(buttons){
      buttons.forEach(button => {
        button.addEventListener('click', evt => {
          this.configButtonPressState(evt.currentTarget);
        });
      });
    },
    configButtonPressState(button){
      if(!this.isButtonPressed(button)) {
        this.releaseButtons();
        this.pressButton(button);
      }
    },
    isButtonPressed(button){
      return button.classList.contains(PRESSED_CSS_CLASS);
    },
    releaseButtons(){
      this.findButtons().forEach(button => {
        this.handlePressedCssClass(button, 'remove');
      });
    },
    pressButton(button){
      this.handlePressedCssClass(button, 'add');
    },
    handlePressedCssClass(element, action){
      element.classList[action](PRESSED_CSS_CLASS);
    }
  },
  template
};
