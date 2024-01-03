<template>
    <div class="page__wrapper">
        <div class="container">
            <div class="container-block">
                <BreadcrumbsComponent 
                :items="bread"
                />
                <h1>{{ title }}</h1>
                <main class="contents">
                    <section class="contents__wrapper">
                        <TabsComponent 
                            :tabs="tabs"
                            :selected-tab="selectedTab"
                            :class-comp="classTabs"
                            @changeTab="changeTab"
                        >
                            <ArtComponent 
                                v-if="selectedTab === 'Статьи'"
                                :article="article"    
                            />
                            <VideoComponent 
                                v-if="selectedTab === 'Видео'"
                                :videos="video"
                            />
                        </TabsComponent>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';  
import TabsComponent from '@/components/page/TabsComponent.vue';
import ArtComponent from '@/components/page/articleSection/articleComponent/ArtComponent.vue';
import VideoComponent from '@/components/page/articleSection/articleComponent/VideoComponent.vue';

export default {
    name: 'ArticleView',
    components: {
        BreadcrumbsComponent,
        TabsComponent,
        ArtComponent,
        VideoComponent
    },
    data() {
        return {
            bread: [
                'Главная',
                'Статьи и видео'
            ],
            title: "Статьи и видео",
            tabs: [
                'Статьи',
                'Видео'
            ],
            selectedTab: 'Статьи',
            classTabs: 'tabs'
        }
    },
    computed: {
        article() {
            return this.$store.getters['getArticle']
        },

        video() {
            return this.$store.getters['getVideo'] 
        }

    },
    mounted() {

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
    },
    methods: {
        changeTab(tabName) {
            this.selectedTab = tabName
        }
    }
}
</script>

<style lang="scss">
.contents {
    margin-top: rem(100px);

    &__wrapper {

        @media #{$screen-tablet} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
}
</style>