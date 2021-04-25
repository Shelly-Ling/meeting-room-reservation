import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Rooms from '../views/Rooms.vue'
import Reservation from '../views/Reservation.vue'
import AdminReservation from '../views/AdminReservation.vue'
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
    component: Rooms
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/admin/reservation',
    name: 'admin-reservation',
    component: AdminReservation
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
