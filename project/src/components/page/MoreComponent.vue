<template>
    <div :class="classComp">
        <router-link to="#" class="more__link">
            {{ text }}
            <SvgIcon 
                :name="'arrow2'"
                class="more__arrow"
            />
        </router-link>
    </div>
</template>
<script>
import SvgIcon from '../SvgIcon.vue';

export default {
    name: 'MoreComponent',
    components: {
        SvgIcon
    },
    props: {
        text: {
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
.more {

    &__link {
        font-size: rem($font-size-small);
        line-height: rem($font-height-small);
        letter-spacing: rem(.24px);
        font-weight: $fort-weight-semi;

        opacity: .8;
        
        display: flex;
        align-items: center;
        gap: rem(12px);

        color: $firefly;

        margin-top: rem(23px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-tiny);
            line-height: rem(19px);
            letter-spacing: rem(.28px);

            margin-top: 0;
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-high);
            line-height: rem(25px);
            letter-spacing: rem(.36px);
        }
    }

    &__arrow {
        width: rem(24px);
        height: rem(24px);

        @media #{$screen-tablet} {
            width: rem(30px);
            height: rem(30px);
        }

        @media #{$screen-desktop} {
            width: rem(36px);
            height: rem(36px);
        }
    }
}
</style>