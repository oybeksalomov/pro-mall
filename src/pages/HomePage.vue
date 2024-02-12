<template>
    <div class="pb-[10rem]">
        <HeaderMenu></HeaderMenu>
        <UnderNavbarMenu />
        <section class="mt-8">
            <div class="lg:container">
                <div class="relative">
                    <div ref="carouselRef" class="flex snap-mandatory snap-x aspect-[12/7] lg:aspect-auto lg:rounded-[2.5rem] lg:gap-8 flex-nowrap carouselScrollbar overflow-hidden">
                        <div
                            v-for="(carouselItem, index) in carouselItems"
                            :key="index"
                            class="w-full xl:w-[105rem] lg:h-[31rem] flex-none snap-start"
                        >
                            <a href="#" class="w-full h-full relative">
                                <img :src="carouselItem.image" alt="Carousel Image" class="w-full h-full object-cover lg:rounded-[2.5rem] bg-gray_lightest">
                            </a>
                        </div>
                    </div>
                    <button @click="moveCarousel('right')" class="rounded-full flex bg-white absolute top-1/2 -translate-y-[50%] right-4 lg:-right-[1.9rem] shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                        <i class="pi pi-chevron-right text-lg text-main_color"></i>
                    </button>
                    <button @click="moveCarousel('left')" class="rounded-full flex bg-white absolute top-1/2 -translate-y-[50%] left-4 lg:-left-[1.9rem] shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                        <i class="pi pi-chevron-left text-lg text-main_color"></i>
                    </button>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <div class="container">
                <h1 class="text-5xl font-bold">Торговые центры</h1>
                <div class="mt-8 grid min-[640px]:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ShoppingMallCard
                        v-for="(shoppingMall, index) in shoppingMalls"
                        :key="index"
                        :shoppingMall="shoppingMall"
                        class="w-full"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue'
import ShoppingMallCard from '../components/ShoppingMallCard.vue'
import {ref, onMounted, onBeforeMount, watch} from "vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
import carouselImage1 from "../assets/Rectangle 6.svg"
import carouselImage2 from "../assets/banner_2.svg"
import carouselImage3 from "../assets/44b38499-9532-4df0-a8c7-831997444c13.webp"
import mallImage1 from "../assets/samarqand_darvoza.jpg"
import mallImage2 from "../assets/mega_planet.jpg"
import mallImage3 from "../assets/atlas.jpeg"

const carouselRef = ref(null)
const carouselBannerItems = ref([
    {id: 1, image: carouselImage1},
    {id: 2, image: carouselImage2},
    {id: 3, image: carouselImage3},
    {id: 4, image: carouselImage2},
])
const carouselItems = ref([]);
const shoppingMalls = ref([
    {name: 'Samarqand Darvoza', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '2.5 км'},
    {name: 'Mega Planet', address: '15 улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '3 км'},
    {name: 'Aviator', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '5.5 км'},
    {name: 'Samarqand Darvoza', address: '51 улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '4.7 км'},
    {name: 'Eco Bozor', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '6 км'},
    {name: 'Atlas', address: '22 улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '1 км'},
])

const moveCarousel = (direction) => {
    if(carouselRef.value) {
        const carouselItemWidth = carouselRef.value.children[0].offsetWidth + (screen.width < 1024 ? 0 : 20)
        const scrollLeft = carouselRef.value.scrollLeft
        const scrollWidth = carouselRef.value.scrollWidth
        const timeOut = screen.width < 1024 ? 500 : 700
        const newIndex = direction === 'left' ? scrollLeft - carouselItemWidth : scrollLeft + carouselItemWidth;

        carouselRef.value.scrollTo({
            left: newIndex,
            behavior: 'smooth',
        });

        if(scrollLeft > scrollWidth * 0.7) {
            setTimeout(() => {
                carouselRef.value.scrollTo({
                    left: scrollWidth / 2
                })
            }, timeOut)
        } else if(scrollLeft < scrollWidth * 0.3) {
            setTimeout(() => {
                carouselRef.value.scrollTo({
                    left: scrollWidth / 2
                })
            }, timeOut)
        }
    }
}

onBeforeMount(() => {
    carouselItems.value = [...carouselBannerItems.value, ...carouselBannerItems.value, ...carouselBannerItems.value]
})
onMounted(() => {
    carouselRef.value.scrollTo({
        left: carouselRef.value.scrollWidth / 2
    })
    setInterval(() => {
        moveCarousel('right')
    }, 3000)
})
</script>

<style scoped>
.carouselScrollbar {
    scrollbar-width: none;
}
</style>
