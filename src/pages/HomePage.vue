<template>
    <HeaderMenu :is-show-address="true" @open-add-address="toggleAddAddress"/>
    <UnderNavbarMenu />

    <AddAddress v-if="isAddAddressOpen"/>

    <!--start carousel-->
    <section class="mt-8">
        <div class="lg:container relative">
            <div class="overflow-hidden lg:rounded-[2.5rem]" ref="emblaRef">
                <div class="flex aspect-[4/2] lg:aspect-auto">
                    <div
                        v-for="(carouselItem, index) in carouselItems"
                        :key="index"
                        class="w-full xl:w-[100rem] lg:mr-8 lg:h-[31rem] flex-none snap-start"
                    >
                        <a href="#" class="w-full h-full relative">
                            <img :src="carouselItem.image" alt="Carousel Image" class="w-full h-full object-cover lg:rounded-[2.5rem] bg-gray_lightest">
                        </a>
                    </div>
                </div>
                <button @click="scrollNext" class="rounded-full hidden lg:flex bg-white absolute top-1/2 -translate-y-[50%] right-6 shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                    <i class="pi pi-chevron-right text-lg text-main_color"></i>
                </button>
                <button @click="scrollPrev" class="rounded-full hidden lg:flex bg-white absolute top-1/2 -translate-y-[50%] left-6 shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                    <i class="pi pi-chevron-left text-lg text-main_color"></i>
                </button>
            </div>
        </div>
    </section>
    <!--end carousel-->

    <!--start Shopping Malls-->
    <section class="mt-12">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Торговые центры</h2>
                <button class="text-lg hidden xl:block h-fit font-medium">Увидеть все</button>
            </div>
            <div class="mt-8 grid min-[640px]:grid-cols-2 lg:grid-cols-3 gap-8">
                <ShoppingMallCard
                    v-for="(shoppingMall, index) in shoppingMalls"
                    :key="index"
                    :shoppingMall="shoppingMall"
                    :mall-id="index"
                    class="w-full"
                />
            </div>
        </div>
    </section>
    <!--end Shopping Malls-->

    <!--start Sales Cards-->
    <section class="mt-20">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Топ скидки</h2>
                <button class="text-lg hidden xl:block h-fit font-medium">Увидеть все</button>
            </div>
            <div class="relative">
                <div ref="saleCardsRef" class="pt-8 snap-x snap-mandatory flex overflow-auto saleCardsScrollbar gap-8">
                    <SaleCard
                        v-for="(saleCard, index) in saleCards"
                        :key="index"
                        :saleCard="saleCard"
                        class="min-w-[22rem] snap-start"
                    />
                    <button @click="moveSaleCards('left')" class="absolute hidden lg:flex left-4 hover:bg-gray_icon hover:bg-opacity-20 transition-all rounded-full items-center justify-center w-12 h-12 top-1/2 -translate-y-1/2"><i class="pi pi-chevron-left text-xl text-gray_icon"></i></button>
                    <button @click="moveSaleCards('right')" class="absolute hidden lg:flex right-4 hover:bg-gray_medium hover:bg-opacity-20 transition-all rounded-full items-center justify-center w-12 h-12 top-1/2 -translate-y-1/2"><i class="pi pi-chevron-right text-xl text-gray_icon"></i></button>
                </div>
            </div>
        </div>
    </section>
    <!--end Sales Cards-->

    <!--start Top Shops-->
    <section class="mt-20">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Топ магазины</h2>
                <button class="text-lg hidden xl:block h-fit font-medium">Увидеть все</button>
            </div>
            <div class="mt-8 grid grid-cols-2 min-[576px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                <router-link
                    :to="shop.url"
                    v-for="(shop, index) in shops"
                    :key="index"
                    class="rounded-[1.3rem] aspect-[4/3]"
                >
                    <img :src="shop.img" alt="Shops" class="w-full h-full rounded-[1.3rem] object-center object-cover">
                </router-link>
            </div>
        </div>
    </section>
    <!--end Top Shops-->

    <!--start Top Brands-->
    <section class="mt-20">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Топ магазины</h2>
                <button class="text-lg hidden xl:block h-fit font-medium">Увидеть все</button>
            </div>
            <div class="mt-8 grid grid-cols-2 min-[576px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                <router-link
                    :to="brand.url"
                    v-for="(brand, index) in brands"
                    :key="index"
                    class="rounded-[1.3rem] flex items-center justify-center bg-gray_subscribe aspect-[2/1]"
                >
                    <div class="w-1/2">
                        <img :src="brand.img" alt="Shops" class="w-full h-full object-center object-cover">
                    </div>
                </router-link>
            </div>
        </div>
    </section>
    <!--end Top Brands-->

    <!--start Subscribe-->
    <SubscribeRow />
    <!--end Subscribe-->

    <!--start advertisement mobile app-->
    <section class="mt-[10rem] bg-main_color">
        <div class="container">
            <div class="flex justify-start relative">
                <div class="flex flex-col py-[5rem] xl:py-[7rem] justify-center px-[2rem] xl:pl-[5rem] max-w-[65rem]">
                    <h3 class="text-[3.2rem] mb-[3rem] font-bold text-white">Скачивайте приложение PRO MALL на свой смартфон</h3>
                    <div class="flex flex-col xl:flex-row gap-6">
                        <img src="../assets/div.mobile-app-widget__qr-code%20(1).svg" class="w-[7.6rem]" alt="QR code">
                        <img src="../assets/googleplay.739a9a.svg%20fill.svg" class="w-[20rem]" alt="GooglePlay">
                        <img src="../assets/applestore.5f9da8.svg%20fill.svg" class="w-[20rem]" alt="AppleStore">
                    </div>
                </div>
                <div class="hidden xl:block w-[63rem] absolute -right-[5rem] -bottom-[4px]">
                    <img src="../assets/div.mobile-app-widget__picture.svg" class="w-full h-full" alt="Phone photo">
                </div>
            </div>
        </div>
    </section>
    <!--start advertisement mobile app-->

    <FooterRow />
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue'
import ShoppingMallCard from '../components/ShoppingMallCard.vue'
import SaleCard from "../components/SaleCard.vue";
import {ref, onMounted, onBeforeMount} from "vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
import carouselImage1 from "../assets/Rectangle 6.svg"
import carouselImage2 from "../assets/banner_2.svg"
import carouselImage3 from "../assets/44b38499-9532-4df0-a8c7-831997444c13.webp"
import mallImage1 from "../assets/samarqand_darvoza.jpg"
import mallImage2 from "../assets/mega_planet.jpg"
import mallImage3 from "../assets/atlas.jpeg"
import saleImage from "../assets/Frame 48096434.svg"
import FooterRow from "../components/FooterRow.vue";
import shopImage1 from "../assets/terrapro.jpg"
import shopImage2 from "../assets/just2010.jpeg"
import shopImage3 from "../assets/xsport2010.jpg"
import brandImg1 from "../assets/image 19.svg"
import brandImg2 from "../assets/image 18.svg"
import brandImg3 from "../assets/image 20.svg"
import brandImg4 from "../assets/image 21.svg"
import AddAddress from "../components/AddAddress.vue";
import SubscribeRow from "../components/SubscribeRow.vue";
import {useAddressStore} from "../store/address.js";
import {storeToRefs} from "pinia";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const addressStore = useAddressStore()
const {addresses, isAddAddressOpen} = storeToRefs(addressStore)

