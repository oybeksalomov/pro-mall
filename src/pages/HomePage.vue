<template>
    <div class="pb-[10rem]">
        <HeaderMenu></HeaderMenu>
        <section class="mt-8">
            <div class="container ">
                <div class="relative">
                    <div ref="carouselRef" class="flex snap-x gap-8 flex-nowrap overflow-hidden">
                        <div
                            v-for="carouselItem in carouselItems"
                            :key="carouselItem.id"
                            class="w-full h-[31rem] flex-none snap-center"
                        >
                            <a href="#" class="w-full h-full relative">
                                <img :src="carouselItem.image" alt="Carousel Image" class="w-full h-full rounded-[2.5rem] bg-gray_lightest">
                                <span class="absolute text-xl top-1/2 left-1/2 translate-x-[50%] -translate-y-[50%]">{{carouselItem.id}}</span>
                            </a>
                        </div>
                    </div>
                    <button @click="moveCarousel('right')" class="rounded-full bg-white absolute top-1/2 -translate-y-[50%] right-4 lg:-right-[1.9rem] shadow-md flex items-center justify-center w-[3.9rem] h-[3.9rem]">
                        <i class="pi pi-chevron-right text-lg text-main_color"></i>
                    </button>
                    <button @click="moveCarousel('left')" class="rounded-full bg-white absolute top-1/2 -translate-y-[50%] left-4 lg:-left-[1.9rem] shadow-md flex items-center justify-center w-[3.9rem] h-[3.9rem]">
                        <i class="pi pi-chevron-left text-lg text-main_color"></i>
                    </button>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="container">
                <h1 class="text-5xl font-bold">Торговые центры</h1>
                <div class="mt-8 grid lg:grid-cols-3 gap-8">
                    <ShoppingMallCard
                        v-for="(shoppingMall, index) in shoppingMalls"
                        :key="index"
                        :shoppingMall="shoppingMall"
                        class="flex-none"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue'
import ShoppingMallCard from '../components/ShoppingMallCard.vue'
import { ref, onMounted } from "vue";

const carouselRef = ref(null)
const carouselItems = ref([
    {id: 1, image: '#'},
    {id: 2, image: '#'},
    {id: 3, image: '#'},
    {id: 4, image: '#'}
]);
const shoppingMalls = ref([
    {name: 'Samarqand Darvoza', address: '5a улица Самарканд Дарвоза, Ташкент', distance: '2.5 км'},
    {name: 'Mega Planet', address: '15 улица Самарканд Дарвоза, Ташкент', distance: '3 км'},
    {name: 'Aviator', address: '5a улица Самарканд Дарвоза, Ташкент', distance: '5.5 км'},
    {name: 'Samarqand Darvoza', address: '51 улица Самарканд Дарвоза, Ташкент', distance: '4.7 км'},
    {name: 'Eco Bozor', address: '5a улица Самарканд Дарвоза, Ташкент', distance: '6 км'},
    {name: 'Atlas', address: '22 улица Самарканд Дарвоза, Ташкент', distance: '1 км'},
])

const moveCarousel = (direction) => {
    if(carouselRef.value) {
        const carouselItemWidth = carouselRef.value.children[0].offsetWidth
        const scrollLeft = carouselRef.value.scrollLeft

        const newIndex = direction === 'left' ? scrollLeft - carouselItemWidth - 20 : scrollLeft + carouselItemWidth + 20;

        const newIndexNormalized = newIndex < 0 ? carouselRef.value.scrollWidth - carouselRef.value.offsetWidth : newIndex % carouselRef.value.scrollWidth;

        carouselRef.value.scrollTo({
            left: newIndexNormalized,
            behavior: 'smooth',
        });
    }
}

</script>

<style scoped>

</style>
