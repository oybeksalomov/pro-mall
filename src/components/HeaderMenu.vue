<template>
    <section class="fixed top-0 bg-white left-0 w-full z-50">
        <div class="">
            <div class="relative">
                <!--start Desktop navbar-->
                <div
                    v-if="!isMenuOpen"
                    class="absolute container :hidden w-full bg-white top-0 left-0 z-30 transition-transform delay-75 duration-300"
                    :class="[isScrollToBottom ? '-translate-y-full' : 'translate-y-[4.7rem]', {'border-b border-gray_lightest': isWindowScrolled}]"
                >
                    <div class="w-full lg:hidden my-4 flex items-center">
                        <i class="pi pi-map-marker text-xl text-main_color mr-4"></i>
                        <div class="">
                            <div class="text-sm text-gray_medium">Адрес доставки</div>
                            <div class="text-md flex items-center">
                                <span class="mr-4">Rishton ko'chasi</span>
                                <i class="pi pi-chevron-right text-sm"></i>
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full lg:hidden my-4">
                        <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                        <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                    </div>
                </div>

                <div
                    class="py-5 lg:py-8 absolute w-full left-0 bg-white z-40"
                    :class="[{'border-b border-gray_lightest lg:border-none': isWindowScrolled && isScrollToBottom}, {'lg:shadow-md': isWindowScrolled && !isMenuOpen}]"
                >
                    <div class="container flex items-center lg:justify-between gap-3">
                        <button @click="openMenu" class="text-gray_icon lg:hidden mr-2">
                            <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5V7H12H22V5H2ZM2 11V13H22V11H12H2ZM2 17V19H22V17H2Z" fill="#677178"/>
                            </svg>
                        </button>
                        <router-link to="/" class="w-[10rem] lg:w-fit lg: flex-none"><img src="../assets/promall 1.svg" alt="Logo"></router-link>
                        <button class="text-white font-semibold bg-main_color py-3 px-6 rounded-full hidden lg:flex items-center">
                            <svg v-if="!isMenuOpen" class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5V7H12H22V5H2ZM2 11V13H22V11H12H2ZM2 17V19H22V17H2Z" fill="white"/>
                            </svg>
                            <i v-else class="pi pi-times text-base font-semibold p-2 mr-2 w-[2.4rem] h-[2.4rem]"></i>
                            <span class="text-base">Каталог</span>
                        </button>
                        <span class="relative w-full hidden lg:block">
                            <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                            <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                        </span>
                        <ul class="flex lg:max-w-[26.5rem] lg:w-full ml-auto lg:ml-0 justify-evenly relative">
                            <li
                                v-for="navbarItem in navbarItems"
                                :key="navbarItem.name"
                                class="text-sm px-1 mx-4 lg:mx-0"
                                :class="navbarItem.isLogin ? 'hidden lg:block' : ''"
                            >
                                <router-link class="flex flex-col items-center text-gray_icon" :to="navbarItem.url">
                                    <i :class="navbarItem.icon" class="text-xl"></i>
                                    <span class="hidden text-md lg:block">{{navbarItem.label}}</span>
                                </router-link>
                            </li>
                            <li class="absolute text-white bg-main_color rounded-full p-0.5 min-w-8 right-0 lg:right-6 -top-4 flex items-center justify-center ">2</li>
                        </ul>
                    </div>
                </div>
                <!--end Desktop navbar-->

                <!--Start Mobile menu-->
                <transition name="mobileMenu">
                    <div ref="mobileMenu" v-if="isMenuOpen" class="h-[100vh] xl:hidden mobileMenu overflow-auto px-6 absolute bg-white z-40 w-full py-6">
                        <div class="h-fit min-h-full">
                            <div class="flex justify-end">
                                <button @click="openMenu">
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
                                    <div @click="openOneNestedItems(index)" class="flex items-center justify-start cursor-pointer mb-5">
                                        <div class="w-[3rem] h-[3rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                            <i :class="menuItem.icon" class="text-base text-white"></i>
                                        </div>
                                        <div class="text-md whitespace-nowrap overflow-hidden text-ellipsis">{{menuItem.label}}</div>
                                        <i class="pi pi-chevron-down ml-auto transition-transform text-base text-gray_icon" :class="{'rotate-180': menuItem.isOpen}"></i>
                                    </div>
                                    <transition name="headerMenu">
                                        <ul class="mb-2" v-if="menuItem.isOpen">
                                            <li
                                                v-for="(subItem, index) in menuItem.items"
                                                :key="index"
                                                class="whitespace-nowrap overflow-hidden text-ellipsis mb-8"
                                            >
                                                <div @click="openTwoNestedMenu(index)" class="pl-[4rem] cursor-pointer text-md">{{subItem.label}}</div>
                                                <transition name="nestedMenu">
                                                    <div v-show="subItem.isOpen" class="h-full max-h-[100vh] px-6 left-0 overflow-hidden absolute bg-white top-0 z-40 w-full py-6">
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
                                                        <div class="nestedMenuHeader overflow-auto">
                                                            <ul class="h-fit min-h-full">
                                                                <li
                                                                    v-for="(twoSubItem, index) in subItem.items"
                                                                    :key="index"
                                                                    class="whitespace-nowrap overflow-hidden text-ellipsis"
                                                                >
                                                                    <div @click="openTwoSubItems(index)" class="flex items-center justify-start cursor-pointer mb-8">
                                                                        <div class="w-[3rem] h-[3rem] flex items-center justify-center rounded-xl mr-4 bg-main_color">
                                                                            <i :class="twoSubItem.icon" class="text-base text-white"></i>
                                                                        </div>
                                                                        <div class="text-md whitespace-nowrap overflow-hidden text-ellipsis">{{twoSubItem.label}}</div>
                                                                        <i class="pi pi-chevron-down ml-auto transition-transform text-base text-gray_icon" :class="{'rotate-180': twoSubItem.isOpen}"></i>
                                                                    </div>
                                                                    <transition name="headerMenu">
                                                                        <ul v-if="twoSubItem.isOpen">
                                                                            <li
                                                                                v-for="(threeSubItem, index) in twoSubItem.items"
                                                                                :key="index"
                                                                                class="whitespace-nowrap overflow-hidden text-ellipsis mb-8"
                                                                            >
                                                                                <router-link to="#" class="pl-[4rem] cursor-pointer text-md">{{threeSubItem.label}}</router-link>
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

                <!--End Desktop Menu-->

                <!-- start Catalog -->
