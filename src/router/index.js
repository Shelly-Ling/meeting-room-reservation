import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import TestPage from '../views/TestPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/testpage',
    name: 'test-page',
    component: TestPage
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/rooms',
    name: 'meeting-rooms',
    component: () => import('../views/Rooms.vue')
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: () => import('../views/AdminSignIn.vue')
  },
  {
    path: '/admin/reservation',
    name: 'admin-reservation',
    component: () => import('../views/AdminReservation.vue')
  },
  {
    path: '/signin',
    name: 'admin-sign-in',
    component: () => import('../views/AdminSignIn.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
