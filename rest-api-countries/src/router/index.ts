import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:country(\\w{2,3})',
        name: 'country',
        component: () => import('../views/Country.vue'),
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/FourOhFour.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
