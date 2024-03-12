<template>
    <section class="fixed top-0 bg-white left-0 w-full z-50">
        <div class="relative">
            <!--start Desktop navbar-->
            <div
                v-if="!isMenuOpen"
                class="absolute xl:hidden w-full bg-white top-0 left-0 z-30 transition-transform delay-75 duration-300"
                :class="[isScrollToBottom ? '-translate-y-full' : 'translate-y-[4.7rem]', {'border-b border-gray_lightest': isWindowScrolled}]"
            >
                <div class="container">
                    <div v-if="isActiveAddress" class="w-full xl:hidden my-4 flex items-center">
                        <i class="pi pi-map-marker text-xl text-main_color mr-4"></i>
                        <div class="">
                            <div class="text-sm text-gray_medium">Адрес доставки</div>
                            <div @click="toggleAddressCard" class="cursor-pointer text-md flex items-center">
                                <span class="mr-4">Rishton ko'chasi</span>
                                <i class="pi pi-chevron-right text-sm"></i>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full xl:hidden my-4">
                        <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                        <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                    </div>
                </div>
            </div>

            <div
                class="py-5 xl:py-8 absolute w-full left-0 bg-white z-40"
                :class="[{'border-b border-gray_lightest xl:border-none': isWindowScrolled && isScrollToBottom}, {'xl:shadow-md': isWindowScrolled && !isDesktopMenuOpen}]"
            >
                <div class="container flex items-center xl:justify-between gap-3">
                    <button @click="toggleMenu" class="text-gray_icon xl:hidden mr-2">
                        <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5V7H12H22V5H2ZM2 11V13H22V11H12H2ZM2 17V19H22V17H2Z" fill="#677178"/>
                        </svg>
                    </button>
                    <router-link to="/" class="w-[10rem] xl:w-fit lg: flex-none"><img src="../assets/promall 1.svg" alt="Logo"></router-link>
                    <button @click="toggleDesktopMenu" class="text-white font-semibold bg-main_color py-3 px-6 rounded-full hidden xl:flex items-center">
                        <svg v-if="!isDesktopMenuOpen" class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5V7H12H22V5H2ZM2 11V13H22V11H12H2ZM2 17V19H22V17H2Z" fill="white"/>
                        </svg>
                        <i v-else class="pi pi-times text-base font-semibold p-2 mr-2 w-[2.4rem] h-[2.4rem]"></i>
                        <span class="text-base">Каталог</span>
                    </button>
                    <span class="relative w-full hidden xl:block">
                        <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                        <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                    </span>
                    <ul class="flex xl:max-w-[26.5rem] xl:w-full ml-auto xl:ml-0 justify-evenly relative">
                        <li class="text-sm px-1 mx-4 xl:mx-0 hidden xl:block">
                            <button @click="toggleSignIn" class="flex flex-col items-center text-gray_icon">
                                <i class="pi pi-user text-xl"></i>
                                <span class="hidden text-md xl:block">Войти</span>
                            </button>
                        </li>
                        <li
                            v-for="navbarItem in navbarItems"
                            :key="navbarItem.name"
                            class="text-sm px-1 mx-4 xl:mx-0"
                        >
                            <router-link class="flex flex-col items-center text-gray_icon" :to="navbarItem.url">
                                <i :class="navbarItem.icon" class="text-xl"></i>
                                <span class="hidden text-md xl:block">{{navbarItem.label}}</span>
                            </router-link>
                        </li>
                        <li class="absolute text-white bg-main_color rounded-full p-0.5 min-w-8 right-0 xl:right-6 -top-4 flex items-center justify-center ">2</li>
                    </ul>
                </div>
            </div>
            <!--end Desktop navbar-->

            <!--Start Mobile menu-->
            <transition name="mobileMenu">
                <div ref="mobileMenu" v-if="isMenuOpen" class="h-dvh mobileMenu overflow-y-auto px-6 absolute bg-white z-40 w-full py-6">
                    <div class="h-fit min-h-full">
                        <div class="flex justify-end">
                            <button @click="toggleMenu">
                                <i class="pi pi-times text-md font-semibold text-gray_icon"></i>
                            </button>
                        </div>
                        <div class="text-base py-6 font-semibold">Каталог</div>
                        <ul>
                            <li
                                v-for="(menuItem, index) in menuItems"
                                :key="index"
                                class="flex flex-col"
                            >
                                <div @click="openOneNestedItems(index)" class="flex items-center justify-start cursor-pointer mb-4">
                                    <div class="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                        <i :class="menuItem.icon" class="text-base text-white"></i>
                                    </div>
                                    <div class="text-md whitespace-nowrap overflow-hidden text-ellipsis">{{menuItem.label}}</div>
                                    <i v-show="menuItem.items" class="pi pi-chevron-down ml-auto transition-transform text-base text-gray_icon" :class="{'rotate-180': menuItem.isOpen}"></i>
                                </div>
                                <transition name="headerMenu">
                                    <ul v-if="menuItem.isOpen">
                                        <li
                                            v-for="(subItem, index) in menuItem.items"
                                            :key="index"
                                            class="whitespace-nowrap overflow-hidden text-ellipsis mb-8"
                                        >
                                            <div @click="openTwoNestedMenu(index)" class="pl-[5rem] cursor-pointer text-md">{{subItem.label}}</div>
                                            <transition name="nestedMenu">
                                                <div v-show="subItem.isOpen" class="h-full max-h-[100vh] px-6 left-0 overflow-hidden fixed bg-white top-0 z-40 w-full py-6">
                                                    <div class="flex items-start pb-8">
                                                        <button @click="backToMenu(index)" class="rounded-full flex-none mr-4 flex bg-white shadow-md items-center justify-center w-[3.2rem] h-[3.2rem]">
                                                            <i class="pi pi-chevron-left text-base text-main_color"></i>
                                                        </button>
                                                        <div>
                                                            <div class="text-3xl font-semibold whitespace-pre-wrap">{{subItem.label}}</div>
                                                            <div class="mt-8">
                                                                <router-link to="#" class="font-semibold text-main_color text-md">Все товары из категории</router-link>
                                                            </div>
                                                        </div>
                                                        <button @click="closeTwoNestedMenu(index)" class="ml-auto"><i class="pi pi-times font-semibold text-gray_icon text-base"></i></button>
                                                    </div>
                                                    <div class="nestedMenuHeader pb-6 overflow-auto">
                                                        <ul class="h-fit min-h-full">
                                                            <li
                                                                v-for="(twoSubItem, index) in subItem.items"
                                                                :key="index"
                                                                class="whitespace-nowrap overflow-hidden text-ellipsis"
                                                            >
                                                                <div @click="openTwoSubItems(index)" class="flex items-center justify-start cursor-pointer mb-4">
                                                                    <div class="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                                                        <i :class="twoSubItem.icon" class="text-base text-white"></i>
                                                                    </div>
                                                                    <div class="text-md whitespace-nowrap overflow-hidden text-ellipsis">{{twoSubItem.label}}</div>
                                                                    <i v-show="twoSubItem.items" class="pi pi-chevron-down ml-auto transition-transform text-base text-gray_icon" :class="{'rotate-180': twoSubItem.isOpen}"></i>
                                                                </div>
                                                                <transition name="headerMenu">
                                                                    <ul v-if="twoSubItem.isOpen">
                                                                        <li
                                                                            v-for="(threeSubItem, index) in twoSubItem.items"
                                                                            :key="index"
                                                                            class="whitespace-nowrap overflow-hidden text-ellipsis mb-8"
                                                                        >
                                                                            <button @click="pushToCatalog(threeSubItem.label)" class="pl-[5rem] cursor-pointer text-md">{{threeSubItem.label}}</button>
                                                                        </li>
                                                                    </ul>
                                                                </transition>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </transition>
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
            <!--End Mobile menu-->

            <!--Start Desktop Menu-->
            <div v-if="isDesktopMenuOpen" class="absolute bg-white pt-[8.3rem] top-0 left-0 w-full h-fit min-h-[100vh]">
                <div class="container">
                    <div class="relative">
                        <div class="desktopMenu overflow-y-auto">
                            <ul class="h-fit ">
                                <li class="flex desktopMenuItem hover:bg-red_hover rounded-xl pr-4 transition-all max-w-[30rem] items-center justify-start cursor-pointer mb-4">
                                    <div class="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                        <i class="pi pi-apple text-base text-white"></i>
                                    </div>
                                    <RouterLink to="#" class="text-md desktopMenuItemLabel whitespace-nowrap overflow-hidden text-ellipsis">Супермаркет</RouterLink>
                                </li>
                                <li
                                    v-for="(menuItem, index) in menuItems"
                                    :key="index"
                                >
                                    <div @mouseenter="openOneNestedDesktopItems(index)" class="flex desktopMenuItem hover:bg-red_hover rounded-xl pr-4 transition-all max-w-[30rem] items-center justify-start cursor-pointer mb-4">
                                        <div class="w-[4rem] h-[4rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                            <i :class="menuItem.icon" class="text-base text-white"></i>
                                        </div>
                                        <div :class="{'text-main_color': menuItem.isOpen}" class="text-md desktopMenuItemLabel whitespace-nowrap overflow-hidden text-ellipsis">{{menuItem.label}}</div>
                                        <i v-show="menuItem.items" class="pi pi-chevron-right desktopMenuItemIcon ml-auto transition-transform text-base text-gray_icon"></i>
                                    </div>
                                    <transition name="nestedDesktopItems">
                                        <div v-if="menuItem.isOpen" class="absolute top-0 left-[32rem] bg-white">
                                            <div class="text-6xl pl-4 font-semibold">{{menuItem.label}}</div>
                                            <div class="desktopMenu overflow-y-auto">
                                                <ul class="w-[30rem] h-fit mt-4">
                                                    <li
                                                        v-for="(oneNestedItem, index) in menuItem.items"
                                                        :key="index"
                                                    >
                                                        <div @mouseenter="openTwoNestedDesktopItems(index)" class="flex p-2 desktopMenuItem w-full hover:bg-red_hover rounded-xl transition-all items-center justify-start cursor-pointer mb-4">
                                                            <div :class="{'text-main_color': oneNestedItem.isOpen}" class="text-md desktopMenuItemLabel">{{oneNestedItem.label}}</div>
                                                            <i v-show="oneNestedItem.items" class="pi pi-chevron-right pl-1 desktopMenuItemIcon ml-auto transition-transform text-base text-gray_icon"></i>
                                                        </div>
                                                        <transition name="nestedDesktopItems">
                                                            <div v-if="oneNestedItem.isOpen" class="absolute top-[4.5rem] left-[32rem] bg-white">
                                                                <div class="desktopMenu overflow-y-auto">
                                                                    <ul class="w-[30rem] h-fit mt-4">
                                                                        <li
                                                                            v-for="(twoNestedItem, index) in oneNestedItem.items"
                                                                            :key="index"
                                                                        >
                                                                            <div @mouseenter="openThreeNestedDesktopItems(index)" class="flex p-2 desktopMenuItem w-full hover:bg-red_hover rounded-xl transition-all items-center justify-start cursor-pointer mb-4">
                                                                                <div :class="{'text-main_color': twoNestedItem.isOpen}" class="text-md desktopMenuItemLabel">{{twoNestedItem.label}}</div>
                                                                                <i v-show="twoNestedItem.items" class="pi pi-chevron-right pl-1 desktopMenuItemIcon ml-auto transition-transform text-base text-gray_icon"></i>
                                                                            </div>
                                                                            <transition name="nestedDesktopItems">
                                                                                <div v-if="twoNestedItem.isOpen" class="absolute top-0 left-[32rem] bg-white">
                                                                                    <div class="desktopMenu overflow-y-auto">
                                                                                        <ul class="w-[26rem] h-fit mt-4">
                                                                                            <li
                                                                                                v-for="(threeNestedItem, index) in twoNestedItem.items"
                                                                                                :key="index"
                                                                                                class="flex p-2 desktopMenuItem hover:bg-red_hover rounded-xl transition-all w-full items-center justify-start cursor-pointer mb-4"
                                                                                            >
                                                                                                <button @click="pushToCatalog(threeNestedItem.label)" class="text-md desktopMenuItemLabel">{{threeNestedItem.label}}</button>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </transition>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </transition>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </transition>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Desktop Menu-->
        </div>

        <!--Address Card start-->
        <div v-if="isMobileAddressCardOpen" class="absolute xl:hidden flex w-full h-dvh z-50 top-0 left-0 bg-white bg-opacity-50">
            <div v-on-click-outside="toggleAddressCard" class="z-30 addressCard p-8 bg-white mt-auto rounded-t-[2rem] w-full">
                <div class="flex items-center">
                    <i class="pi pi-home text-gray_text font-bold text-3xl mr-6"></i>
                    <div class="text-3xl font-semibold">Адрес доставки</div>
                    <button @click="toggleAddressCard" class="ml-auto"><i class="pi pi-times text-base text-gray_text font-bold"></i></button>
                </div>

                <div v-if="selectAddress.length > 0" class="flex flex-col">
                    <label
                        v-for="(address, index) in selectAddress"
                        :key="index"
                        class="flex items-center py-8 text-base relative cursor-pointer"
                        :class="index !== selectAddress.length-1 ? 'border-b border-gray_light' : ''"
                    >
                    <span v-if="selectedAddress === address.value" class="w-8 h-8 flex items-center justify-center rounded-full absolute bg-main_color border border-main_color">
                        <span class="w-4 h-4 rounded-full absolute bg-gray_lightest"></span>
                    </span>
                        <span v-else class="w-8 h-8 rounded-full absolute bg-gray_lightest border border-gray_light"></span>

                        <input type="radio" :value="address.value" v-model="selectedAddress" class="appearance-none">

                        <span class="ml-12">{{address.value}}</span>
                        <button @click="removeAddress(index)" class="ml-auto"><i class="pi pi-trash text-lg text-gray_text"></i></button>
                    </label>
                </div>
                <div v-else class="text-base py-8">Укажите ваш адрес</div>
                <button @click="openAddAddress" class="text-base w-full rounded-[2rem] text-white py-4 bg-main_color">{{ selectAddress.length > 0 ? 'Добавить новый' : 'Указать адрес' }}</button>
            </div>
        </div>

        <transition name="sign-in">
            <SignIn v-if="isSignInOpen" @close-sign-in="toggleSignIn"/>
        </transition>
    </section>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router"
