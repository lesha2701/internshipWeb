<template>
    <article class="direction">
        <div class="direction__icons">
            <img class="direction__icons-pic" 
                :src="require(`@/assets/images/icons/directions/${img}`)" 
                :alt="img"
            >
        </div>
        <div class="direction__info">
            <h3 class="direction__title">{{ title }}</h3>
            <p class="direction__text">{{ text }}</p>
        </div>
    </article>
</template>
<script>
export default {
    name: 'DirectionComponent',
    props: {
        title: {
            type: String,
            default: 'Заголовка нет'
        },
        text: {
            type: String,
            default: 'У карточки нет текста'
        },
        img: {
            type: String
        }
    }
    
}
</script>
<style lang="scss">
.direction {
    position: relative;

    display: flex;
    
    background-color: $athens-gray;
    box-shadow: 0 rem(4px) rem(12px) 0 rgba(0, 0, 0, 0.10);
    border-radius: rem(24px);

    cursor: pointer;

    &::before {
        content: '';
        position: absolute;

        border-radius: rem(24px);

        width: 100%;
        height: 100%;

        background-image: url(../../../assets/images/icons/circle3.svg);
        background-repeat: no-repeat;

        @media #{$screen-tablet} {
            background-image: url(../../../assets/images/icons/circle2.svg);
        }

        @media #{$screen-desktop} {
            background-image: url(../../../assets/images/icons/circle.svg);
        }

    }

    &__icons {

        z-index: 10;
        padding-top: rem(6px);
        padding-left: rem(7px);

        @media #{$screen-tablet} {
            padding-top: rem(11px);
            padding-left: rem(8px);
        }

        @media #{$screen-desktop} {
            padding-top: rem(19px);
            padding-left: rem(15px);
        }

        &-pic {
            width: rem(44px);

            @media #{$screen-desktop} {
                width: rem(54px);
            }
        }
    }

    &__title {
        font-size: rem($font-size-tiny);
        line-height: rem(19px);
        font-weight: $font-weight-medium;

        @media #{$screen-tablet} {
            font-size: $font-size-high;
            line-height: $line-height-high;
        }
    }

    &__text {
        font-size: rem($font-size-min);
        line-height: rem(16px);

        opacity: .8;

        margin-top: rem(6px);
        width: rem(172px);

        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media #{$screen-tablet} {
            font-size: rem($font-size-small);

            width: rem(200px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-tiny);
            line-height: rem(21px);

            width: rem(220px);
            margin-top: rem(10px);
        }
    }

    &__info {
        padding: rem(20px) 0 rem(20px) rem(60px);

        @media #{$screen-tablet} {
            padding: rem(30px) 0 rem(30px) rem(60px);
        }

        @media #{$screen-desktop} {
            padding: rem(40px) 0 rem(40px) rem(60px);
        }
    }
}
</style>