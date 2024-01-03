/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from './modules/tabs';
import sidebar from './modules/sidebar';
import swiper from './modules/swiper';
import select from './modules/select';
import accordion from './modules/accordion';
import tippy from './modules/tippy';
import show_more from './modules/show-more';
import inputmask from './modules/inputmask';
import validation from './modules/validation';
import modal from './modules/modal';
import showEmail from './modules/showEmail';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();
        tabs();
        sidebar();
        swiper();
        select();
        accordion();
        tippy();
        show_more();
        inputmask();
        validation();
        modal();
        showEmail();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
