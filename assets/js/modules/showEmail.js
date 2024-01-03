const ELEMENT_SELECTOR = {
    modalSelect: '[data-modal]',
    modalEmail: '[data-modal-email]'
};

const CLASSES = {
    emailShow: 'modal__section--add',
    emailRemove: 'modal__section--remove',
};

export default function() {
      $(ELEMENT_SELECTOR.modalSelect).change(function() {
        if ($(this).val() === 'question') {
            $(ELEMENT_SELECTOR.modalEmail).removeClass(CLASSES.emailShow)
            $(ELEMENT_SELECTOR.modalEmail).addClass(CLASSES.emailRemove)
        } else if (($(this).val() === 'bug')){
            $(ELEMENT_SELECTOR.modalEmail).addClass(CLASSES.emailShow)
            $(ELEMENT_SELECTOR.modalEmail).removeClass(CLASSES.emailRemove)
        }
      })
}