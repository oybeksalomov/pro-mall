<template>
    <HeaderMenu />
    <UnderNavbarMenu class="hidden xl:block"/>

    <div class="mt-[13.1rem] xl:mt-[3rem]">
        <div class="lg:container">
            <ul class="flex gap-4 flex-row-reverse px-4 lg:px-0">
                <li
                    v-for="(btn, index) in topButtons"
                    :key="index"
                    class="text-gray_text cursor-pointer flex items-center"
                >
                    <i class="pi text-lg mr-2" :class="btn.icon"></i>
                    <div class="text-md hidden lg:block">{{btn.label}}</div>
                </li>
            </ul>
            <div class="grid grid-cols-12 gap-x-8 mt-8">
                <!--         start   mobile image carousel-->
                <div class="xl:hidden relative  col-span-full">
                    <div ref="imagesRef" @scroll="scrollImg" class="flex flex-nowrap imagesContainer snap-x snap-mandatory overflow-auto w-fit h-[36rem]">
                        <div
                            v-for="(image, index) in images"
                            :key="index"
                            class="flex-none snap-start bg-gray_lightest w-full h-full"
                        >
                            <img class="h-full mx-auto object-center object-contain" :src="image.img" alt="Item Photo">
                        </div>
                        <BackTo class="absolute top-6 left-6" is-circle />
                    </div>

                    <div class="flex justify-center py-6">
                        <div class="flex gap-[0.4rem]">
                            <div
                                v-for="(image, index) in images"
                                :key="index"
                                class="bg-gray_light transition-colors w-[0.6rem] h-[0.6rem] rounded-full"
                                :class="{'bg-main_color': index === activeImage}"
                            ></div>
                        </div>
                    </div>
                </div>
                <!--         end   mobile image carousel-->

                <!--         start   desktop image carousel-->
                <div class="hidden xl:block xl:row-span-full col-span-4">
                    <div>
                        <img class="w-full h-full object-contain rounded-[2.5rem]" :src="images[selectedImage].img" alt="Item Photo">
                    </div>
                    <div class="relative">
                        <div ref="desktopImagesRef" class="flex snap-x snap-mandatory desktopImagesContainer gap-4 w-full mt-4 overflow-x-auto">
                            <div
                                @click="selectImage(index)"
                                v-for="(image, index) in images"
                                :key="index"
                                class="flex-none snap-start bg-gray_lightest rounded-lg w-[5.6rem] h-[5.6rem]"
                                :class="{'border border-gray_light': index === selectedImage}"
                            >
                                <img class="flex-1 m-auto h-full rounded-lg object-contain" :src="image.img" alt="Item Photo">
                            </div>
                            <button v-if="isScrollable" @click="moveImages('right')" class="absolute top-1/2 -translate-y-1/2 right-2 hover:bg-opacity-50 flex items-center justify-center hover:bg-gray_lightest rounded-full w-10 h-10"><i class="pi pi-chevron-right text-base text-gray_icon"></i></button>
                            <button v-if="isScrollable" @click="moveImages('left')" class="absolute top-1/2 -translate-y-1/2 left-2 hover:bg-opacity-50 flex items-center justify-center hover:bg-gray_lightest rounded-full w-10 h-10"><i class="pi pi-chevron-left text-base text-gray_icon"></i></button>
                        </div>
                    </div>

                </div>
                <!--         end   desktop image carousel-->

                <div class="col-span-full xl:col-span-4 xl:row-start-1 mt-8 xl:mt-0">
                    <div class="px-[1rem] max-w-[1024px] lg:px-0 lg:max-w-full">
                        <div>
                            <div class="text-lg font-semibold">Under Armour</div>
                            <div class="text-base mt-3">Спортивные кроссовки унисекс Under Armour 77-3025430 белые 8 US </div>
                        </div>

                        <div class="flex mt-3">
                            <div class="flex items-center">
                                <svg class="w-[1.6rem] h-[1.6rem]" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.15199 12.0553L13.1899 15L11.853 9.45L16.304 5.71579L10.4427 5.23421L8.15199 0L5.86128 5.23421L0 5.71579L4.45098 9.45L3.11406 15L8.15199 12.0553Z" fill="#FF9017"/>
                                </svg>
                                <span class="text-md font-bold ml-2">4.8</span>
                            </div>
                            <div class="text-md text-gray_text ml-4">14 отзывы</div>
                            <div class="text-md text-gray_text ml-4">152 продана</div>
                        </div>

                        <div class="mt-6">
                            <div class="text-md font-medium">Цвет товара: <span class="font-semibold">{{colors[colorIndex].color}}</span></div>
                            <div class="flex gap-4 mt-4" >
                                <button
                                    @click="selectColor(index)"
                                    v-for="(color, index) in colors"
                                    :key="index"
                                    class="w-[5.6rem] h-[5.6rem] bg-gray_lightest rounded-lg border"
                                    :class="color.isSelected ? 'border-main_color' : 'border-gray_light'"
                                >
                                    <img class="flex-1 m-auto h-full rounded-lg object-contain" :src="color.img" alt="color">
                                </button>
                            </div>
                        </div>

                        <div class="max-w-[1024px] lg:px-0 lg:max-w-full mt-8">
                            <div class="text-md font-medium">Коротко о товаре</div>
                            <div class="flex text-md mt-4">
                                <div class="text-gray_text">Материал верха:</div>
                                <div class="ml-4">текстиль</div>
                            </div>
                            <div class="flex text-md ">
                                <div class="text-gray_text">Длина стельки, см:</div>
                                <div class="ml-4">23.5</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-full xl:col-span-4 xl:row-span-full mt-8 xl:mt-0 flex flex-col gap-4">
                    <div class="px-[1rem] max-w-[1024px] lg:px-0 lg:max-w-full">
                        <div class="p-[1.6rem] rounded-[2.4rem] bg-red100">
                            <div class="flex items-start">
                                <div class="text-4xl font-semibold flex flex-col text-main_color">
                                    <span>449 000 сум</span>
                                    <span class="text-base text-gray_text line-through">659 000 сум</span>
                                </div>
                                <div class="ml-auto px-4 py-4 rounded-lg rounded-tr-[2.4rem] bg-main_color text-white font-semibold text-md flex items-center justify-center leading-none">-15%</div>
                            </div>

                            <div class="flex text-md mt-4">
                                <div class="font-medium leading-none text-gray_text mr-2">КешБек:</div>
                                <div class="flex-1 border-b-2 border-dotted border-gray_light mx-1"></div>
                                <div class="ml-auto leading-none whitespace-nowrap font-medium">56 000 сум</div>
                            </div>
                            <div class="flex text-md mt-4">
                                <div class="font-medium leading-none whitespace-nowrap text-gray_text mr-2">Доставка по клику:</div>
                                <div class=" leading-none whitespace-nowrap text-ellipsis overflow-hidden font-medium">с 3 марта</div>
                                <div class="flex-1 border-b-2 border-dotted border-gray_light mx-1"></div>
                                <div class="ml-auto leading-none whitespace-nowrap font-medium"> 18 000 сум</div>
                            </div>
                            <div class="flex text-md mt-4">
                                <div class="font-medium leading-none whitespace-nowrap text-gray_text mr-2">Пункты выдачи:</div>
                                <div class=" leading-none whitespace-nowrap text-ellipsis overflow-hidden font-medium">с 3 марта</div>
                                <div class="flex-1 border-b-2 border-dotted border-gray_light mx-1"></div>
                                <div class="ml-auto leading-none whitespace-nowrap font-medium">0 сум</div>
                            </div>
                            <div class="flex text-md mt-4">
                                <div class="font-medium leading-none text-gray_text mr-2">Oплата:</div>
                                <div class="flex-1 border-b-2 border-dotted border-gray_light mx-1"></div>
                                <div class="ml-auto leading-none font-medium">наличными / онлайн.</div>
                            </div>
                            <button class="w-full mt-6 h-fit bg-main_color text-white text-base font-bold px-12 py-3 rounded-full">Купить</button>
                            <div class="flex text-md mt-4">
                                <div class="font-medium leading-none text-gray_text mr-2">Продавец:</div>
                                <div class="flex-1 border-b-2 border-dotted border-gray_light mx-1"></div>
                                <router-link to="#" class="ml-auto leading-none font-medium text-main_color">OOO “BIG SHOP NAME”</router-link>
                            </div>
                        </div>

                        <div class="p-[1.6rem] rounded-[2.4rem] mt-6 bg-red100">
                            <div class="font-medium text-md">Доступно для приобретения в рассрочку.</div>
                            <div class="flex gap-4 mt-4">
                                <div class="flex-1">
                                    <div class="text-md">Срок рассрочки (мес.) </div>
                                    <div class="flex rounded-full bg-white w-fit mt-2">
                                        <button
                                            v-for="(month, index) in creditMonths"
                                            :key="index"
                                            class="text-md px-6 py-4"
                                            :class="{'rounded-full bg-main_color px-8 text-white': month.isSelected}"
                                        >{{month.length}}</button>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-md">Ежемесячный платеж:</div>
                                    <div class="flex mt-2 rounded-full bg-white p-4 text-md font-medium w-fit">33 000 сум</div>
                                </div>
                            </div>

                            <div class="flex justify-between items-end mt-6">
                                <i class="pi pi-question-circle text-xl text-gray_text"></i>
                                <button class="w-fit h-fit bg-main_color text-white text-base font-bold px-12 py-3 rounded-full">Оформить в рассрочку</button>
                            </div>
                        </div>

                        <div class="mt-6 text-base text-main_color text-center">Еще 27 предложений от 18 400 000 сум</div>

                        <div class="flex flex-col gap-4 p-[1.6rem] rounded-[2.4rem] mt-6 bg-red100">
                            <div class="border-b border-main_color pb-4">
                                <div class="flex items-center justify-between">
                                    <div class="text-2xl font-medium">439 000 сум</div>
                                    <div class="bg-main_color text-sm rounded-full px-4 py-3 text-white font-semibold">-15%</div>
                                    <div class="text-sm line-through font-medium text-gray_text">500 000 сум</div>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex flex-col gap-2">
                                        <div class="text-md text-gray_text">Доставка: <span class="text-black">24 декабрь</span></div>
                                        <div class="text-md text-gray_text">Забрать в магазине: <span class="text-black">24 декабрь</span></div>
                                        <div class="text-md text-gray_text">Форма оплаты: <span class="text-black">наличными / онлайн.</span></div>
                                        <div class="text-md text-gray_text">Продавец: <span class="text-main_color">OOO “BIG SHOP NAME”</span></div>
                                    </div>
                                    <button class="bg-main_color rounded-[1.4rem] p-4 h-fit">
                                        <i class="pi pi-shopping-cart text-white text-[3.2rem]"></i>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <div class="text-2xl font-medium">439 000 сум</div>
                                    <div class="bg-main_color text-sm rounded-full px-4 py-3 text-white font-semibold">-15%</div>
                                    <div class="text-sm line-through font-medium text-gray_text">500 000 сум</div>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex flex-col gap-2">
                                        <div class="text-md text-gray_text">Доставка: <span class="text-black">24 декабрь</span></div>
                                        <div class="text-md text-gray_text">Забрать в магазине: <span class="text-black">24 декабрь</span></div>
                                        <div class="text-md text-gray_text">Форма оплаты: <span class="text-black">наличными / онлайн.</span></div>
                                        <div class="text-md text-gray_text">Продавец: <span class="text-main_color">OOO “BIG SHOP NAME”</span></div>
                                    </div>
                                    <button class="bg-main_color rounded-[1.4rem] p-4 h-fit">
                                        <i class="pi pi-shopping-cart text-white text-[3.2rem]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button class=" text-base w-full text-main_color gap-4 p-[1.6rem] rounded-[2.4rem] mt-6 bg-red100">Смотреть все</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-8 xl:micon">
        <div class="container">
            <!-- start mobile full info about item-->
            <ul class="xl:hidden">
                <li @click="isDescriptionOpen = !isDescriptionOpen" class="cursor-pointer">
                   <div class="py-3 flex justify-between items-center">
                       <div class="text-3xl font-bold">Описание</div>
                       <i :class="isDescriptionOpen ? 'pi-chevron-up' : 'pi-chevron-down'" class="pi text-gray_icon text-base"></i>
                   </div>

                   <div v-if="isDescriptionOpen" class="text-md py-3 mb-8">Легкие и гибкие. Много сетки для максимальной воздухопроницаемости. Charged Cushioning для превосходной амортизации и защиты от ударов.</div>
                </li>
                <li @click="isPriceOpen = !isPriceOpen" class="cursor-pointer">
                    <div class="py-3 flex justify-between items-center">
                        <div class="text-3xl font-bold">Цены {{availableShops.length}}</div>
                        <i :class="isPriceOpen ? 'pi-chevron-up' : 'pi-chevron-down'" class="pi text-gray_icon text-base"></i>
                    </div>

                    <div v-if="isPriceOpen" class="py-3 text-lg">
                        <ItemInfoPrices
                            v-for="(shop, index) in availableShops"
                            :key="index"
                            :shop="shop"
                            class="mt-6"
                        />
                    </div>
                </li>
                <li @click="isCharacteristicsOpen = !isCharacteristicsOpen" class="cursor-pointer">
                    <div class="py-3 flex justify-between items-center">
                        <div class="text-3xl font-bold">Характеристики</div>
                        <i :class="isCharacteristicsOpen ? 'pi-chevron-up' : 'pi-chevron-down'" class="pi text-gray_icon text-base"></i>
                    </div>

                    <div v-if="isCharacteristicsOpen" class="py-3 mb-8">
                        <ItemCharacteristicsList
                            v-for="(characteristic, index) in characteristics"
                            :key="index"
                            :characteristic="characteristic"
                        />
                    </div>
                </li>
                <li @click="isReviewsOpen = !isReviewsOpen" class="cursor-pointer">
                    <div class="py-3 flex justify-between items-center">
                        <div class="text-3xl font-bold">Отзывы</div>
                        <i :class="isReviewsOpen ? 'pi-chevron-up' : 'pi-chevron-down'" class="pi text-gray_icon text-base"></i>
                    </div>

                    <div v-if="isReviewsOpen" class="py-3 text-lg">
                        Komentariyalar...
                    </div>
                </li>
            </ul>
            <!--end mobile full info about item-->

            <!--start desktop full info item-->
            <div class="hidden xl:block">
                <div class="rounded-[2rem] desktopFullInfo p-6">
                    <div class="flex">
                        <template
                            v-for="(infoItem, index) in infoList"
                            :key="index"
                            class="cursor-pointer"
                        >
                            <div
                                class="text-base text-gray_icon cursor-pointer px-10 font-semibold"
                                :class="{'text-main_color': infoItem.isOpen}"
                                @click="selectInfo(index)"
                            >{{infoItem.label}} {{infoItem.label === 'Цены' ? availableShops.length : ''}}</div>
                            <hr v-if="(infoList.length - 1) !== index" class="border-r border-gray_icon h-[2.4rem]">
                        </template>
                    </div>
                </div>

                <div class="rounded-[2rem] mt-12 border-[0.5px] border-gray_lightest p-8">
                    <div v-if="infoList[0].isOpen || infoList[3].isOpen">
                        <div class="text-3xl font-bold">Популярные отзывы</div>
                        <div class="text-md py-3 mb-8">Komentariyalar...</div>
                    </div>
                    <div v-if="infoList[0].isOpen">
                        <div class="text-3xl font-bold">Описание</div>
                        <div class="text-md py-3 mb-8">Легкие и гибкие. Много сетки для максимальной воздухопроницаемости. Charged Cushioning для превосходной амортизации и защиты от ударов.</div>
                    </div>
                    <div v-if="infoList[1].isOpen">
                        <div class="text-3xl mb-8 font-bold">Цены</div>
                        <ItemInfoPrices
                            v-for="(shop, index) in availableShops"
                            :key="index"
                            :shop="shop"
                            :class="{'xl:border-b': availableShops.length-1 !== index}"
                        />
                    </div>
                    <div v-if="infoList[0].isOpen || infoList[2].isOpen">
                        <div class="text-3xl font-bold">Характеристики</div>
                        <div class="py-3 grid grid-cols-2 gap-x-[6rem]">
                            <ItemCharacteristicsList
                                v-for="(characteristic, index) in characteristics"
                                :key="index"
                                :characteristic="characteristic"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!--start desktop full info item-->

        </div>
    </div>

    <SubscribeRow />
    <FooterRow />
