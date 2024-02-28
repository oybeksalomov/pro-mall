<template>
    <HeaderMenu />
    <UnderNavbarMenu class="hidden xl:block"/>

    <div class="mt-[13.1rem] xl:mt-[3rem]">
        <div class="lg:container">
            <div class="grid grid-cols-12 xl:grid-rows-4 gap-x-8">
                <!--         start   mobile image carousel-->
                <div class="xl:hidden col-span-full">
                    <div ref="imagesRef" @scroll="scrollImg" class="flex flex-nowrap imagesContainer snap-x snap-mandatory overflow-auto w-fit h-[36rem]">
                        <div
                            v-for="(image, index) in images"
                            :key="index"
                            class="flex-none snap-start bg-gray_lightest w-full h-full"
                        >
                            <img class="h-full mx-auto object-center object-contain" :src="image.img" alt="Item Photo">
                        </div>
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
                    <div class="px-[3rem] max-w-[1024px] xl:px-0 xl:max-w-full">
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
                    </div>
                </div>

                <div class="col-span-full xl:col-span-4 xl:row-span-full mt-8 xl:mt-0">
                    <div class="px-[3rem] max-w-[1024px] xl:px-0 xl:max-w-full">
                        <div class="p-[1.6rem] rounded-[2.4rem]  paymentBox">
                            <div class="text-6xl font-semibold">449 999 сум</div>
                            <div class="flex text-md mt-4">
                                <div class="font-semibold mr-2">Доставка по клику</div>
                                <div class="text-gray_text">с 3 марта</div>
                                <div class="ml-auto">0 сум</div>
                            </div>
                            <div class="flex text-md mt-4">
                                <div class="font-semibold mr-2">Пункты выдачи</div>
                                <div class="text-gray_text">с 3 марта</div>
                                <div class="ml-auto">0 сум</div>
                            </div>
                            <div class="text-md text-gray_text mt-4">оплата только онлайн</div>
                            <button class="w-full mt-6 h-fit bg-main_color text-white text-base font-bold px-12 py-3 rounded-full">Купить</button>
                        </div>
                    </div>
                </div>

                <div class="col-span-full xl:col-span-4 xl:col-start-5 xl:row-start-2 mt-8 xl:mt-0">
                    <div class="px-[3rem] max-w-[1024px] xl:px-0 xl:max-w-full">
                        <div class="flex text-md mt-4">
                            <div class="text-gray_text">Материал верха:</div>
                            <div class="ml-4">текстиль</div>
                        </div>
                        <div class="flex text-md mt-4">
                            <div class="text-gray_text">Длина стельки, см:</div>
                            <div class="ml-4">23.5</div>
                        </div>
                    </div>
                </div>
            </div>
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

const images = ref([{img: image1}, {img: image2}, {img: image3}, ])
const imagesRef = ref(null)
const activeImage = ref(0)
const desktopImagesRef = ref(null)
const isScrollable = ref(false)
const selectedImage = ref(0)

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

onMounted(() => {
    if (desktopImagesRef.value) {
        isScrollable.value = desktopImagesRef.value.scrollWidth > desktopImagesRef.value.offsetWidth
    }
})
</script>

<style scoped>
.imagesContainer,
.desktopImagesContainer {
    scrollbar-width: none;
}
.paymentBox {
    box-shadow: 0 8px 24px 0 #08090a14;
}
</style>