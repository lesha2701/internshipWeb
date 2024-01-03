const ELEMENTS_SELECTOR = {
    sidebar: '[data-sidebar]',
    page: 'data-page',
};

const CLASSES = {
    sidebar: '.sidebar__items',
    close: '.sidebar__close',
    body: 'page--details',
};

export default function () {

    $(window).resize(function() {
        if($(window).width() >= 1440) {
            $(CLASSES.sidebar).removeAttr('style');
        }
    });

   $(document).on('click', ELEMENTS_SELECTOR.sidebar, function() {
        $(CLASSES.sidebar).slideToggle();
        $(`[${ELEMENTS_SELECTOR.page}]`).addClass(CLASSES.body)
   }) 

   $(CLASSES.close).click(function() {
        $(CLASSES.sidebar).slideToggle();
        $(`[${ELEMENTS_SELECTOR.page}]`).removeClass(CLASSES.body)
    })
}