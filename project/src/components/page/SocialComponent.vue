<template>
    <router-link 
    to="/" 
    :class="classComp">
        <SvgIcon 
        :name="`${icon}`"
        class="social__icon-pic"
        />
    </router-link>
</template>

<script>
import SvgIcon from '../SvgIcon.vue';
export default {
    name: 'SocialComponent',
    components: {
        SvgIcon
    },
    props: {
        icon: {
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
.social {
    &__icon {

        &-pic {
            color: $color-footer-icon;
            transition: $transition;

            &:hover {
                color: $light-slate-grey;
            }
        }
    }
}
</style>