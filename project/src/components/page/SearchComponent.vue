<template>
    <form class="form">
        <div class="form__row">
            <div class="form__col">
                <div class="search input-text input-text__search ">
                    <button href="#" class="search__btn input-text__search-icon">
                        <SvgIcon 
                            :name="'Search'"
                            class="search__icon input-text__search-icon__svg"
                        />
                    </button>
                    <input 
                        class="search__input input-text__field input-text__search-input field" 
                        type="text" 
                        placeholder="Найти..."
                    >
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import SvgIcon from '../SvgIcon.vue';

export default {
    name: 'SearchComponent',
    components: {
        SvgIcon
    }
}
</script>

<style lang="scss">
.search {
    @media #{$screen-tablet} {
        padding: rem(8px) rem(10px);
    }

    &__btn {
        width: rem(25px);
    }
} 
</style>