<!--                <div v-if="isCatalogOpen" class="absolute top-[8rem] bg-white lg:shadow-xl left-0 px-[1rem] w-full min-h-[100vh] h-fit">-->
<!--                    <div class="container lg:flex">-->
<!--                        <ul class="lg:w-fit lg:border-r lg:pr-4">-->
<!--                            <li-->
<!--                                v-for="catalogItem in catalogItems"-->
<!--                                :key="catalogItem.id"-->
<!--                                @mouseenter="openCategory(catalogItem.id)"-->
<!--                                @click="openCategory(catalogItem.id)"-->
<!--                                class="hover:text-main_color lg:border-b-0 border-gray_light whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer text-sm font-medium h-[4rem] flex justify-between items-center"-->
<!--                                :class="catalogItem.label === catalogItems[catalogItems.length - 1].label ? 'border-b-0' : 'border-b-[0.5px]'"-->
<!--                            >-->
<!--                            <div class="flex items-center">-->
<!--                                <i :class="catalogItem.icon" class="text-xl mr-3"></i>-->
<!--                                <span class="pr-8">{{ catalogItem.label }}</span>-->
<!--                            </div>-->
<!--                            <i class="lg:hidden pi pi-chevron-down"></i>-->
<!--                            <i class="hidden lg:block pi pi-chevron-right"></i>-->
<!--                            </li>-->
<!--                        </ul>-->