</template>

<script setup>
import HeaderMenu from "../components/HeaderMenu.vue";
import FooterRow from "../components/FooterRow.vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
import SubscribeRow from "../components/SubscribeRow.vue";
import {onMounted, ref} from "vue";
import image1 from "../assets/sneakers.webp"
import image2 from "../assets/100058651944b2.webp"
import image3 from "../assets/100058651944b1.webp"
import ItemCharacteristicsList from "../components/ItemCharacteristicsList.vue";
import ItemInfoPrices from "../components/ItemInfoPrices.vue";
import BackTo from "../components/BackTo.vue";

const images = ref([{img: image1}, {img: image2}, {img: image3}, ])
const imagesRef = ref(null)
const activeImage = ref(0)
const desktopImagesRef = ref(null)
const isScrollable = ref(false)
const selectedImage = ref(0)
const characteristics = ref([
        {
            label: 'Заводские данные о товаре',
            items: [
                {label: 'Бренд', info: 'Under Armour'},
                {label: 'Артикул производителя', info: '77-3025430'},
                {label: 'Серия', info: '22'},
                {label: 'Модель', info: 'UA W Charged Pursuit 3 Tech'},
                {label: 'Код товара', info: '100058651941'}
            ]
        },
        {
            label: 'Основные характеристики',
            items: [
                {label: 'Страна-производитель', info: 'Вьетнам'},
                {label: 'Артикул производителя', info: '77-3025430'},
                {label: 'Серия', info: '22'},
                {label: 'Модель', info: 'UA W Charged Pursuit 3 Tech'},
                {label: 'Код товара', info: '100058651941'}
            ]
        },
        {
            label: 'Материалы и цвет',
            items: [
                {label: 'Материал верха', info: 'текстиль'},
                {label: 'Артикул производителя', info: '77-3025430'},
                {label: 'Серия', info: '22'},
                {label: 'Модель', info: 'UA W Charged Pursuit 3 Tech'},
                {label: 'Код товара', info: '100058651941'}
            ]
        }
    ])
