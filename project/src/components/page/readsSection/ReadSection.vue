<template>
    <section :class="classComp">
        <div class="container">
            <ul class="reads__wrapper">
        <li 
            class="reads__item"
            v-for="(read, index) in reads" 
            :key="index">
            <ReadComponent 
                :title="read.title"
                :texts="read.texts"
                :important="read.important"
                :btn="read.btn"
                :img="read.img"
                :right="read.right"
                :add-button="read.addButton"
                :colorLine="read.colorLine"
            >
                <template
                    #button
                >
                    <button 
                        class="read__button read__button-border" 
                        v-if="read.addButton"
                    >
                        {{ read.addButtonText }}
                    </button>
                </template>
            </ReadComponent>
        </li>
    </ul>
        </div>
    </section>
</template>
<script>
import ReadComponent from './ReadComponent.vue'

export default {
    name: 'ReadsComponent',
    components: {
        ReadComponent
    },
    props: {
        reads: {
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
.reads {
    margin-top: rem(90px);
    margin-bottom: rem(100px);

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: rem(20px);

        @media #{$screen-tablet} {
            gap: rem(30px);
        }

        @media #{$screen-desktop} {
            gap: rem(50px);
        }
    }
}
</style>