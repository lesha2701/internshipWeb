<template>
    <article class="read" :class="right ? 'read--right' : ''">
        <div class="read__wrapper">
            <div class="read__image">
                <img 
                    class="read__image-pic" 
                    :src="require(`@/assets/images/icons/${img}`)" 
                    :alt="img"
                >
            </div>
            <div class="read__inner">
                <div class="read__content">

                    <TitleBlockComponent 
                        :title="title"
                        :colorLine="colorLine"
                    />

                    <h3 class="read__important">{{ important }}</h3>
                    <p 
                        class="read__text" 
                        v-for="(text, index) in texts" 
                        :key="index"
                    >
                        {{ text }}
                    </p>
                    
                    <div class="read__buttons">
                        <button class="read__button button">{{ btn }}</button>
                        <slot name="button"></slot>
                    </div>
                </div>
            </div>
        </div>
    </article> 
</template>
<script>
import TitleBlockComponent from '../TitleBlockComponent.vue';

export default {
    name: 'ReadComponent',
    components: {
        TitleBlockComponent
    },
    props: {
        title: {
            type: String,
            default: 'У карточки нет заголовка'
        },
        texts: {
            type: Array
        },
        important: {
            type: String,
        },
        btn: {
            type: String,
            default: 'Кнопка'
        },
        img: {
            type: String
        },        
        right: {
            type: Boolean,
            default: false
        },
        addButton: {
            type: Boolean,
            default: false
        },
        addButtonText: {
            type: String,
            default: 'Дополнительная кнопка'
        },
        colorLine: {
            type: String
        }
    }
}
</script>
<style lang="scss">
.read {
    &--right & {
        &__wrapper {
            @media #{$screen-tablet} {
                flex-direction: row-reverse;
            }
        }

        &__image {
            @media #{$screen-tablet} {
                border-radius: 0 rem(24px) rem(24px) 0;   
            }
        }

        &__inner {
            @media #{$screen-desktop} {
                margin: rem(60px) rem(100px) rem(73px) rem(60px);
            }
        }

        &__line {
            color: $color-accent;
        }

        &__important {
            display: block;

            @media #{$screen-tablet-max} {
                font-size: rem($font-size-tiny);
                line-height: rem(19px);

                display: flex;
                justify-content: center;

                margin-top: rem(13px);
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            gap: rem(30px);
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;

        background-color: $color-white;
        box-shadow: 0 rem(4px) rem(12px) 0 rgba(0, 0, 0, 0.10);
        border-radius: rem(24px);


        @media #{$screen-tablet} {
            flex-direction: row;
        }
    }

    &__image {
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 100%;
        min-height: rem(197px);

        border-radius: rem(24px) rem(24px) 0 0;

        background-color: #C8E4F0; //!!!

        @media #{$screen-tablet} {
            min-width: rem(280px);
            border-radius: rem(24px) 0 0 rem(24px);
        }

        @media #{$screen-desktop} {
            min-width: rem(480px);
        }

        &-pic {
            width: rem(156px);

            object-fit: cover;

            @media #{$screen-tablet} {
                width: rem(242px);
            }

            @media #{$screen-desktop} {
                width: rem(400px);
            }
        }
    }

    &__inner {
        margin: rem(16px) rem(10px) rem(22px);

        @media #{$screen-tablet} {
            margin: rem(30px);
            margin-right: rem(20px);
        }

        @media #{$screen-desktop} {
            margin: rem(60px) rem(80px) rem(73px);

        }
    }

    &__content {
        display: flex;
        flex-direction: column;
    }

    &__block-title {
        @include blockTitle;
    }

    &__title {
        font-size: rem($font-size-high);
        line-height: rem(22px);
        font-weight: $fort-weight-semi;

        margin-bottom: rem(10px);

        @media #{$screen-tablet} {
            font-size: rem(22px);
            line-height: rem(30px);
        }

        @media #{$screen-desktop} {
            font-size: rem(36px);
            line-height: rem(50px);
        }
    }

    &__line {
        color: #DC2C53;

        @include underLine;

        margin-bottom: rem(9px);

        @media #{$screen-tablet} {
            margin-bottom: rem(20px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(30px);
        }

    }

    &__important {
        font-size: rem($font-size-high);
        line-height: rem(25px);
        font-weight: $font-weight-medium;

        display: none;

        @media #{$screen-tablet} {
            display: block;
            
            margin-top: rem(20px);
        }

        @media #{$screen-desktop} {
            font-size: rem(24px);
            line-height: rem(33px);

            margin-top: rem(30px);
        }
    }

    &__text {
        font-size: rem($font-size-min);
        line-height: rem(15px);

        opacity: .8;

        margin-top: rem(10px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-small);
            line-height: rem($font-height-small);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-medium);
            line-height: rem($line-height-medium);

            margin-top: rem(21px);
        }
    }

    &__text + &__text {
        margin-top: rem(10px);
    }

    &__buttons {
        align-self: center;

        margin-top: rem(15px);

        @media #{$screen-tablet} {
            align-self: flex-start;

            margin-top: rem(20px);
        }

        @media #{$screen-desktop} {
            margin-top: rem(40px);
        }
    }



    &__button {
        font-size: rem($font-size-min);
        font-weight: $fort-weight-semi;
        line-height: normal;

        letter-spacing: rem(0.22px);

        padding: rem(8px) rem(24px);

        border-radius: rem(4px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-tiny);

            letter-spacing: rem(0.28px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-high);

            letter-spacing: rem(.36px);

            padding: rem(12px) rem(36px);
        }

        &-border {
            cursor: pointer;

            color: $color-accent;
            background-color: transparent;
            border: rem(2px) solid #34AADD;
            border-radius: rem(4px);

            padding: rem(6px) rem(22px);

            @media #{$screen-desktop} {
                padding: rem(9px) rem(34px);
            }
        }
    }
}  
</style>