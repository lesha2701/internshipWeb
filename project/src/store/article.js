const article = {
    state: {
        article: [
        ],
    },
    getters: {
        getArticle(state) {
            return state.article
        }

    },
    mutations: {
        setArticle(state, data) {
            state.article = data 
        }
    },
    actions: {
        setArticleData({commit}, data) {
            commit('setArticle', data)
        }
    },
}

export default article 