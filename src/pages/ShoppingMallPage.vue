<template>
    <HeaderMenu />
    <UnderNavbarMenu class="hidden xl:block"/>
    <div class="mt-[13.1rem] xl:mt-[3rem]">
        <div class="container">
            <div>
                <!--About Mall-->
                <div class="p-8 rounded-[2.5rem] bg-red_hover shadow-lg">
                    <div class="flex items-center">
                        <div class="w-[5rem] h-[5rem] xl:w-[7.6rem] xl:h-[7.6rem] rounded-xl border-gray_light">
                            <img class="w-full h-full object-contain rounded-xl" src="../assets/Frame%2048096607.svg" alt="Logo">
                        </div>
                        <div class="text-xl xl:text-5xl font-semibold ml-4">Next Mall</div>
                        <button @click="toggleFavorite" class="ml-auto leading-none">
                            <i class="pi text-xl" :class="isFavorite ? 'pi-heart-fill text-main_color' : 'pi-heart'"></i>
                        </button>
                        <div class="text-base font-medium ml-4 hidden xl:block">В избранное</div>
                    </div>

                    <div class="mt-8 gap-8 xl:gap-16 grid grid-cols-1 min-[468px]:grid-cols-2 xl:grid-cols-4">
                        <div
                            v-for="(info, index) in mallInfos"
                            :key="index"
                            class="flex items-center p-6 bg-white rounded-[1.5rem] overflow-hidden"
                        >
                            <i class="pi text-xl text-main_color" :class="info.icon"></i>
                            <div class="text-sm ml-6">
                                <div class="font-semibold ">{{info.labelTop}}</div>
                                <div class="text-gray_text whitespace-nowrap text-ellipsis overflow-hidden">{{info.labelBottom}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Categories-->
                <div class="p-4 mt-12 rounded-[2.5rem] shadow-lg bg-red_hover gap-6 flex-wrap hidden xl:flex">
                    <router-link to="#" class="py-4 px-6 text-md font-medium rounded-full" :class="'bg-main_color text-white'">Все</router-link>
                    <router-link
                        to="#"
                        v-for="(category, index) in categories"
                        :key="index"
                        class="py-4 px-6 text-md font-medium bg-white rounded-full"
                    >{{category.label}}</router-link>
                </div>

                <!--start Top Shops-->
                <div class="mt-16">
                    <div class="flex justify-between">
                        <h2 class="text-5xl font-bold">Топ магазины</h2>
                        <button class="text-lg hidden xl:block h-fit font-medium">Увидеть все</button>
                    </div>
                    <div class="grid grid-cols-1 min-[468px]:grid-cols-2 min-[768px]:grid-cols-3 xl:grid-cols-4 mt-8 gap-8">
                        <router-link
                            v-for="(shop, index) in shops"
                            :key="index"
                            :to="shop.url"
                            class="bg-red_hover p-8 rounded-[1.5rem]"
                        >
                            <div class="flex items-center">
                                <div class="text-md xl:text-lg font-medium">LC Waikiki</div>
                                <button @click.stop.prevent="shop.isFavorite = !shop.isFavorite" class="ml-auto leading-none">
                                    <i class="pi text-xl" :class="shop.isFavorite ? 'pi-heart-fill text-main_color' : 'pi-heart'"></i>
                                </button>
                            </div>
                            <div class="mt-[5rem] h-[4rem]">
                                <img class="w-full h-full" :src="shop.img" alt="Logo">
                            </div>
                        </router-link>
                    </div>
                </div>
                <!--end Top Shops-->
            </div>
        </div>
    </div>
    <FooterRow />
</template>

<script setup>

import HeaderMenu from "../components/HeaderMenu.vue";
import FooterRow from "../components/FooterRow.vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
import {ref} from "vue";
import logoImg1 from '../assets/LC_Waikiki_logo 1.svg'
import logoImg2 from '../assets/image 18.svg'
import logoImg3 from '../assets/image 19.svg'

const isFavorite = ref(false)
const mallInfos = ref([
    {
        icon: 'pi-map-marker',
        labelTop: 'Локация',
        labelBottom: 'г.Ташкент'
    },
    {
        icon: 'pi-clock',
        labelTop: 'Часы работы',
        labelBottom: 'Пн-Пт: 9:00-22:00'
    },
    {
        icon: 'pi-star',
        labelTop: 'Рецензия',
        labelBottom: '4.5 (600 Отзывов)'
    },
    {
        icon: 'pi-globe',
        labelTop: 'Карта ТЦ',
        labelBottom: '5 этажей | 140 Магазинов'
    }
])
const categories = ref([
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
    {
        label: 'Одежда'
    },
    {
        label: 'Электроника'
    },
])
const shops = ref([
    {img: logoImg1, url: '#', isFavorite: false},
    {img: logoImg2, url: '#', isFavorite: false},
    {img: logoImg3, url: '#', isFavorite: false},
    {img: logoImg1, url: '#', isFavorite: false},
    {img: logoImg3, url: '#', isFavorite: false},
    {img: logoImg2, url: '#', isFavorite: false},
    {img: logoImg1, url: '#', isFavorite: false},
    {img: logoImg3, url: '#', isFavorite: false},
])

const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
}
</script>

<style scoped>

</style>