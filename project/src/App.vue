<template>
  <div class="page">
    <HeaderComponent 
      class="page__header"
      :profile=profile  
    />
    <router-view/>
    <FooterComponent 
      class="page__footer"
      :links="links"
    />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    profile() {
      return this.$store.getters['getProfile']
    },

    links() {
      return this.$store.getters['getLinks']
    }

  },
  mounted() {
    fetch('http://localhost:3000/profile')
      .then(res => res.json())
      .then(data => {
          this.$store.dispatch('setProfileData', data)
    });

    fetch('http://localhost:3000/menu')
      .then(res => res.json())
      .then(data => {
          this.$store.dispatch('setLinksData', data)
    });

  }
}
</script>

<style lang="scss">
.page {
    display: flex;
    flex-direction: column;

    color: $firefly;

    min-height: 100vh;

    background-color: #F7FAFD;

    &--details {
        overflow: hidden;
    }

    &__header {
        position: fixed;
        z-index: 50;
        top: 0;
        right: 0;
        left: 0;
        flex-shrink: 0;
    }

    &__main,
    &__wrapper {
        display: flex;  
        flex-direction: column;
        flex-grow: 1;

        margin-top: rem(105px);
        padding-top: rem(50px);
        padding-bottom: rem(100px);

        @media #{$screen-tablet} {
            margin-top: rem(80px);
            padding-top: rem(50px);
        }

        &--slider {
            padding-bottom: rem(40px);
        }

        &--indent {
          padding-top: 0;
          padding-bottom: 0;

          @media #{$screen-tablet} {
            padding-top: 0;
            padding-bottom: 0;
          }
        }
    }

    &__footer {
        flex-shrink: 0;
    }
}
</style>
