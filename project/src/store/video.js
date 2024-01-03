const video = {
    state: {
        video: [
        ],
    },
    getters: {
        getVideo(state) {
            return state.video
        }

    },
    mutations: {
        setVideo(state, data) {
            state.video = data 
        }
    },
    actions: {
        setVideoData({commit}, data) {
            commit('setVideo', data)
        }
    },
}

export default video 