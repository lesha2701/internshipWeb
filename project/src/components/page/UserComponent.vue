<template>
    <div :class="classComp">
        <img class="user__icon" :src="require(`@/assets/images/${img}`)" :alt="img">
        <p class="user__name">{{ name }}</p>
        <p class="user__date">{{ date }}</p>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
        },
        date: {
            type: String
        },
        img: {
            type: String
        },
        classComp: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
.user {

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: rem(10px);

    @media #{$screen-tablet} {
        gap: rem(15px);
    }

    @media #{$screen-desktop} {
        gap: rem(20px);
    }

    &__icon {
        width: rem(36px);
        height: rem(36px);

        border-radius: 50%;

        @media #{$screen-tablet} {
            width: rem(48px);
            height: rem(48px);
        }

        @media #{$screen-desktop} {
            width: rem(64px);
            height: rem(64px);
        }
    }

    &__name {
        font-size: rem($font-size-tiny);
        line-height: rem(19px);

        font-weight: $font-weight-medium;

        flex: 1;

        margin: 0;

        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media #{$screen-tablet} {
            font-size: rem($font-size-base);
            line-height: rem(22px);

            -webkit-line-clamp: 1;
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-large);
            line-height: rem(33px);
        }
    }

    &__date {
        font-size: rem(10px);
        line-height: rem(15px);
        font-weight: $font-weight-medium;

        margin: 0;

        color: rgba(1, 28, 40, 0.35);

        @media #{$screen-tablet} {
            font-size: rem(11px);
            line-height: rem(16px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-tiny);
            line-height: rem(21px);
        }
    }

}
</style>