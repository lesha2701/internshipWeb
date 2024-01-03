<template>
<div class="art">
    <ul class="art__items">
        <li 
        class="art__item"
        v-for="art in article"
        :key="art.id"
        >
            <CardComponent 
            :title="art.title"
            :date="art.date"
            :img="art.img"
            :classComp="classComp"
            />
        </li>
    </ul>
</div>
</template>
<script>
import CardComponent from '../../CardComponent.vue';

export default {
    name: 'ArtComponent',
    components: {
        CardComponent
    },
    props: {
        article: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            classComp: 'card'
        }
    }
}
</script>
<style lang="scss">
.art {

    margin-top: rem(20px);

    @media #{$screen-desktop} {
        margin-top: rem(30px);
    }

    &__items {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        row-gap: rem(13px);

        margin-left: rem(-6px);
        margin-right: rem(-6px);

        @media #{$screen-tablet} {
            margin-left: rem(-10px);
            margin-right: rem(-10px);
        } 

        @media #{$screen-desktop} {
            margin-left: rem(-18px);
            margin-right: rem(-18px);
        }
    }

    &__item {
        width: percentage(calc(1 / 2));

        padding-left: rem(6px);
        padding-right: rem(6px);

        @media #{$screen-tablet} {
            width: percentage(calc(1/ 4));
            
            padding-left: rem(10px);
            padding-right: rem(10px);
        } 

        @media #{$screen-desktop} {
            padding-left: rem(18px);
            padding-right: rem(18px);
        }
    }
}
</style>