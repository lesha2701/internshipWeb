<template>
    <section :class="classComp">
        <div class="container">
            <div class="reviews__wrapper">
                <TitleBlockComponent 
                    :title="title"
                />

                <ul class="reviews__list">
                    <li class="reviews__item" v-for="review in reviews" :key="review.id">
                        <ReviewComponent 
                            :name="review.name"
                            :date="review.date"
                            :text="review.text"
                            :img="review.img"
                            :shop="review.shop"
                        />
                    </li>
                </ul>
                
                <div class="reviews__more">
                    <router-link to="/reviews" class="reviews__link"></router-link>
                    <MoreComponent 
                        :text="'Посмотреть все'"
                        :class-comp="classMore"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import SvgIcon from '../../SvgIcon.vue';
import ReviewComponent from './ReviewComponent.vue';
import TitleBlockComponent from '../TitleBlockComponent.vue';
import MoreComponent from '../MoreComponent.vue';

export default {
    name: 'ReviewsComponent',
    components: {
        SvgIcon,
        ReviewComponent,
        TitleBlockComponent,
        MoreComponent
    },
    props: {
        reviews: {
            type: Array
        },
        title: {
            type: String
        },
        classComp: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            classMore: 'more',
        }
    }
    
}
</script>
<style lang="scss">
.reviews {
    background-color: #C8E4F0;

    @include paddingSection;

    &__wrapper {

        @media #{$screen-tablet} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    &__block {
        &-title {
            @include blockTitle;
        
            margin-bottom: rem(20px);

            @media #{$screen-tablet} {
                margin-bottom: 0;
            }
        }
    }

    &__title {
        @include titleBlock;
        margin-bottom: rem(10px);
    }

    &__line {
        color: $color-accent;
        @include underLine;
        margin-bottom: rem(9px);

        @media #{$screen-tablet} {
            margin-bottom: rem(20px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(60px);
        }

    }

    &__list {
        display: flex;
        flex-direction: column;

        gap: rem(20px);

        @include marginLine;

        @media #{$screen-tablet} {
            flex-direction: row;
            justify-content: space-between;
            gap: rem(16px);

            order: 1;
        }

        @media #{$screen-desktop} {
            gap: rem(40px);
        }
    }

    &__item {
        flex: 1;
    }

    &__more {
        position: relative;
        align-self: center;
    }

    &__link {

        @include absolute;

        z-index: $z-small;
    }
}
</style>