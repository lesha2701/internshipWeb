<template>
    <article class="review">
        <router-link to="/reviews" class="review__link"></router-link>
        <div class="review__user">
            <UserComponent 
                :name="name"
                :date="date"
                :img="img"
                :class-comp="classUser"
            />
        </div>
        <p class="review__text">{{ text }}</p>
        <div class="review__image">
            <img class="review__pic" :src="require(`@/assets/images/icons/${shop}`)" :alt="shop">
        </div>
    </article>
</template>

<script>
import UserComponent from '../UserComponent.vue';

export default {
    name: 'ReviewComponent',
    components: {
        UserComponent
    },
    props: {
        name: {
            type: String,
            default: 'Имя'
        },
        date: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: 'Текст у отзыва отсутствует'
        },
        img: {
            type: String,
        },
        shop: {
            type: String
        }
    },
    data() {
        return {
            classUser: 'user'
        }
    }
    
}
</script>
<style lang="scss">
.review {
    position: relative;
    
    display: flex;
    flex-direction: column;
    gap: rem(15px);

    height: rem(250px);
    margin: 0;
    padding: rem(20px);

    border-radius: $border-review;
    background-color: $color-white;

    box-shadow: 0 rem(4px) rem(12px) rgba(38, 94, 107, 0.25);

    transition: .3s ease-in-out;

    @media #{$screen-desktop} {
        padding: rem(30px);
        padding-left: rem(32px);
        padding-right: rem(32px);
        gap: rem(20px);

        height: rem(320px);

        &:hover {
            transform: translateY(-10px);
            box-shadow: rem(6px) rem(20px) rem(32px) rgba(0, 0, 0, 0.12);
        }
    }

    &__link {
        @include absolute;
        z-index: $z-small;
    }

    &__text {
        font-size: rem($font-size-min);
        line-height: rem(15px);
        font-weight: $font-weight-medium;

        flex-grow: 1;

        color: $firefly;
        opacity: .8;

        margin: 0;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 8;

        @media #{$screen-tablet} {
            font-size: rem($font-size-small);
            line-height: rem($font-height-small);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-tiny);
            line-height: rem(21px);

            padding-left: rem(8px);
        }
    }

    &__image {
        max-width: rem(60px);
        max-height: rem(16px);

        @media #{$screen-tablet} {
            max-width: rem(74px);
            max-height: rem(20px);
        }

        @media #{$screen-desktop} {
            max-width: rem(89px);
            max-height: rem(24px);
        }

        margin-left: auto;
        
    }

    &__pic {
        width: auto;
        height: 100%;
    }
}
</style>