<!--                        &lt;!&ndash; start desktop category &ndash;&gt;-->
<!--                        <div v-if="isCategoryOpen" class="hidden w-full lg:flex flex-col ml-[3rem] mb-[3rem]">-->
<!--                            <button class="flex items-center text-xl h-[4rem] hover:text-main_color">-->
<!--                                <span class="font-semibold">{{selectedCatalog.label}}</span>-->
<!--                                <i class="pi pi-chevron-right text-lg ml-3"></i>-->
<!--                            </button>-->

<!--                            <ul class="flex flex-wrap mt-8">-->
<!--                                <li-->
<!--                                    v-for="(category, index) in selectedCatalog.items"-->
<!--                                    :key="index"-->
<!--                                    class="cursor-pointer whitespace-nowrap w-[50%] xl:w-[33%]"-->
<!--                                >-->
<!--                                    <span class="text-md font-semibold">{{category.label}}</span>-->
<!--                                    <ul class="mt-4">-->
<!--                                        <li-->
<!--                                            v-for="(item, index) in category.items"-->
<!--                                            :key="index"-->
<!--                                            class="text-sm hover:text-main_color cursor-pointer"-->
<!--                                        >-->
<!--                                        {{item.label}}-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; end desktop category &ndash;&gt;-->

<!--                        &lt;!&ndash; start mobile category &ndash;&gt;-->
<!--                        <div v-if="isCategoryOpen" class="absolute lg:hidden shadow-md left-0 px-[1rem] top-0 bg-white h-fit w-full">-->
<!--                            <button @click="backAllCatalog" class="flex items-center text-sm h-[4rem]">-->
<!--                                <i class="pi pi-chevron-left text-lg mr-3"></i>-->
<!--                                <span class="font-medium">Все категории</span>-->
<!--                            </button>-->

<!--                            <div class=" text-sm font-medium h-[4rem] flex items-center">-->
<!--                                <div @click="backCategory" class="flex items-center">-->
<!--                                    <i class="text-xl mr-3" :class="isCategoryItemsOpen ? 'pi pi-chevron-left' : 'pi pi-apple'"></i>-->
<!--                                    <span class="pr-8 font-semibold">{{selectedCatalog.label}}</span>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div v-if="!isCategoryItemsOpen" class="text-sm pl-11 h-[4rem] flex items-center">-->
<!--                                <span class="font-semibold whitespace-nowrap">Все товары категории </span>-->
<!--                            </div>-->

<!--                            <ul v-if="!isCategoryItemsOpen">-->
<!--                                <li-->
<!--                                    v-for="category in selectedCatalog.items"-->
<!--                                    :key="category.label"-->
<!--                                    @click="openCategoryItem(category.label)"-->
<!--                                    class="text-sm pl-11 h-[4rem] flex items-center justify-between"-->
<!--                                >-->
<!--                                    <span class="font-medium whitespace-nowrap">{{category.label}}</span>-->
<!--                                    <i class="pi pi-chevron-down"></i>-->
<!--                                </li>-->
<!--                            </ul>-->

<!--                            &lt;!&ndash; start mobile category items &ndash;&gt;-->
<!--                            <ul v-else>-->
<!--                                <li class="text-sm pl-11 h-[4rem] flex items-center cursor-pointer">-->
<!--                                    <span class="font-semibold text-main_color whitespace-nowrap">{{selectedCategory.label}}</span>-->
<!--                                </li>-->
<!--                                <li class="text-sm pl-11 h-[4rem] flex items-center cursor-pointer">-->
<!--                                    <span class="font-semibold whitespace-nowrap">Все товары категории </span>-->
<!--                                </li>-->
<!--                                <li-->
<!--                                    v-for="category in selectedCategory.items"-->
<!--                                    :key="category.label"-->
<!--                                    class="text-sm pl-11 h-[4rem] flex items-center justify-between cursor-pointer"-->
<!--                                >-->
<!--                                    <span class="font-medium whitespace-nowrap">{{category.label}}</span>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                            &lt;!&ndash; end mobile category items &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; end mobile category &ndash;&gt;-->
<!--                    </div>-->
<!--                </div>-->
                <!-- end Catalog -->
            </div>
        </div>

