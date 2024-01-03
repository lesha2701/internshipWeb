<template>
    <section :class="classComp">
        <div class="container">
            <div class="directions__wrapper">
                <TitleBlockComponent 
                    :title="title"
                    :color-line="colorLine"
                />
                <ul class="directions__items">
                    <li 
                        class="directions__item" 
                        v-for="direction in directions" 
                        :key="direction.id"
                    >
                        <DirectionComponent 
                            :title="direction.title"
                            :text="direction.text"
                            :img="direction.img"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import TitleBlockComponent from '../TitleBlockComponent.vue';
import DirectionComponent from './DirectionComponent.vue'

export default {
    name: 'DirectionsSection',
    components: {
        TitleBlockComponent,
        DirectionComponent
    },
    props: {
        directions: {
            type: Array
        },
        title: {
            type: String,
            default: ''
        },
        classComp: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            colorLine: '#dc2c53'
        }
    }
    
}
</script>
<style lang="scss">
.directions {

    background-color: $color-white;

    @include paddingSection;

    &__title {
        @include titleBlock;
        margin-bottom: rem(5px);
    }

    &__block-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: rem(20px);

        @media #{$screen-tablet} {
            align-items: flex-start;

            margin-bottom: rem(30px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(60px);
        }
    }

    &__line {
        color: #DC2C53;
        @include underLine;
    }

    &__items {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        row-gap: rem(20px);

        @include marginLine;

        @media #{$screen-tablet} {
            row-gap: rem(32px);

            margin-right: rem(-25px);
            margin-left: rem(-25px);
        }
    }

    &__item {
        width: 100%;

        @media #{$screen-tablet} {
            width: percentage(calc(1 / 2));

            padding-right: rem(25px);
            padding-left: rem(25px);
        }

        @media #{$screen-desktop} {
            width: percentage(calc(1 / 3));
        }
    }
}
</style>