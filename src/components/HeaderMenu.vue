<template>
    <section class="relative z-50">
        <div class="container">
            <div class="lg:py-5">

                <!--start Desktop navbar-->
                <div class="py-5 flex items-center justify-between gap-3">
                    <span class="hidden lg:block flex-none"><img src="../assets/promall 1.svg" alt="Logo"></span>
                    <button @click="openCatalog" class="text-white bg-main_color py-3 px-6 rounded-full hidden lg:flex items-center">
                        <i class="pi pi-align-justify text-base p-2"></i>
                        <span class="text-md font-medium">Каталог</span>
                    </button>
                    <span class="relative w-full">
                        <i class="pi pi-search text-xl absolute top-1/2 -translate-y-1/2 right-2 bg-main_color text-white rounded-full p-2.5" />
                        <input type="text" placeholder="Поиск" class="p-3 w-full px-5 border-2 outline-none focus:border-main_color border-main_color text-base rounded-full">
                    </span>
                    <ul class="hidden lg:flex max-w-[26.5rem] w-full justify-evenly relative">
                        <li 
                            v-for="navbarItem in navbarItems"
                            :key="navbarItem.name"
                            class="flex flex-col text-sm px-1 items-center"
                        >
                        <i :class="navbarItem.icon" class="text-base"></i>
                        <span>{{navbarItem.label}}</span>
                        </li>
                        <div class="absolute text-white bg-main_color rounded-full p-0.5 min-w-8 right-6 -top-4 flex items-center justify-center ">2</div>
                    </ul>
                </div>
                <!--end Desktop navbar-->

                <!--start Under Navbar catalog-->
                <div class="hidden lg:flex items-center justify-between ">
                    <ul class="flex items-center gap-4 overflow-hidden justify-between flex-wrap h-[3.7rem]">
                        <li
                           v-for="(catalog, index) in catalogItems"
                           :key="index" 
                           class="text-md after:content-[''] overflow-hidden after:backface-invisible after:left-0 after:opacity-0 hover:after:translate-x-0 hover:after:opacity-100 after:transition-all after:ease-in after:duration-[0.5s] after:absolute relative after:-translate-x-full after:bottom-0 after:h-[2px] after:w-full after:bg-main_color cursor-pointer px-2 py-3 whitespace-nowrap"
                        >{{catalog.label}}</li>
                    </ul>

                    <button @click="openCatalog" class=" flex px-2 py-3 mx-3 items-center">
                        <span class="text-md">Ещё</span>
                        <i class="pi pi-chevron-down px-2"></i>
                    </button>

                    <button class="border text-sm px-2 py-3 flex items-center rounded-2xl bg-gray_lightest border-gray_light">
                        <span class="whitespace-nowrap">Ташкент, Афросийоб 156</span>
                        <i class="pi pi-chevron-down text-main_color px-2"></i>
                    </button>
                </div>
                <!--end Under Navbar catalog-->

                <!-- start Catalog -->
                <div v-if="isCatalogOpen" class="absolute top-[8rem] bg-white lg:shadow-xl left-0 px-[1rem] w-full h-fit">
                    <div class="container lg:flex">
                        <ul class="lg:w-fit lg:border-r lg:pr-4">
                            <li
                                v-for="catalogItem in catalogItems"
                                :key="catalogItem.id"
                                @mouseenter="openCategory(catalogItem.id)"
                                @click="openCategory(catalogItem.id)"
                                class="hover:text-main_color lg:border-b-0 border-gray_light whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer text-sm font-medium h-[4rem] flex justify-between items-center"
                                :class="catalogItem.label === catalogItems[catalogItems.length - 1].label ? 'border-b-0' : 'border-b-[0.5px]'"
                            >
                            <div class="flex items-center">
                                <i :class="catalogItem.icon" class="text-xl mr-3"></i>
                                <span class="pr-8">{{ catalogItem.label }}</span>
                            </div>
                            <i class="lg:hidden pi pi-chevron-down"></i>
                            <i class="hidden lg:block pi pi-chevron-right"></i>
                            </li>
                        </ul>

                        <!-- start desktop category -->
                        <div v-if="isCategoryOpen" class="hidden w-full lg:flex flex-col ml-[3rem] mb-[3rem]">
                            <button class="flex items-center text-xl h-[4rem] hover:text-main_color">
                                <span class="font-semibold">{{selectedCatalog.label}}</span>
                                <i class="pi pi-chevron-right text-lg ml-3"></i>
                            </button>
                            
                            <ul class="flex flex-wrap mt-8">
                                <li
                                    v-for="(category, index) in selectedCatalog.items"
                                    :key="index"
                                    class="cursor-pointer whitespace-nowrap w-[50%] xl:w-[33%]"
                                >
                                    <span class="text-md font-semibold">{{category.label}}</span>
                                    <ul class="mt-4">
                                        <li
                                            v-for="(item, index) in category.items"
                                            :key="index"
                                            class="text-sm hover:text-main_color cursor-pointer"
                                        >
                                        {{item.label}}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- end desktop category -->

                        <!-- start mobile category -->
                        <div v-if="isCategoryOpen" class="absolute lg:hidden shadow-md left-0 px-[1rem] top-0 bg-white h-fit w-full">
                            <button @click="backAllCatalog" class="flex items-center text-sm h-[4rem]">
                                <i class="pi pi-chevron-left text-lg mr-3"></i>
                                <span class="font-medium">Все категории</span>
                            </button>

                            <div class=" text-sm font-medium h-[4rem] flex items-center">
                                <div @click="backCategory" class="flex items-center">
                                    <i class="text-xl mr-3" :class="isCategoryItemsOpen ? 'pi pi-chevron-left' : 'pi pi-apple'"></i>
                                    <span class="pr-8 font-semibold">{{selectedCatalog.label}}</span>
                                </div>
                            </div>

                            <li v-if="!isCategoryItemsOpen" class="text-sm pl-11 h-[4rem] flex items-center">
                                <span class="font-semibold whitespace-nowrap">Все товары категории </span>
                            </li>

                            <ul v-if="!isCategoryItemsOpen">
                                <li
                                    v-for="category in selectedCatalog.items"
                                    :key="category.label"
                                    @click="openCategoryItem(category.label)"
                                    class="text-sm pl-11 h-[4rem] flex items-center justify-between"
                                >
                                    <span class="font-medium whitespace-nowrap">{{category.label}}</span>
                                    <i class="pi pi-chevron-down"></i>
                                </li>
                            </ul>

                            <!-- start mobile category items -->
                            <ul v-else>
                                <li class="text-sm pl-11 h-[4rem] flex items-center cursor-pointer">
                                    <span class="font-semibold text-main_color whitespace-nowrap">{{selectedCategory.label}}</span>
                                </li>
                                <li class="text-sm pl-11 h-[4rem] flex items-center cursor-pointer">
                                    <span class="font-semibold whitespace-nowrap">Все товары категории </span>
                                </li>
                                <li
                                    v-for="category in selectedCategory.items"
                                    :key="category.label"
                                    class="text-sm pl-11 h-[4rem] flex items-center justify-between cursor-pointer"
                                >
                                    <span class="font-medium whitespace-nowrap">{{category.label}}</span>
                                </li>
                            </ul>
                            <!-- end mobile category items -->
                        </div>
                        <!-- end mobile category -->
                    </div>
                </div>
                <!-- end Catalog -->
            </div>
        </div>

        <!--start Mobile navbar-->
        <ul class="lg:hidden border-t-[0.5px] bg-white border-gray_light pt-3 fixed bottom-0 flex w-full justify-around">
            <li @click="openCatalog" class="cursor-pointer flex flex-col text-[2.7vw] min-[578px]:text-md text-gray_medium px-1 items-center">
                <i class="pi pi-align-justify text-xl min-[578px]:text-2xl text-gray_medium"></i>
                <span>Каталог</span>
            </li>
            <li 
                v-for="navbarItem in navbarItems"
                :key="navbarItem.name"
                class="flex flex-col relative min-w-[6rem] text-[2.7vw] min-[578px]:text-md text-gray_medium px-1 items-center"
            >
            <i :class="navbarItem.icon" class="text-xl min-[578px]:text-2xl text-gray_medium"></i>
            <span>{{navbarItem.label}}</span>
            <div v-if="navbarItem.isCart" class="absolute text-white bg-main_color rounded-full text-[0.8rem] min-[578px]:text-xs p-0.5 min-w-6 min-[578px]:min-w-8 right-4 min-[578px]:right-2 -top-2 flex items-center justify-center ">2</div>
            </li>
        </ul>
        <!--end Mobile navbar-->
    </section>
