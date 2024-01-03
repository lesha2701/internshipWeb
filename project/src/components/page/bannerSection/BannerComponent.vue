<template>
    <section :class="classComp">
        <div class="banner__wrapper">
            <div class="banner__info">
                <TitleBlockComponent 
                    :title="title"
                    :big=true
                />
                <p class="banner__text">{{ text }}</p>
                <button class="banner__button button">{{ btn }}</button>
            </div>
            <div class="banner__image">
                <div class="banner__box">
                    <img class="banner__image-pic" :src="require(`@/assets/images/icons/${img}`)" :alt="img">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SvgIcon from '../../SvgIcon.vue';
import TitleBlockComponent from '../TitleBlockComponent.vue';

export default {
    name: 'BannerComponent',
    components: {
        SvgIcon,
        TitleBlockComponent
    },
    props: {
        title: {
            type: String,
            default: 'У баннера нет заголовка',
        },
        text: {
            type: String,
            default: "У баннера нет текста"
        },
        btn: {
            type: String,
            default: "Кнопка"
        },
        img: {
            type: String
        },
        classComp: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.banner {
    background-color: $color-white;


    @media #{$screen-tablet-max} {
        box-shadow: 0 rem(4px) rem(12px) 0 rgba(0, 0, 0, 0.10);
    }

    &__wrapper {
        display: flex;
        flex-direction: column-reverse;

        @media #{$screen-tablet-max} {
            align-items: center;
        }

        @media #{$screen-tablet} {
            flex-direction: row;
        }

        max-width: rem(1440px);
        margin: 0 auto;
    }

    &__info {
        text-align: center;

        padding: rem(18px) rem(20px) rem(36px) rem(20px);

        @media #{$screen-tablet} {
            text-align: left;

            padding: rem(30px) rem(34px) rem(30px) rem(34px);
        }

        @media #{$screen-desktop} {
            padding: rem(90px) rem(244px) rem(90px) rem(100px);
        }
    }

    &__title {
        font-weight: $fort-weight-semi;
        font-size: rem($font-size-big);
        line-height: rem($line-height-big);

        @media #{$screen-tablet} {
            font-size: rem($font-size-about-title-medium);
            line-height: rem($line-height-about-title-medium);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-about-title-big);
            line-height: rem($line-height-about-title-big);
            letter-spacing: rem(0.4px);
        }
    }

    &__line {
        width: rem(150px);
        height: rem(5px);

        margin: rem(18px) auto 0;

        @media #{$screen-tablet} {
            width: rem(204px);
            height: rem(8px);

            margin: 10px 0 0;
        }

        @media #{$screen-desktop} {
            width: rem(340px);
            height: rem(13px);

            margin: rem(18px) 0 0;
        }

        color: $color-accent;
    }

    &__text {
        font-size: $font-size-small;
        line-height: $font-height-small;

        margin: rem(10px) 0;

        opacity: .8;

        -webkit-line-clamp: 6;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media #{$screen-tablet} {
            font-size: rem(13px);
            line-height: rem(18px);

            margin: rem(15px) 0 rem(20px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-base);
            line-height: rem($line-height-base);

            margin: rem(36px) 0 rem(50px);
        }
    }

    &__button {
        font-size: rem($font-size-min);
        line-height: $line-height-normal;
        font-weight: $fort-weight-semi;

        padding: rem(8px) rem(24px);

        border-radius: rem(4px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-small);
            letter-spacing: rem(.24px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-high);
            letter-spacing: rem(.36px);

            padding: rem(12px) rem(36px);
        }
    }

    &__image {
        min-width: 100%;

        @media #{$screen-tablet} {
            min-width: rem(400px);
            height: rem(358px);
        }

        @media #{$screen-desktop} {
            min-width: rem(676px);
            height: rem(604px);
        }

        &-pic {
            width: 100%;
        }
    }

}
</style>