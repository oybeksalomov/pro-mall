<template>
    <section>
        <div class="container">
            <div class="lg:py-5">
                <div class="py-5 flex items-center justify-between gap-3">
                    <span class="hidden lg:block flex-none"><img src="../assets/promall 1.svg" alt="Logo"></span>
                    <button class="text-white bg-main_color py-3 px-6 rounded-full hidden lg:flex items-center">
                        <i class="pi pi-align-justify text-base p-2"></i>
                        <span class="text-md font-medium">Каталог</span>
                    </button>
                    <span class="relative w-full">
                        <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                        <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                    </span>
                    <ul class="hidden lg:flex max-w-[26.5rem] w-full justify-evenly">
                        <li 
                            v-for="navbarItem in navbarItems"
                            :key="navbarItem.name"
                            class="flex flex-col text-sm px-1 items-center"
                        >
                        <i :class="navbarItem.icon" class="text-base"></i>
                        <span>{{navbarItem.label}}</span>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
        <ul class="lg:hidden border-t-[0.5px] border-gray_light pt-3 fixed bottom-0 flex w-full justify-around">
            <li 
                v-for="navbarItem in navbarItems"
                :key="navbarItem.name"
                class="flex flex-col text-[2.7vw] min-[578px]:text-md text-gray_medium px-1 items-center"
            >
            <i :class="navbarItem.icon" class="text-base min-[578px]:text-2xl text-gray_medium"></i>
            <span>{{navbarItem.label}}</span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from "vue";

const navbarItems = ref([
    {label: 'Войти', icon: 'pi pi-user'},
    {label: 'Заказы', icon: 'pi pi-shopping-bag'},
    {label: 'Избранное', icon: 'pi pi-heart'},
    {label: 'Корзина', icon: 'pi pi-shopping-cart'},
])
</script>

<style scoped>

</style>