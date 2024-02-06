<template>
    <div>
        <HeaderMenu />
        <section class="mt-4">
            <div class="container">
                <div class="text-5xl font-bold">Избранное</div>
                <nav class="mt-4">
                    <ul class="flex gap-8">
                        <li
                            v-for="(navbarItem, index) in navbarItems"
                            :key="index"
                            class="text-md navItem relative font-semibold py-4 text-[#818A91]">
                            <router-link :to="'/favorites' + navbarItem.url">{{ navbarItem.name }}</router-link>
                        </li>
                    </ul>
                    <hr class="border-gray_light">
                </nav>

                <router-view></router-view>
            </div>
        </section>  
    </div>
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue'
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const navbarItems = ref([
    {name: 'Сохранили', url: "/saved-items"},
    {name: 'Магазины', url: '/the-shops'}
])
</script>

<style scoped>
.router-link-active {
    color: black;
}
.router-link-active::after {
    content: '';
    height: 3px;
    width: 100%;
    left: 0;
    bottom: 0; 
    position: absolute;
    background-color: #F00;
}
.navItem::after {
    opacity: 0;
    content: '';
    height: 3px;
    width: 100%;
    left: 0;
    bottom: 0; 
    position: absolute;
    transition: all 0.3s ease-in-out;
}
.navItem:hover::after {
    opacity: 100%;
    background-color: #cdcdcf;
}
</style>