import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import AddNewProject from '../views/AddNewProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddNewProject',
    component: AddNewProject,
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
