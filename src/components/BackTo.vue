<template>
    <button v-if="isCircle" @click="goBack" class="flex items-center justify-center w-[3.2rem] h-[3.2rem] rounded-full bg-white shadow-lg">
        <i class="pi pi-chevron-left text-base font-semibold text-gray_icon"></i>
    </button>
    <button v-else @click="goBack" class="flex items-center">
        <i class="pi pi-chevron-left mr-4 text-base font-semibold text-gray_icon"></i>
        <span class="text-md font-semibold text-gray_text">Назад</span>
    </button>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const props = defineProps({isCircle: Boolean})
const goBack = () => {
    router.back()
}
</script>

<style scoped>

</style>