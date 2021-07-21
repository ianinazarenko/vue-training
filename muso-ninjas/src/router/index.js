import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import CreatePlaylist from '../views/CreatePlaylist.vue'
import PlaylistDetails from '../views/PlaylistDetails.vue'

// route guard
import { auth } from '@/data/config'

function requireAuth(to, from, next) {
  const user = auth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth,
  },
  {
    path: '/playlist-:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
