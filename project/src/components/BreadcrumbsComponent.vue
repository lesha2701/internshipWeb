<template>
    <nav class="breadcrumbs breadcrumbs--indent">
        <ul class="breadcrumbs__list">
            <li 
            class="breadcrumbs__item" 
            v-for="(item, index) in items"
            :class="index === items.length - 1 ? 'breadcrumbs__item--active' : ''"
            :key="index">
                <p 
                @click="moveInMain(item)"
                class="breadcrumbs__link">{{ item }}</p>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'BreadcrumbsComponent',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        moveInMain(item) {
            if (item === 'Главная') {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style lang="scss">
.breadcrumbs {

    &--indent {
        margin-bottom: rem(10px);

        @media #{$screen-tablet} {
            margin-bottom: rem(15px);
        }
    }

    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    &__item {
        position: relative;

        display: flex;
        align-items: center;

        padding: 0 rem(23px);

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }

    &__item--active & {
        &__link {
            color: $light-slate-grey;

            &::after {
                display: none; 
            }

            &:hover {
                text-decoration: none;
            }
        }
    }

    &__item:first-child & {

        &__link {
            
            &::before {
                display: none;
            }
        }

    }

    &__link {
        font-size:  rem($font-size-tiny);
        line-height: rem($line-height-tiny);

        display: block;

        text-decoration: none;

        color: $light-steel-blue;

        transition: $transition;

        cursor: pointer;

        @media #{$screen-tablet} {
            font-size: rem($font-size-medium);
            line-height: rem(32px);
        }

        &:hover {
            text-decoration: underline;
            color: $light-slate-grey;
        }

        &::before,
        &::after {
            position: absolute;
            top: 50%;

            width: rem(6px);
            height: rem(10px);

            transform: translateY(-50%);

            content: '';

            background-image: url(@/assets/images/icons/breadcr.svg);
            background-repeat: no-repeat;
        }

        &::before {
            left: 0;
        }

        &::after {
            right: rem(-6px);
        }
    }
}
</style>