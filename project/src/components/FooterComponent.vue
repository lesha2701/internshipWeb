<template>
<footer class="footer">
        <div class="container">
            <div class="footer__col">
                <div class="footer__row">
                    <div class="footer__social">
                        <SocialsComponent 
                            :icons="icons"
                            :class-comp="classCompSocial"
                        />
                    </div>
                </div>
                <div class="footer__row footer__row--menu">
                    <div class="footer__menu">
                        <MenuComponent 
                            :links="links"
                            :class-comp="classComp"
                        />
                    </div>
                </div>
                <div class="footer__row">
                    
                    <div class="footer__logo logo">
                        <LogoComponent 
                            :img="'logoFooter.svg'"
                            :class-comp="classLogo"
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import SocialsComponent from './page/SocialsComponent.vue';
import MenuComponent from './page/MenuComponent.vue';
import LogoComponent from './LogoComponent.vue';

export default {
    name: 'FooterComponent',
    components: {
        SvgIcon,
        SocialsComponent,
        MenuComponent,
        LogoComponent
    },
    data() {
        return {
            icons: [
                'youTube',
                'inst'
            ],
            classComp: 'meun',
            classCompSocial: 'socials',
            classLogo: 'logo'
        }
    },  
    props: {
        links: {
            type: Array
        }
    }
}
</script>

<style lang="scss">

.footer {
    background-color: $color-white;
    box-shadow: $shadow-footer;

    &__col {
        display: flex;
        flex-direction: column;

        padding-top: rem(20px);
        padding-bottom: rem(20px);

        @media #{$screen-tablet} {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            padding-top: rem(31px);
            padding-bottom: rem(31px);
        }
    }

    &__row {
        border-bottom: rem(1px) solid $color-border;
        padding-bottom: rem(20px);
        padding-top: rem(20px);

        &:last-child {
            border: 0;
            padding-bottom: 0;
        }

        &:first-child {
            padding-top: 0;
        }

        @media #{$screen-tablet} {
            padding-bottom: 0;
            padding-top: 0;

            border: 0
        }
   
        &--menu {

            @media #{$screen-tablet} {
                margin-right: auto;
                padding-left: rem(40px);
            }
        }
    }

    &__logo {
        margin: 0 auto;
    }

    &__social {
        @media #{$screen-desktop} {
            border-right: rem(1px) solid $color-border;
            padding-right: rem(40px);
        }
    }
}
</style>