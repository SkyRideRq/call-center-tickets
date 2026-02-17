import { createRouter, createWebHistory } from 'vue-router'
import TicketList from '../views/TicketList.vue'
import TicketDetails from '../views/TicketDetails.vue'

const routes = [
  {
    path: '/',
    name: 'TicketList',
    component: TicketList
  },
  {
    path: '/ticket/:id',
    name: 'TicketDetails',
    component: TicketDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
