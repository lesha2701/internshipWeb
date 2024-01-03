<template>
    <header class="header">
        <div class="container">
            <div class="header__row">
                <div class="header__col header__col--logo">
                    <LogoComponent 
                        :img="logo"
                        :class-comp="logo"
                    />
                </div>
                <div class="header__col header__col--search">
                    <SearchComponent />
                </div>
                <div class="header__col header__col--profile">
                    <ProfileComponent 
                        :name="profile.name"
                        :img="profile.img"
                    />
                </div>
            </div>

        </div>
    </header>
</template>
  
<script>
import ProfileComponent from './ProfileComponent.vue';
import LogoComponent from './LogoComponent.vue';
import SvgIcon from './SvgIcon.vue';
import SearchComponent from './page/SearchComponent.vue';

export default {
    name: 'HeaderComponent',
    components: {
        ProfileComponent,
        LogoComponent,
        SvgIcon,
        SearchComponent
    },
    props: {
        profile: {
            type: Object
        }
    },
    data() {
        return {
            logo: 'logo-svg.svg',
            classLogo: 'logo'
        }
    }
}
</script>

<style lang="scss">
.header {
    height: rem(105px);

    background-color: $color-white;
    box-shadow: $shadow-header;

    @media #{$screen-tablet} {
        height: rem(80px);
    }

    &__row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: center;

        height: rem(105px);

        @media #{$screen-tablet} {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: rem(60px);
            height: rem(82px);
        }
    }

    &__col {

        &--search {
            position: relative;

            width: 100%;
            grid-area: 2 / 1 / 3 / 3;
    
            @media #{$screen-tablet} {
                border-top: rem(1px) solid $athens-gray;
                border-radius: rem(4px);
            }

            &::before {
                content: '';

                display: block;
                position: absolute;
                top: rem(-8px);
                left: -6%;
                
                width: 115%;  
                height: rem(1px);

                background-color: $light-steel-blue;

                @media #{$screen-tablet} {
                    display: none;
                }

            }
        }

        &--profile,
        &--logo {
            padding: rem(16px) 0;

            @media #{$screen-tablet} {
                padding: 0;
            }
        }

        &--profile {
            align-self: center;

            height: 100%;

            @media #{$screen-tablet} {
                padding-left: rem(20px);
                border-left: rem(1px) solid $color-border;
            }

        }
    }
}
</style>