import {vOnClickOutside} from "@vueuse/components";
import SignIn from "./SignIn.vue";

const router = useRouter()
const mobileMenu = ref(null)
const isMenuOpen = ref(false)
const isSignInOpen = ref(false)
const isDesktopMenuOpen = ref(false)
const isWindowScrolled = ref(false)
const isScrollToBottom = ref(false)
const scrollValue = ref(0)
const menuItems = ref([
    {
        id: 1,
        label: 'Электроника',
        icon: 'pi pi-apple', isOpen: false,
        items: [
            {
                label: 'Смартфоны и телефоны',
                isOpen: false,
                items: [
                    {
                        label: 'Аксессуары для смартфонов',
                        icon: 'pi pi-apple',
                        isOpen: false,
                        items: [
                            {label: 'Фильтр 1'},
                            {label: 'Фильтр 2'}
                        ]
                    },
                    {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                    {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}
                ]
            },
            {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Умные часы и фитнес браслеты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Наушники и аудиотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Часы и электронные будильники', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Телевизоры и видеотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Игровые приставки', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Оптические приборы', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
        ]
    },
    {
        id: 2,
        label: 'Бытовая техника',
        icon: 'pi pi-car', isOpen: false,
        items: [
            {label: 'Техника для красоты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Крупная бытовая техника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Умные часы и фитнес браслеты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Наушники и аудиотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Часы и электронные будильники', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Телевизоры и видеотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Игровые приставки', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Оптические приборы', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
        ]
    },
    {
        id: 3,
        label: 'Одежда',
        icon: 'pi pi-camera', isOpen: false,
        items: [
            {label: 'Мужская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Женская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            {label: 'Детская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
        ]
    },
    {id: 4, label: 'Обувь', isOpen: false, icon: 'pi pi-box'},
    {id: 5, label: 'Аксессуары', isOpen: false, icon: 'pi pi-box'},
    {id: 6, label: 'Красота и уход', isOpen: false, icon: 'pi pi-apple'},
    {id: 7, label: 'Здоровье', isOpen: false, icon: 'pi pi-box'},
    {id: 8, label: 'Товары для дома', isOpen: false, icon: 'pi pi-apple'},
    {id: 9, label: 'Строительство и ремонт', isOpen: false, icon: 'pi pi-box'},
    {id: 10, label: 'Автотовары', isOpen: false, icon: 'pi pi-box'},
    {id: 11, label: 'Детские товары', isOpen: false, icon: 'pi pi-box'},
    {id: 12, label: 'Хобби и творчество', isOpen: false, icon: 'pi pi-apple'},
])
const navbarItems = ref([
    {label: 'Заказы', icon: 'pi pi-shopping-bag', url: '#'},
    {label: 'Избранное', icon: 'pi pi-heart', url: '/favorites'},
    {label: 'Корзина', icon: 'pi pi-shopping-cart', isCart: true, url: '/cart'},
])
const isMobileAddressCardOpen = ref(false)
const selectedAddress = ref()
const selectAddress = ref([
    {value: 'Rishton ko\'cha 81', isSelected: true},
    {value: 'Mirzo Ulug\'bek ko\'cha 102'}
])
const oneNestedItem = ref({})
const twoNestedItem = ref({})
const threeNestedItem = ref({})
const oneIndex = ref(null)
const twoIndex = ref(null)
const threeIndex = ref(null)
const isActiveAddress = ref(false)

const emit = defineEmits(['openAddAddress'])
const props = defineProps(['isAddAddress', 'isShowAddress'])
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    oneNestedItem.value.isOpen = false
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

const toggleDesktopMenu = () => {
    isDesktopMenuOpen.value = !isDesktopMenuOpen.value
    document.body.style.overflow = isDesktopMenuOpen.value ? 'hidden' : 'auto'
    closeNestedItems(menuItems.value)
    oneIndex.value = null
    twoIndex.value = null
    threeIndex.value = null
}

const pushToCatalog = (category) => {
    router.push(`/catalog/${category}`)
    if (isDesktopMenuOpen.value) {
        toggleDesktopMenu()
    }
    if(isMenuOpen.value) {
        toggleMenu()
    }
}

// desktop
const openOneNestedDesktopItems = (index) => {
    if(oneIndex.value || oneIndex.value === 0) {
        if(index !== oneIndex.value) {
            menuItems.value[oneIndex.value].isOpen = false
            menuItems.value[index].isOpen = true
        }

    } else {
        menuItems.value[index].isOpen = true
    }

    oneIndex.value = index
    twoNestedItem.value = menuItems.value[index]

    closeNestedItems(twoNestedItem.value.items)
    twoIndex.value = null
    threeIndex.value = null
}
const openTwoNestedDesktopItems = (index) => {
    if(twoIndex.value || twoIndex.value === 0) {
        if(index !== twoIndex.value) {
            twoNestedItem.value.items[twoIndex.value].isOpen = false
            twoNestedItem.value.items[index].isOpen = true
        }

    } else {
        twoNestedItem.value.items[index].isOpen = true
    }

    twoIndex.value = index
    threeNestedItem.value = twoNestedItem.value.items[index]

    closeNestedItems(threeNestedItem.value.items)
    threeIndex.value = null
}
const openThreeNestedDesktopItems = (index) => {
    if(threeIndex.value || threeIndex.value === 0) {
        if(index !== threeIndex.value) {
            threeNestedItem.value.items[threeIndex.value].isOpen = false
            threeNestedItem.value.items[index].isOpen = true
        }

    } else {
        threeNestedItem.value.items[index].isOpen = true
    }

    threeIndex.value = index
}
const closeNestedItems = (items) => {
    if (items) {
        items.forEach(item => {
            item.isOpen = false
        })
    }
}

//mobile menu
const handleScroll = () => {
    isWindowScrolled.value = window.scrollY > 0;
    scrollValue.value = window.scrollY
}

const openOneNestedItems = (index) => {
    menuItems.value[index].isOpen = !menuItems.value[index].isOpen
    oneNestedItem.value = menuItems.value[index]
}

const openTwoNestedMenu = (index) => {
    const items = oneNestedItem.value.items

    items[index].isOpen = true
    mobileMenu.value.style.overflow = 'hidden'
    twoNestedItem.value = items[index]
}
const openTwoSubItems = (index) => {
    const items = twoNestedItem.value.items
    items[index].isOpen = !items[index].isOpen
    if (window.innerWidth > 1280) {
        items[index].isOpen = false
    }
}
const closeTwoNestedMenu = (index) => {
    oneNestedItem.value.items[index].isOpen = false
    oneNestedItem.value.isOpen = false
    isMenuOpen.value = false
    mobileMenu.value.style.overflow = 'auto'
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}
const backToMenu = (index) => {
    oneNestedItem.value.items[index].isOpen = false
    mobileMenu.value.style.overflow = 'auto'
}

//sign in
const toggleSignIn = () => {
    isSignInOpen.value = !isSignInOpen.value
    document.body.style.overflow = !isSignInOpen.value ? 'auto' : 'hidden'
}

const giveBodyStyle = () => {
    document.body.style.overflow =
        !isMenuOpen.value &&
        !isDesktopMenuOpen.value &&
        !isSignInOpen.value &&
        !isMobileAddressCardOpen.value &&
        !props.isAddAddress ?
            'auto' : 'hidden'
}
const handleWindowResize = () => {
    if (window.innerWidth >= 1280) {
        isMenuOpen.value = false
        isMobileAddressCardOpen.value = false
        giveBodyStyle()
    } else {
        isDesktopMenuOpen.value = false
        giveBodyStyle()
    }
}
const toggleAddressCard = () => {
    isMobileAddressCardOpen.value = !isMobileAddressCardOpen.value
    document.body.style.overflow = !isMobileAddressCardOpen.value ? 'auto' : 'hidden'
}
const openAddAddress = () => {
    emit('openAddAddress')
}
const removeAddress = (index) => {
    selectAddress.value = selectAddress.value.filter(address => selectAddress.value[index] !== address)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleWindowResize)
    selectAddress.value.forEach(address => {
        if(address.isSelected) {
            selectedAddress.value = address.value
        }
    })
    isActiveAddress.value = props.isShowAddress
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWindowResize)
})

watch(scrollValue, (oldValue, newValue) => {
    oldValue > newValue ? isScrollToBottom.value = true : isScrollToBottom.value = false
})
</script>

<style scoped>
.nestedMenuHeader {
    height: calc(100% - 102px);
}
.mobileMenu,
.nestedMenuHeader {
    scrollbar-width: none;
}
.desktopMenuItem:hover .desktopMenuItemLabel,
.desktopMenuItem:hover .desktopMenuItemIcon {
    color: #ff0000;
    transition: all 0.2s ease;
}
.desktopMenu {
    height: calc(100vh - 83px);
    scrollbar-width: none;
}
</style>