const reviews = {
    state: {
        reviews: [
        ],
    },
    getters: {
        getReviews(state) {
            return state.reviews
        }

    },
    mutations: {
        setReviews(state, data) {
            state.reviews = data 
        }
    },
    actions: {
        setReviewsData({commit}, data) {
            commit('setReviews', data)
        }
    },
}

export default reviews 