</template>

<script setup>
import { ref } from "vue";

const isCatalogOpen = ref(false)
const isCategoryOpen = ref(false)
const isCategoryItemsOpen = ref(false)
const selectedCatalog = ref(null)
const selectedCategory = ref(null)
const navbarItems = ref([
    {label: 'Войти', icon: 'pi pi-user'},
    {label: 'Заказы', icon: 'pi pi-shopping-bag'},
    {label: 'Избранное', icon: 'pi pi-heart'},
    {label: 'Корзина', icon: 'pi pi-shopping-cart', isCart: true},
])
const catalogItems = ref([
    {
        id: 1,
        label: 'Электроника', 
        icon: 'pi pi-apple', 
        items: [
            {label: 'Смартфоны и телефоны', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}]},
            {label: 'Ноутбуки, планшеты и электронные книги', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Умные часы и фитнес браслеты', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Наушники и аудиотехника', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Часы и электронные будильники', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Телевизоры и видеотехника', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Игровые приставки', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Ноутбуки, планшеты и электронные книги', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Оптические приборы', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
        ]
    },
    {
        id: 2,
        label: 'Бытовая техника', 
        icon: 'pi pi-car',
        items: [
            {label: 'Техника для красоты', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}]},
            {label: 'Крупная бытовая техника', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Умные часы и фитнес браслеты', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Наушники и аудиотехника', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Часы и электронные будильники', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Телевизоры и видеотехника', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Игровые приставки', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Ноутбуки, планшеты и электронные книги', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Оптические приборы', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
        ]
    },
    {
        id: 3,
        label: 'Одежда', 
        icon: 'pi pi-camera',
        items: [
            {label: 'Мужская одежда', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}]},
            {label: 'Женская одежда', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
            {label: 'Детская одежда', items: [{label: 'Аксессуары для смартфонов'}, {label: 'Смартфоны'}, {label: 'Кнопочные телефоны'}, {label: 'Электронные книги'}]},
        ]
    },
    {id: 4, label: 'Обувь', icon: 'pi pi-box'},
    {id: 5, label: 'Аксессуары', icon: 'pi pi-box'},
    {id: 6, label: 'Красота и уход', icon: 'pi pi-apple'},
    {id: 7, label: 'Здоровье', icon: 'pi pi-box'},
    {id: 8, label: 'Товары для дома', icon: 'pi pi-apple'},
    {id: 9, label: 'Строительство и ремонт', icon: 'pi pi-box'},
    {id: 10, label: 'Автотовары', icon: 'pi pi-box'},
    {id: 11, label: 'Детские товары', icon: 'pi pi-box'},
    {id: 12, label: 'Хобби и творчество', icon: 'pi pi-apple'},
])

const openCatalog = () => {
    isCatalogOpen.value = !isCatalogOpen.value
    openCategory(1)
}
const openCategory = (catalogId) => {
    catalogItems.value.forEach(c => {
        if(c.id === catalogId) {
            selectedCatalog.value = c
        }
    })
    isCategoryOpen.value = true
}
const openCategoryItem = (categoryLabel) => {
    selectedCatalog.value.items.forEach(item => {
        if(item.label === categoryLabel) {
            selectedCategory.value = item
        }
    })
    isCategoryItemsOpen.value = true
}
const backCategory = () => {
    isCategoryItemsOpen.value = false
    selectedCategory.value = null
}
const backAllCatalog = () => {
    isCategoryOpen.value = false
    isCategoryItemsOpen.value = false
    selectedCategory.value = null
}
const test = () => {
    console.log('mouse')
}
</script>

<style scoped>
.backface-invisible {
    backface-visibility: hidden;
}
</style>