const isDescriptionOpen = ref(false)
const isCharacteristicsOpen = ref(false)
const isReviewsOpen = ref(false)
const isPriceOpen = ref(false)
const infoList = ref([
    {label: 'О товаре', isOpen: false},
    {label: 'Цены', isOpen: false},
    {label: 'Характеристики', isOpen: false},
    {label: 'Отзывы', isOpen: false},
])
const colors = ref([
    {color: 'Oq', img: image1, isSelected: true},
    {color: 'Qora', img: image1, isSelected: false},
    {color: 'Qizil', img: image1, isSelected: false},
])
const creditMonths = ref([
    {length: 3, isSelected: false},
    {length: 6, isSelected: false},
    {length: 9, isSelected: false},
    {length: 12, isSelected: false},
])
const topButtons = ref([
    {icon: 'pi-share-alt', label: 'Поделиться'},
    {icon: 'pi-clone', label: 'Сравнить'},
    {icon: 'pi-heart', label: 'В избранное'},
])
const availableShops = ref([
    {
        shop: 'ТЕХНОПАРК (доставка МегаМаркет)',
        price: '460 000'
    },
    {
        shop: 'Customtrade (доставка МегаМаркет)',
        price: '500 000'
    },
    {
        shop: 'ТЕХНОПАРК',
        price: '439 000'
    },
])
const infoListIndex = ref(0)
const colorIndex = ref(0)