<!--        &lt;!&ndash;start Mobile navbar&ndash;&gt;-->
<!--        <ul class="lg:hidden border-t-[0.5px] bg-white border-gray_light pt-3 fixed bottom-0 flex w-full justify-around">-->
<!--            <li @click="openCatalog" class="cursor-pointer flex flex-col text-[2.7vw] min-[578px]:text-md text-gray_medium px-1 items-center">-->
<!--                <i class="pi pi-align-justify text-xl min-[578px]:text-2xl text-gray_medium"></i>-->
<!--                <span>Каталог</span>-->
<!--            </li>-->
<!--            <li -->
<!--                v-for="navbarItem in navbarItems"-->
<!--                :key="navbarItem.name"-->
<!--                class="flex flex-col relative min-w-[6rem] text-[2.7vw] min-[578px]:text-md text-gray_medium px-1 items-center"-->
<!--            >-->
<!--            <i :class="navbarItem.icon" class="text-xl min-[578px]:text-2xl text-gray_medium"></i>-->
<!--            <span>{{navbarItem.label}}</span>-->
<!--            <div v-if="navbarItem.isCart" class="absolute text-white bg-main_color rounded-full text-[0.8rem] min-[578px]:text-xs p-0.5 min-w-6 min-[578px]:min-w-8 right-4 min-[578px]:right-2 -top-2 flex items-center justify-center ">2</div>-->
<!--            </li>-->
<!--        </ul>-->
<!--        &lt;!&ndash;end Mobile navbar&ndash;&gt;-->
    </section>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router"

const router = useRouter()
const mobileMenu = ref(null)
const isMenuOpen = ref(false)
// const isNestedMenuOpen = ref(false)
const isCategoryOpen = ref(false)
// const isCategoryItemsOpen = ref(false)
const isWindowScrolled = ref(false)
const isScrollToBottom = ref(false)
const scrollValue = ref(0)
const selectedCatalog = ref(null)
// const selectedCategory = ref(null)
// const nestedMenuHeaderRef = ref(null)
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
    {label: 'Войти', icon: 'pi pi-user', url: '/sign-in', isLogin: true},
    {label: 'Заказы', icon: 'pi pi-shopping-bag', url: '#'},
    {label: 'Избранное', icon: 'pi pi-heart', url: '/favorites'},
    {label: 'Корзина', icon: 'pi pi-shopping-cart', isCart: true, url: '/cart'},
])
const oneNestedItem = ref({})
const twoNestedItem = ref({})


const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    oneNestedItem.value.isOpen = false
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}
const openCategory = (catalogId) => {
    menuItems.value.forEach(c => {
        if(c.id === catalogId) {
            selectedCatalog.value = c
        }
    })
    isCategoryOpen.value = true
}
// const openCategoryItem = (categoryLabel) => {
//     selectedCatalog.value.items.forEach(item => {
//         if(item.label === categoryLabel) {
//             selectedCategory.value = item
//         }
//     })
//     isCategoryItemsOpen.value = true
// }
// const backCategory = () => {
//     isCategoryItemsOpen.value = false
//     selectedCategory.value = null
// }
// const backAllCatalog = () => {
//     isCategoryOpen.value = false
//     isCategoryItemsOpen.value = false
//     selectedCategory.value = null
// }

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
}
const backToMenu = (index) => {
    oneNestedItem.value.items[index].isOpen = false
    mobileMenu.value.style.overflow = 'auto'
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // selectAddress.value.forEach(address => {
    //     if(address.isSelected) {
    //         selectedAddress.value = address.value
    //     }
    // })
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

.headerMenu-enter-active,
.headerMenu-leave-active{
    transition: opacity 0.2s ease-in;
}

.headerMenu-enter-from,
.headerMenu-leave-to{
    opacity: 0;
}
.mobileMenu-enter-active,
.mobileMenu-leave-active,
.nestedMenu-leave-active {
    transition: all 0.3s ease;
}
.mobileMenu-enter-from,
.mobileMenu-leave-to,
.nestedMenu-leave-to {
    transform: translateX(-100%);
}
</style>