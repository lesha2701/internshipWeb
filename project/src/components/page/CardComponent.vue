<template>
    <article :class="classComp">
        <router-link to="/article" class="card__link"></router-link>
        <div class="card__image">
            <div class="card__box">
                <img 
                    class="card__image-pic" 
                    :src="require(`@/assets/images/icons/article/${img}`)"  
                    :alt="img">
            </div>
        </div>
        <div class="card__content">
            <h3 class="card__title">{{ title }}</h3>
            <p class="card__date">{{ date }}</p>
        </div>
    </article>
</template>
<script>
export default {
    name: 'CardComponent',
    props: {
        title: {
            type: String,
            default: "У публикации нет заголовка"
        },
        date: {
            type: String,
            required: true
        },
        img: {
            type: String,
        },
        classComp: {
            type: String,
            required: true
        }
    },
    computed: {
        getClass() {
            return this.class
        }
    }
    
}
</script>
<style lang="scss">
.card {
    position: relative;

    background-color: $color-white;
    border-radius: rem(24px);

    box-shadow: 0 rem(4px) rem(12px) rgba(0, 0, 0, 0.10);

    @media #{$screen-desktop} {
        width: rem(283px);

        transition: .3s ease-in-out;

        &:hover {
            transform: translateY(rem(-10px));
            box-shadow: rem(6px) rem(20px) rem(32px) rgba(0, 0, 0, 0.12);
        }
    }

    &__link {
        @include absolute;
        z-index: $z-small;
    }

    &__image {
        position: relative;

        overflow: hidden;

        border-radius: rem(24px) rem(24px) 0 0;
        height: rem(146px);

        @media #{$screen-desktop} {
            height: rem(255px);
        }

        &::before {
            $card-width: rem(161px);
            $card-height: rem(288px);

            display: block;

            padding-top: percentage(calc($card-height / $card-width));

            content: '';

            @media #{$screen-tablet} {
                $card-width: rem(166px);
                $card-height: rem(288px);
    
                padding-top: percentage(calc($card-height / $card-width));
            }

            @media #{$screen-desktop} {
                $card-width: rem(294px);
                $card-height: rem(434px);
    
                padding-top: percentage(calc($card-height / $card-width));
            }
        }

        &-pic {
            @include absolute;

            font-family: "object-fit: cover";

            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;

        padding: rem(10px);

        @media #{$screen-desktop} {
            padding: rem(20px);
            padding-top: rem(25px);
        }
    }

    &__title {
        font-size: rem($font-size-small);
        line-height: rem(17px);
        font-weight: $font-weight-medium;

        height: rem(68px);
        margin-bottom: rem(37px);

        -webkit-line-clamp: 4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media #{$screen-tablet} {
            font-size: rem($font-size-tiny);
            line-height: rem(19px);

            height: rem(76px);
            margin-bottom: rem(30px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-high);
            line-height: rem(23px);

            letter-spacing: rem(0.36px);

            height: rem(92px);
            margin-bottom: rem(20px);
        }
    }

    &__date {
        font-size: rem(11px);
        line-height: rem(16px);
        font-weight: $font-weight-medium;

        align-self: flex-end;

        padding-right: rem(15px);

        opacity: .35;

        @media #{$screen-tablet} {
            align-self: flex-start;
            padding-right: 0;
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-tiny);
            line-height: rem(21px);
        }
    }
}
</style>