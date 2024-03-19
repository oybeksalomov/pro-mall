<template>
    <div class="fixed flex w-full h-[100%] xl:py-8 xl:justify-center z-50 top-0 left-0 bg-white bg-opacity-50">
        <div v-on-click-outside="addressStore.toggleAddAddress" class="w-full h-full flex flex-col xl:max-w-[84rem] bg-white shadow-md xl:rounded-[2rem] p-8 ">
            <div class="flex items-center">
                <div class="font-semibold text-lg xl:text-3xl">Адрес доставки</div>
                <button @click="addressStore.toggleAddAddress" class="ml-auto"><i class="pi pi-times text-md xl:text-base text-gray_text font-bold"></i></button>
            </div>

            <div class="flex mt-12">
                <input type="text" value="Rishton 34" class="w-full p-4 border border-gray_light xl:mr-4 rounded-[1rem] text-md px-4">
                <button class="p-4 hidden xl:block text-md font-semibold rounded-[2rem] text-white bg-main_color">Подтвердить</button>
            </div>

            <div class="w-full h-full rounded-[2rem] bg-gray_lightest mt-8">
                <!-- Karta... -->
            </div>

            <button class="p-4 mt-8 w-full xl:hidden text-md font-semibold rounded-[2rem] text-white bg-main_color">Подтвердить</button>
        </div>
    </div>
</template>

<script setup>
import {vOnClickOutside} from "@vueuse/components";
import {useAddressStore} from "../store/address.js";

const addressStore = useAddressStore()
</script>

<style scoped>

</style>