const carouselRef = ref(null)
const saleCardsRef = ref(null)

const carouselItems = ref([
    {id: 1, image: carouselImage1},
    {id: 2, image: carouselImage2},
    {id: 3, image: carouselImage3},
    {id: 4, image: carouselImage2},
]);
const shoppingMalls = ref([
    {name: 'Samarqand Darvoza', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '2.5 км'},
    {name: 'Mega Planet', address: '15 улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '3 км'},
    {name: 'Aviator', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '5.5 км'},
    {name: 'Samarqand Darvoza', address: '51 улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '4.7 км'},
    {name: 'Eco Bozor', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '6 км'},
    {name: 'Atlas', address: '22 улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '1 км'},
])
const saleCards = ref([
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "New Balance"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "New Balance"},
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "Balenciaga"}
])
const shops = ref([
    {img: shopImage1, url: '#'},
    {img: shopImage2, url: '#'},
    {img: shopImage3, url: '#'},
    {img: shopImage2, url: '#'},
    {img: shopImage3, url: '#'},
    {img: shopImage1, url: '#'},
    {img: shopImage1, url: '#'},
    {img: shopImage2, url: '#'},
    {img: shopImage3, url: '#'},
    {img: shopImage3, url: '#'},
    {img: shopImage2, url: '#'},
    {img: shopImage1, url: '#'},
])
const brands = ref([
    {img: brandImg1, url: '#'},
    {img: brandImg2, url: '#'},
    {img: brandImg3, url: '#'},
    {img: brandImg4, url: '#'},
    {img: brandImg1, url: '#'},
    {img: brandImg2, url: '#'},
    {img: brandImg3, url: '#'},
    {img: brandImg4, url: '#'},
    {img: brandImg1, url: '#'},
    {img: brandImg2, url: '#'},
    {img: brandImg3, url: '#'},
    {img: brandImg4, url: '#'},
])
const [emblaRef, emblaApi] = emblaCarouselVue({loop: true, align: "start", }, [Autoplay()])

const scrollPrev = () => {
    if (emblaApi) emblaApi.value.scrollPrev()
}
const scrollNext = () => {
    if (emblaApi) emblaApi.value.scrollNext()
}

const moveSaleCards = (direction) => {
    if (saleCardsRef.value) {
        const saleCardWidth = saleCardsRef.value.children[0].offsetWidth + 20
        const scrollLeft = saleCardsRef.value.scrollLeft
        const newIndex = direction === 'left' ? scrollLeft - saleCardWidth : scrollLeft + saleCardWidth;

        saleCardsRef.value.scrollTo({
            left: newIndex,
            behavior: 'smooth',
        });
    }
}

const toggleAddAddress = () => {
    addressStore.toggleAddAddress()
    document.body.style.overflow = isAddAddressOpen ? 'hidden' : 'auto'
}

</script>

<style scoped>
.saleCardsScrollbar {
    scrollbar-width: none;
}

</style>
