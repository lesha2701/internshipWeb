<template>
    <div :class="classComp">
        <ul class="tabs__list">
            <li 
            :class="['tabs__item', {'tabs__item--active': tab === selectedTab}]"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="clickOnTab(tab)"
            >
                {{ tab }}
            </li>
        </ul>
        <div class="tabs__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsComponent',
    props: {
        tabs: {
            type: Array,
            required: true
        },
        selectedTab: {
            type: String,
            required: false
        },
        classComp: {
            type: String,
            required: true
        }
    },
    emits: ['changeTab'],
    methods: {
        clickOnTab(tabName) {
            this.$emit('changeTab', tabName)
        }
    }
}
</script>

<style lang="scss">
.tabs {
    transition: $transition;

    &__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: rem(20px);

        @media #{$screen-tablet} {
            justify-content: flex-start;
            gap: rem(12px);
        }
    }

    &__item {
        position: relative;

        font-size: rem($font-size-small);
        line-height: rem($font-height-small);
        font-weight: $fort-weight-semi;
        letter-spacing: rem(0.24px);

        color: $color-accent;
        background-color: $athens-gray;

        border-radius: rem(4px);
        padding: rem(10px) rem(20px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-base);
            line-height: rem($line-height-base);
            font-weight: $font-weight-medium;
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-high);
            line-height: rem(23px);
            letter-spacing: rem(0.36px);
        }

        &--active {
            color: $color-white;
            background-color: $color-accent;
        }

    }
}
</style>