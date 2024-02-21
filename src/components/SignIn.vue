<template>
    <div class="absolute flex w-full h-[100vh] z-50 top-0 left-0 bg-white bg-opacity-50">
        <div v-on-click-outside="closeSignIn" class="w-full ml-auto min-[475px]:w-[36rem] min-h-[100vh] px-4 min-[475px]:px-12 grid grid-rows-7 bg-red_hover ">
            <div class="flex absolute items-start right-6 top-6">
                <button @click="closeSignIn" class="ml-auto"><i class="pi pi-times text-base text-gray_text font-bold"></i></button>
            </div>
            <div class="text-5xl font-bold row-start-3">Войдите или зарегестрируйтесь</div>
            <button class="row-start-4 mt-auto w-full h-fit bg-main_color text-white text-sm font-bold p-4 rounded-full">Войти по PRO ID</button>

            <div class="flex mt-auto h-fit row-start-6">
                <input type="checkbox">
                <div class="text-gray_text pl-2">Men quyidagi hamma shartlarga roziman.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {vOnClickOutside} from "@vueuse/components";

const closeSignIn = () => {
    emit("closeSignIn")
}
const emit = defineEmits(['closeSignIn'])
</script>

<style scoped>

</style>