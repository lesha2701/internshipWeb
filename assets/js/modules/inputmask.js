import inputmask from "inputmask"

const ELEMENTS_SELECTOR = {
    maskElement: '[data-inputmask]',
};
export default function () {
    const im = new inputmask({
        removeMaskOnSubmit: true
    });
    im.mask(ELEMENTS_SELECTOR.maskElement);
 }