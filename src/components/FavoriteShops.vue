<template>
    <div class="py-12 my-12 flex flex-col justify-center items-center text-xl">
        <div> <!--Agar mahsulotlar bo'lmasa sharti-->
            <div class="w-[20rem]">
                <img class="w-full h-full" src=".././assets/Frame%2048096764.svg" alt="No Item Photo">
            </div>
            <button @click="pushToHome" class="row-start-4 mt-12 w-[20rem] h-fit bg-main_color text-white text-base font-bold p-4 rounded-full">Продолжать покупки</button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const pushToHome = () => {
    router.push('/')
}
</script>

<style lang="scss" scoped>

</style>