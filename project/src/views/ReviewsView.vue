<template>
    <div class="page__wrapper">
        <div class="container container">
            <div class="container--block">
                <BreadcrumbsComponent 
                :items="breads"/>
                <h1>{{ title }}</h1>
                <main class="contents">
                    <section class="content">
                        <ul class="content__list">
                            <li 
                            class="content__item" 
                            v-for="review in reviews"
                            :key="review.id">
                                <ReviewComponent 
                                    :name="review.name"
                                    :date="review.date"
                                    :text="review.text"
                                    :img="review.img"
                                    :shop="review.shop"
                                />
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import ReviewComponent from '@/components/page/reviewsSection/ReviewComponent.vue'; 
import SvgIcon from '@/components/SvgIcon.vue';

export default {
    name: 'ProfileView',
    components: {
        BreadcrumbsComponent,
        SvgIcon,
        ReviewComponent
    },
    data() {
        return {
            breads: [
                'Главная',
                'Отзывы',
            ],
            title: 'Отзывы'
        }
    },
    computed: {
        reviews() {
            return this.$store.getters['getReviews']
        }

    },
    mounted() {
        fetch('http://localhost:3000/reviews')
        .then(res => res.json())
        .then(data => {
            this.$store.dispatch('setReviewsData', data)
        })

    }
}
</script>

<style lang="scss">
.content {

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
}
</style>