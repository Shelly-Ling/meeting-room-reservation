import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: SignIn
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
