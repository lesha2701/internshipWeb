const links = {
    state: {
        links: [
            'Правила',
            'Документы',
            'Политика конфиденциальности'
        ]
    },
    getters: {
        getLinks(state) {
            return state.links
        }

    },
    mutations: {
        setLinks(state, data) {
            state.links = data 
        }
    },
    actions: {
        setLinksData({commit}, data) {
            commit('setLinks', data)
        }
    },
}

export default links 