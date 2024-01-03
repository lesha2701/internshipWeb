<template>
    <div class="logo">
        <router-link to="/" class="logo__link">
            <img class="logo__pic"  
                :src="require(`@/assets/images/icons/${img}`)"
                :alt="img"
            >
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
    props: {
        img: {
            type: String
        },
        classComp: {
            type: String,
            required: true
        }
    },

}
</script>

<style lang="scss">
.logo {

    width: rem(135px);
    height: rem(30px);

    &__pic {
        padding: 0;
    }

    &__footer-pic {
        color: $color-footer-icon;
        transition: $transition;

        &:hover {
            color: $light-slate-grey;
        }
    }
}
</style>