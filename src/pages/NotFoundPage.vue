<template>
    <HeaderMenu />
    <UnderNavbarMenu class="hidden xl:block"/>
    <div class="bg-main_color mt-[13.1rem] xl:mt-[3rem] flex justify-center items-center py-[5rem] mb-[3rem]">
        <div class="text-center">
            <div class="text-[8rem] xl:text-[15rem] leading-none font-bold text-white">404</div>
            <div class="text-3xl xl:text-6xl font-bold text-white">Страница не найдена</div>
            <router-link to="/" class="p-4 flex items-center mx-auto border-2 mt-5 w-fit text-white font-semibold rounded-full text-base"><i class="pi pi-arrow-left font-semibold mr-2"></i>Главная страница</router-link>
        </div>
    </div>
    <FooterRow />
</template>

<script setup>

import HeaderMenu from "../components/HeaderMenu.vue";
import FooterRow from "../components/FooterRow.vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
</script>
