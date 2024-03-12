<template>
    <div class="flex justify-end mt-12 xl:hidden">
        <FilterButton @click="toggleFilter" />
    </div>
    <div class="flex">
        <div v-if="items.length > 0" class="py-12 hidden xl:block my-12 mr-8 w-[28rem]">
            <FilterCol/>
        </div>
        <div class="xl:py-12 my-12 flex flex-col justify-center items-center text-xl">
            <div v-if="items.length > 0" class="grid grid-cols-2 min-[578px]:grid-cols-3 min-[768px]:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8">
                <ItemComponent
                    v-for="(item, index) in items"
                    v-bind:key="index"
                    :item-info="item"
                />
            </div>
            <div v-else> <!--Agar mahsulotlar bo'lmasa sharti-->
                <div class="w-[20rem]">
                    <img class="w-full h-full" src=".././assets/Frame%2048096764.svg" alt="No Item Photo">
                </div>
                <button @click="pushToHome" class="row-start-4 mt-12 w-[20rem] h-fit bg-main_color text-white text-base font-bold p-4 rounded-full">Продолжать покупки</button>
            </div>
        </div>
    </div>
    <div v-if="isFilterOpen" class="absolute z-50 flex flex-col xl:hidden h-dvh w-full top-0 left-0 bg-white">
        <div class="flex h-[4.5rem] items-center justify-center border-b border-gray_light px-4 relative">
            <button @click="toggleFilter"><i class="pi pi-times absolute top-1/2 -translate-y-1/2 left-6 font-bold text-lg text-gray_text"></i></button>
            <div class="text-lg font-bold">Фильтры</div>
        </div>
        <div class="mobileFilter overflow-y-auto">
            <FilterCol class="px-4 mt-6 overflow-hidden h-fit"/>
        </div>
        <div class="p-4 flex h-fit">
            <button class="row-start-4 h-fit w-full bg-main_color text-white text-base font-bold px-12 py-4 rounded-full">Показать все</button>
        </div>
    </div>

</template>

<script setup>
import {useRouter} from "vue-router";
import ItemComponent from "./ItemCard.vue";
import itemImg11 from "../assets/sneakers.webp";
import FilterCol from "./FilterCol.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import FilterButton from "./FilterButton.vue";

const router = useRouter()
const isFilterOpen = ref(false)
const items = [
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 3,
        rates: 45,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 4,
        rates: 15824,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 5,
        rates: 124,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 3,
        rates: 7,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 3,
        rates: 322,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 3,
        rates: 12,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
    {
        img: itemImg11,
        price: 62000,
        name: 'Робот-пылесос Polaris PVCR 6001 белый',
        rate: 3,
        rates: 100,
        owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
    },
]
const pushToHome = () => {
    router.push('/')
}
const toggleFilter = () => {
    isFilterOpen.value = !isFilterOpen.value
    document.body.style.overflow = !isFilterOpen.value ? 'auto' : 'hidden'
}
const handleWindowResize = () => {
    if (window.innerWidth >= 1280) {
        isFilterOpen.value = false
    } else {
    }
}
onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWindowResize)
})
</script>

<style scoped>
.mobileFilter {
    max-height: calc(100vh - 10.9rem);
    scrollbar-width: none;
}
</style>