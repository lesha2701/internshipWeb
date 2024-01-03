<template>
    <main class="page__wrapper page__wrapper--indent">
        <BannerComponent 
            :title="banner.title"
            :text="banner.text"
            :btn="banner.btn"
            :img="banner.img"
            :class-comp="classBanner"
        />
        <ReadSection 
            :reads="reads"
            :class-comp="classReads"
        />
        <DirectionsSection 
            :directions="directions"
            :title="directionTitle"
            :class-comp="classDirection"
        />
        <ReviewsComponent 
            :reviews="reviews"
            :title="reviewsTitle"
            :class-comp="classReviews"
        />
        <ArticleComponent 
            :article="article"
            :video="video"
            :title="articleTitle"
            :class-comp="classArticle"
        />
    </main>
</template>

<script>
import BannerComponent from '@/components/page/bannerSection/BannerComponent.vue';
import ReadSection from '@/components/page/readsSection/ReadSection.vue';
import DirectionsSection from '@/components/page/directionsSection/DirectionsSection.vue';
import ReviewsComponent from '@/components/page/reviewsSection/ReviewsComponent.vue';
import ArticleComponent from '@/components/page/articleSection/ArticleSection.vue';

export default {
    name: 'MainView',
    components: {
        BannerComponent,
        ReadSection,
        DirectionsSection,
        ReviewsComponent,
        ArticleComponent
    },
    data() {
        return {
            banner: {
                title: 'Ведущий web-интегратор',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову ',
                btn: 'Перейти',
                img: 'banner.png',
                class: 'banner'
            },
            reads: [
                {
                    title: 'Читайте нас в Telegram',
                    texts: [
                        'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову.',
                        'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками.'
                    ],
                    important: 'Важное уведомление',
                    btn: 'Подробнее',
                    img: 'world.png',
                    right: false,
                    colorLine: '#dc2c53'
                },
                {
                    title: 'Digital Workplace',
                    texts: [
                        'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову.'
                    ],
                    important: 'Важное уведомление',
                    btn: 'Начать',
                    img: 'people.png',
                    right: true,
                    addButton: true,
                    addButtonText: 'Инструкция',
                    colorLine: '#34aadd'
                }
            ],
            classBanner: 'banner',
            classReads: 'reads',
            classDirection: 'directions',
            classReviews: 'reviews',
            classArticle: 'art-video',
            directionTitle: 'Направления',
            reviewsTitle: "Отзывы",
            articleTitle: "Статьи и видео"
        }
    },
    computed: {
        directions() {
            return this.$store.getters['getDirections']
        },

        reviews() {
            return this.$store.getters['getReviews']
        },

        article() {
            return this.$store.getters['getArticle']
        },

        video() {
            return this.$store.getters['getVideo'] 
        }

    },
    mounted() {
        fetch('http://localhost:3000/directions')
        .then(res => res.json())
        .then(data => {
            this.$store.dispatch('setDirectionsData', data)
        })

        fetch('http://localhost:3000/reviews')
        .then(res => res.json())
        .then(data => {
            this.$store.dispatch('setReviewsData', data)
        })

        fetch('http://localhost:3000/article')
        .then(res => res.json())
        .then(data => {
            this.$store.dispatch('setArticleData', data)
        })

        fetch('http://localhost:3000/video')
        .then(res => res.json())
        .then(data => {
            this.$store.dispatch('setVideoData', data)
        })
    }
}
</script>

<style>

</style>