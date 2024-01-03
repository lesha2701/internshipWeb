const profile = {
    state: {
        profile: {},
    },
    getters: {
        getProfile(state) {
            return state.profile
        }

    },
    mutations: {
        setProfile(state, data) {
            state.profile = data 
        }
    },
    actions: {
        setProfileData({commit}, data) {
            commit('setProfile', data)
        }
    },
}

export default profile 