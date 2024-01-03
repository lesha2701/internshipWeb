<template>
    <div class="profile profile--hidden">
        <div class="profile__block">
            <div class="profile__name">
                <span class="profile__name-text">{{ name }}</span>
            </div>
            <div class="profile__avatar">
                <img 
                    class="profile__avatar-pic" 
                    :src="require(`@/assets/images/${img}`)"
                    :alt="img"  
                >
            </div>
        </div>
        <div class="profile__icon">
            <SvgIcon 
                :name="'Profile'"
                class="profile__icon-pic"
            />
        </div>
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
    name: 'ProfileComponent',
    components: {
        SvgIcon
    },
    props: {
        name: {
            type: String,
            default: 'Имя'
        },
        img: {
            type: String,
        }
    },
    computed: {
    }
}
</script>

<style lang="scss">
.profile {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__block {
        display: none;

        @media #{$screen-tablet} {
            display: flex;
            align-items: center;
            gap: rem(10px);
        }
        
    }

    &__name {
        width: rem(80px);
        text-align: right;
        overflow: hidden;
        white-space:nowrap;

        &-text {

            color: $light-slate-grey;
            font-size: $font-size-tiny;
            line-height: rem(16px);
        }

    }

    &__avatar {
        width: rem(40px);
        height: rem(40px);

        &-pic {
            border-radius: 50%;
            padding: 0;
            height: 100%;   
        }
    }

    &__icon {
        width: rem(24px);
        height: rem(24px);

        display: block;

        @media #{$screen-tablet} {
            display: none;
        }

        &-pic {
            color: $color-accent;
        }
    }
}
</style>