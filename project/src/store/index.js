import Vue from 'vue'
import Vuex from 'vuex'

import icons from './icons'
import links from './links'
import directions from './direction'
import reviews from './reviews'
import profile from './profile'
import article from './article'
import video from './video'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    icons,
    links,
    directions,
    reviews,
    profile,
    article,
    video
  }
})