const findActiveImage = () => {
    if (imagesRef.value.offsetWidth) {
        const imageWidth = imagesRef.value.offsetWidth
        const scrollLeft = imagesRef.value.scrollLeft

        activeImage.value = Math.round(Math.floor(scrollLeft) / imageWidth)
    }
}
const selectImage = (index) => {
    selectedImage.value = index
}

const moveImages = (direction) => {
    if (desktopImagesRef.value) {
        const saleCardWidth = desktopImagesRef.value.children[0].offsetWidth + 10
        const scrollLeft = desktopImagesRef.value.scrollLeft
        const newIndex = direction === 'left' ? scrollLeft - saleCardWidth : scrollLeft + saleCardWidth;

        desktopImagesRef.value.scrollTo({
            left: newIndex,
            behavior: 'smooth',
        });
    }
    console.dir(desktopImagesRef.value)
}
const scrollImg = () => {
    findActiveImage()
}

const selectInfo = (index) => {
    if(infoList.value) {
        infoList.value[index].isOpen = true
        if (infoListIndex.value !== index) {
            infoList.value[infoListIndex.value].isOpen = false
        }
        infoListIndex.value = index
    }
}

const selectColor = (index) => {
    if (colors.value) {
        colors.value[index].isSelected = true
        if (colorIndex.value !== index) {
            colors.value[colorIndex.value].isSelected = false
        }
        colorIndex.value = index
    }
}
onMounted(() => {
    if (desktopImagesRef.value) {
        isScrollable.value = desktopImagesRef.value.scrollWidth > desktopImagesRef.value.offsetWidth
    }
    selectInfo(0)
})
</script>

<style scoped>
.imagesContainer,
.desktopImagesContainer {
    scrollbar-width: none;
}
.desktopFullInfo {
    box-shadow: 0 8px 24px 0 #08090a14;
}
</style>