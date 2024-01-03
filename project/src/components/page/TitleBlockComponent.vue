<template>
    <div class="block" :class="big ? 'block--big' : 'block--min'">
        <h2 class="block__text">{{ title }}</h2>
        <SvgIcon 
            :name="'underLine'"
            class="block__line"
            :style="`color: ${colorLine}`"
        />
    </div>
</template>
<script>
import SvgIcon from '../SvgIcon.vue';
export default {
    name: 'TitleBlockComponent',
    components: {
        SvgIcon
    },
    props: {
        title: {
            type: String
        },
        big: {
            type: Boolean,
            default: false
        },
        colorLine: {
            type: String,
            default: "#34aadd"
        }
    }
    
}
</script>
<style lang="scss">
.block {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media #{$screen-tablet} {
        align-items: flex-start;
    }

    &--min & {
        &__text {
            font-size: rem($font-size-high);
            line-height: rem(22px);
            font-weight: $fort-weight-semi;

            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;


            @media #{$screen-tablet} {
                font-size: rem(22px);
                line-height: rem(30px);
            }

            @media #{$screen-desktop} {
                font-size: rem(36px);
                line-height: rem(50px);
            }

            margin-bottom: rem(10px);
        }

        &__line {
            width: rem(102px);
            height: rem(4px);

            @media #{$screen-tablet} {
                width: rem(149px);
                height: rem(6px);
            }

            @media #{$screen-desktop} {
                width: rem(262px);
                height: rem(11px);
            }

            // color: $color-accent;
        }
    }

    &--big & {
        &__text {
            font-size: rem($font-size-big);
            line-height: rem(24px);
            font-weight: $fort-weight-semi;

            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;


            @media #{$screen-tablet} {
                font-size: rem(28px);
                line-height: rem(34px);
            }

            @media #{$screen-desktop} {
                font-size: rem(40px);
                line-height: rem(48px);
                letter-spacing: rem(0.4px);
            }

            margin-bottom: rem(18px);
        }

        &__line {
            width: rem(150px);
            height: rem(5px);

            @media #{$screen-tablet} {
                width: rem(204px);
                height: rem(8px);
            }

            @media #{$screen-desktop} {
                width: rem(339px);
                height: rem(13px);
            }

            // color: $color-accent;
        }
    }
}
</style>