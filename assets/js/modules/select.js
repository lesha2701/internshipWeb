import select2 from 'select2';

const ELEMENT_SELECTOR = {
    selectBox: '[data-select]',
    selectContor: '[data-select-control]',
};

export default function() {
    const baseOptions = {};

    $(ELEMENT_SELECTOR.selectContor).each(function(index, select) {
        const $selectBox = $(select).closest(ELEMENT_SELECTOR.selectBox);

        const placeholder = $(select).data('placeholder');

        const currentOptions = {
            ...baseOptions,
            placeholder,
            dropdownParent: $selectBox,
        };
        $(select).select2(currentOptions);
    });
}

