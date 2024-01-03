const ELEMENTS_SELECTOR = {
    show: '[data-show-more]',
    button: '[data-show-more-toggle]',
    content: '[data-show-more-content]',
    text: '[data-show-more-text]'
};

export default function () {
   $(document).on('click', ELEMENTS_SELECTOR.button, function() {
        const parent = $(this).closest(ELEMENTS_SELECTOR.show)
        const content = parent.find(ELEMENTS_SELECTOR.content)

        parent.toggleClass('show-more--opened');
        content.slideToggle();
        
        const buttonText = $(ELEMENTS_SELECTOR.text).text()
        
        buttonText == 'Показать еще' ? $(ELEMENTS_SELECTOR.text).text('Скрыть') : 
        $(ELEMENTS_SELECTOR.text).text('Показать еще');
   }) 
}