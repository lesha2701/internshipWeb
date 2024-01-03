const ELEMENTS_SELECTOR = {
    tabs: '[data-tabs]',
    tab: '[data-tab]',
    section: 'data-tab-section'
};

const CLASSES = {
    item_active: 'tabs__item--active',
    block_active: 'tabs__block--active',
};

export default function () {
   $(document).on('click', ELEMENTS_SELECTOR.tab, function() {
        let id = $(this).data('tab');
        let container = $(this).closest(ELEMENTS_SELECTOR.tabs);

        container.find(ELEMENTS_SELECTOR.tab).removeClass(CLASSES.item_active);
        container.find(`[${ELEMENTS_SELECTOR.section}]`).removeClass(CLASSES.block_active);

        $(this).addClass(CLASSES.item_active)
        container.find(`[${ELEMENTS_SELECTOR.section}="${id}"]`).addClass(CLASSES.block_active)
   }) 
}