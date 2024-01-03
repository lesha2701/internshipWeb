import tippy from 'tippy.js';

const ELEMENT_SELECTOR = {
    tippyBox: '[data-tippy-box]',
    tippyElement: '[data-tippy]',
};

export default function() {

    $(ELEMENT_SELECTOR.tippyBox).each(function() {
        
        const text = $(this).find(ELEMENT_SELECTOR.tippyElement)

        const baseParams = {
            content: text.data('tippy')
        };
    
        const customParams = {
            arrow: false,
            animation: 'fade'
        }
    
        const currentParams = {
            ...baseParams,
            ...customParams
        }

        tippy(this, currentParams)
    })
}
