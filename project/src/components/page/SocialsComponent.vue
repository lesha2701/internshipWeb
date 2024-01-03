<template>
    <div :class="classComp">
        <ul class="socials__list">
            <li 
                class="socials__item"
                v-for="(icon, index) in icons"
                :key="index"
            >
                <SocialComponent 
                    :icon="icon"
                    :class-comp="classSocial"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import SocialComponent from './SocialComponent.vue';
export default {
    name: "SocialsComponent",
    components: {
        SocialComponent
    },
    props: {
        icons: {
            type: Array
        },
        classComp: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            classSocial: 'social'
        }
    }
    
}
</script>

<style lang="scss">
.socials {

    &__list {
        display: flex;
        justify-content: center;
        gap: rem(23px);
        padding: 0;
    }

    &__item {
        width: rem(40px);
        height: rem(40px);
    }

}
</style>