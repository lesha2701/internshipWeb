<template>
    <div :class="classComp">
        <ul class="menu__list">
            <li 
                v-for="(link, index) in links"
                :key="index"
                class="menu__item"
            >
                <a href="#">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuComponent',
    props: {
        links: {
            type: Array
        },
        classComp: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.menu {

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(20px);

        @media #{$screen-tablet} {
            flex-direction: row;
            gap: rem(30px);
        }
    }

    &__item {
        font-size: $font-size-tiny;
        line-height: rem(18px);
    }
}
</style>