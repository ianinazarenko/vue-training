import Vue from 'vue'
import VueRouter from 'vue-router'
import Wellcome from '../views/Wellcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wellcome',
    component: Wellcome,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
