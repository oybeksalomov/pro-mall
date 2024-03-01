<template>
    <div class="w-full">
        <div class="relative w-full aspect-square flex items-center justify-center bg-gray_lightest rounded-[1.5rem]">
            <router-link to="/item-info" class="w-[90%]">
                <img class="w-full h-full object-cover object-center" src="../assets/sneakers.webp" alt="item photo">
            </router-link>
            <button @click="toggleFavorite" class="absolute top-6 right-6">
                <i class="pi text-2xl" :class="isFavorite ? 'pi-heart-fill text-main_color' : 'pi-heart'"></i>
            </button>
        </div>

        <div class="pt-8 px-3 pb-3">
            <div class="flex">
                <div class="text-base font-bold">{{itemInfo.price}} so'm</div>
                <div class="ml-4 text-sm font-semibold bg-main_color text-white flex items-center h-fit py-1 px-4 rounded-full">Скидка</div>
            </div>
            <div class="text-sm mt-2">{{itemInfo.name}}</div>
            <div class="flex mt-2">
                <div class="flex">
                    <button type="button" v-for="i in 5" class="focus-visible:outline-0" :class="{ 'mr-1': i < 5 }" @click="rateItem(i)">
                        <svg class="block h-5 w-5 focus:outline-0" :class="[ rating >= i ? 'text-main_color': 'text-gray_light']" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    </button>
                </div>
                <div class="text-sm ml-4 leading-none">{{itemInfo.rates}}</div>
            </div>
            <div class="flex items-center mt-4">
                <div class="w-8 h-8 bg-gray_light rounded">
                    <img class="w-full h-full" src="#" alt="">
                </div>
                <div class="text-sm ml-2 leading-none">{{itemInfo.owner}}</div>
            </div>
            <div class="text-[1rem] mt-4 text-gray_text">Есть предложения от 55 890 $</div>
            <button class="row-start-4 mt-8 h-fit bg-main_color text-white text-base font-bold px-12 py-3 rounded-full">Купить</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const rating = ref(3)
const isFavorite = ref(false)
const props = defineProps(['itemInfo'])

const rateItem = (i) => {
    rating.value = i
}
const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
}
</script>

<style scoped>

</style>