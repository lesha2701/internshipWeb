const ELEMENTS_SELECTOR = {
    accordion: '[data-accordion]',
    button: '[data-accordion-toggle]',
    content: '[data-accordion-content]'
};

export default function () {
   $(document).on('click', ELEMENTS_SELECTOR.button, function() {
        const parent = $(this).closest(ELEMENTS_SELECTOR.accordion)
        const content = parent.find(ELEMENTS_SELECTOR.content)

        parent.toggleClass('accordion__item--opened');
        content.slideToggle();
   }) 
}