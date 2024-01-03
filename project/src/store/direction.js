const directions = {
    state: {
        directions: [
        ],
    },
    getters: {
        getDirections(state) {
            return state.directions
        }

    },
    mutations: {
        setDirections(state, data) {
            state.directions = data 
        }
    },
    actions: {
        setDirectionsData({commit}, data) {
            commit('setDirections', data)
        }
    },
}

export default directions 