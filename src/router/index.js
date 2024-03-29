import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NProgress from 'nprogress'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
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
        },
        {
            path: '/item-info',
            name: 'item-info',
            component: () => import('../pages/ItemInfoPage.vue')
        },
        {
            path: '/catalog/:categoryId',
            name: 'catalog',
            component: () => import('../pages/CatalogPage.vue'),
            props: true
        },
        {
            path: '/shopping-mall/:mallId',
            name: 'mall',
            component: () => import('../pages/ShoppingMallPage.vue'),
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('../pages/NotFoundPage.vue')
        }
    ]
})

NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: false, trickle: false })

router.beforeEach(() => {
    NProgress.start()
})

router.afterEach(() => {
    NProgress.done()
})

export default router

