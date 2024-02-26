<template>
    <HeaderMenu />
    <section class="mt-[12rem] xl:mt-[9rem]">
        <div class="container">
            <div class="text-5xl font-bold">Избранное</div>
            <nav class="mt-4">
                <ul class="flex gap-8">
                    <li
                        v-for="(navbarItem, index) in navbarItems"
                        :key="index"
                        class="text-md relative font-semibold py-4 text-[#818A91]">
                        <router-link class="py-4 hover:text-black transition-all duration-[0.2s]" :to="'/favorites' + navbarItem.url">{{ navbarItem.name }}</router-link>
                    </li>
                </ul>
                <hr class="border-gray_light">
            </nav>

            <router-view></router-view>
        </div>
    </section>
    <FooterComponent />
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue'
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import FooterComponent from "../components/FooterComponent.vue";

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
</style>