import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: () => import('../pages/SignInPage.vue')
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: () => import('../pages/FavoritesPage.vue'),
            redirect: '/favorites/saved-items',
            children: [
                {path: 'saved-items', component: () => import('../components/FavoriteSavedItems.vue')},
                {path: 'the-shops', component: () => import('../components/FavoriteShops.vue')}
            ]
        },
        {
            path: '/add-address',
            name: 'add-address',
            component:  () => import('../pages/AddAddressPage.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../pages/CartPage.vue')
        }
    ]
})

export default router