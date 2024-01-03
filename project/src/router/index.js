import Vue from 'vue'
import VueRouter from 'vue-router'
import ReviewsView from '../views/ReviewsView.vue'
import ArticleView from '../views/ArticleView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
