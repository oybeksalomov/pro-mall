<template>
    <section class="fixed top-0 bg-white left-0 w-full z-50">
        <div class="">
            <div class="relative">
                <!--start Desktop navbar-->
                <div
                    class="absolute container lg:hidden w-full bg-white top-0 left-0 z-30 transition-transform delay-75 duration-300"
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
                    :class="[{'border-b border-gray_lightest lg:border-none': isWindowScrolled && isScrollToBottom}, {'lg:shadow-md': isWindowScrolled}]"
                >
                    <div class="container flex items-center lg:justify-between gap-3">
                        <button class="text-gray_icon lg:hidden mr-2">
                            <i class="pi pi-align-justify text-xl"></i>
                        </button>
                        <router-link to="/" class="w-[10rem] lg:w-fit lg: flex-none"><img src="../assets/promall 1.svg" alt="Logo"></router-link>
                        <button @click="openCatalog" class="text-white font-semibold bg-main_color py-3 px-6 rounded-full hidden lg:flex items-center">
                            <i v-if="!isCatalogOpen" class="pi pi-align-justify text-base p-2"></i>
                            <i v-else class="pi pi-times text-base p-2"></i>
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
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router"

const router = useRouter()
const isCatalogOpen = ref(false)
const isCategoryOpen = ref(false)
const isCategoryItemsOpen = ref(false)
const isWindowScrolled = ref(false)
const isScrollToBottom = ref(false)
const scrollValue = ref(0)
const selectedCatalog = ref(null)
const selectedCategory = ref(null)
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
const navbarItems = ref([
    {label: 'Войти', icon: 'pi pi-user', url: '/sign-in', isLogin: true},
    {label: 'Заказы', icon: 'pi pi-shopping-bag', url: '#'},
    {label: 'Избранное', icon: 'pi pi-heart', url: '/favorites'},
    {label: 'Корзина', icon: 'pi pi-shopping-cart', isCart: true, url: '/cart'},
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

const handleScroll = () => {
    isWindowScrolled.value = window.scrollY > 0;
    scrollValue.value = window.scrollY
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

</style>