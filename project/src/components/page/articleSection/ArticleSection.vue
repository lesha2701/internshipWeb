<template>
    <section :class="classComp">
        <div class="container">
            <div class="art-video__wrapper">
                <TitleBlockComponent 
                :title="title"
                />
                <div class="art-video__items">
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
                </div>
                <div class="art-video__more">
                    <router-link to="/article" class="art-video__link"></router-link>
                    <MoreComponent 
                    :text="'Посмотреть еще'"
                    :class-comp="classMore"
                    class="art-video__more"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleBlockComponent from '../TitleBlockComponent.vue';
import MoreComponent from '../MoreComponent.vue';
import CardComponent from '../CardComponent.vue';
import TabsComponent from '../TabsComponent.vue';
import ArtComponent from './articleComponent/ArtComponent.vue';
import VideoComponent from './articleComponent/VideoComponent.vue';

import { ref } from 'vue';

export default {
    name: 'ArticleComponent',
    components: {
        TitleBlockComponent,
        MoreComponent,
        CardComponent,
        TabsComponent,
        ArtComponent,
        VideoComponent
    },
    props: {
        article: {
            type: Array,
            required: true
        },
        video: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        classComp: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            tabs: [
                'Статьи',
                'Видео'
            ],
            selectedTab: ref("Статьи"),
            classMore: 'more',
            classTabs: 'tabs'
        }
    },
    methods: {
        changeTab(tabName) {
            this.selectedTab = tabName
        }
    }
}
</script>
<style lang="scss">

.art-video {

    @include paddingSection;
    padding-bottom: rem(100px);

    @media #{$screen-tablet} {
        padding-bottom: rem(120px);
    }

    @media #{$screen-desktop} {
        padding-bottom: rem(150px);
    }
    
    &__wrapper {

        @media #{$screen-tablet} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    &__items {

        @include marginLine;

        @media #{$screen-tablet} {
            order: 1;
        }
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