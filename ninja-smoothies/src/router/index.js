import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddNewSmoothie from '../views/AddNewSmoothie.vue'
import EditSmoothie from '../views/EditSmoothie.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: AddNewSmoothie,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditSmoothie,
    // props: true,
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
