import Swiper from 'swiper';

function swipers() {
    const carousel = $('[data-carousel]');

    carousel.each(function(i, el) {
        let obj = $(el),
        type = obj.data('carousel'),
        container = $('[data-carousel-container]', obj),
        prev = $('[data-carousel-prev]', obj),
        next = $('[data-carousel-next]', obj),
        pagination = $('[data-carousel-pagination]', obj),

        params = {
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            pagination: {
                el: pagination,
                clickable: true
            },
            loop: true
        },

        paramsCustom = {};

        if (type == 'infinity') {
            paramsCustom = {
                slidesPerView: 'auto',
                centeredSlides: true,
                breakpoints: {
                    375: {
                        spaceBetween: 4
                    },
                    768: {
                        spaceBetween: 20
                    },
                    1440: {
                        spaceBetween: 30
                    }
                }
            };
        } else if (type == 'notifications') {
            paramsCustom = {
                spaceBetween: 30,
                breakpoints: {
                    375: {
                        slidesPerView: 1.15
                    },
                    768: {
                        slidesPerView: 2.4
                    },
                    1440: {
                        slidesPerView: 4
                    }
                }
            }
        }

        params = $.extend(params, paramsCustom)

        let instance = new Swiper(container, params);
    });
}

export default swipers;