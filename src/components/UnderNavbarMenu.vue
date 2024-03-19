<template>
    <!--start Under Navbar catalog-->
    <div class="lg:container">
        <div class="flex items-center mt-[16rem] xl:mt-[9rem] justify-between relative">
            <ul class="flex ulScrollBar items-center px-4 lg:px-0 overflow-x-auto gap-4">
                <li
                    v-for="(navItem, index) in underNavbarItems"
                    :key="index"
                    class="text-md relative cursor-pointer whitespace-nowrap"
                >
                    <router-link to="#" class="border text-md p-4 flex items-center rounded-[1.4rem] bg-gray_lightest border-gray_light">
                        <i class="text-main_color text-lg pr-4" :class="navItem.icon"></i>
                        <span class="whitespace-nowrap">{{navItem.name}}</span>
                    </router-link>
                </li>
            </ul>

            <button @click="toggleAddressCard" class="border hidden text-md p-4 xl:flex items-center rounded-2xl bg-gray_lightest border-gray_light">
                <span class="whitespace-nowrap pr-2">{{addresses.length > 0 ? selectedAddress : 'Указать адрес'}}</span>
                <i :class="{'rotate-180': isAddressCardOpen}" class="transition-transform pt-1 pi pi-chevron-down text-main_color px-2"></i>
            </button>

            <!--Address Card start-->
            <div v-if="isAddressCardOpen" v-on-click-outside="toggleAddressCard" class="absolute z-30 addressCard p-8 bg-white rounded-[2rem] w-full max-w-[56rem] right-0 -bottom-4 translate-y-full">
                <div class="flex items-center">
                    <i class="pi pi-home text-gray_text font-bold text-3xl mr-6"></i>
                    <div class="text-3xl font-semibold">Адрес доставки</div>
                    <button @click="toggleAddressCard" class="ml-auto"><i class="pi pi-times text-base text-gray_text font-bold"></i></button>
                </div>

                <div v-if="addresses.length > 0" class="flex flex-col">
                    <label
                        v-for="(address, index) in addresses"
                        :key="index"
                        class="flex items-center py-8 text-base relative cursor-pointer"
                        :class="index !== addresses.length-1 ? 'border-b border-gray_light' : ''"
                    >
                        <span v-if="selectedAddress === address.value" class="w-8 h-8 flex items-center justify-center rounded-full absolute bg-main_color border border-main_color">
                            <span class="w-4 h-4 rounded-full absolute bg-gray_lightest"></span>
                        </span>
                        <span v-else class="w-8 h-8 rounded-full absolute bg-gray_lightest border border-gray_light"></span>

                        <input type="radio" :value="address.value" v-model="selectedAddress" class="appearance-none">

                        <span class="ml-12">{{address.value}}</span>
                        <button @click="addressStore.removeAddress(address.id)" class="ml-auto"><i class="pi pi-trash text-lg text-gray_text"></i></button>
                    </label>
                </div>
                <div v-else class="text-base py-8">Укажите ваш адрес</div>
                <button @click="addressStore.toggleAddAddress" class="text-base w-full rounded-[2rem] text-white py-4 bg-main_color">{{ addresses.length > 0 ? 'Добавить новый' : 'Указать адрес' }}</button>
            </div>
        </div>
    </div>

    <!--end Under Navbar catalog-->
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router"
import {vOnClickOutside} from "@vueuse/components";
import {useAddressStore} from "../store/address.js";
import {storeToRefs} from "pinia";

const addressStore = useAddressStore()

const {addresses} = storeToRefs(addressStore)

const isAddressCardOpen = ref(false)
const router = useRouter()
const selectedAddress = ref()

const underNavbarItems = ref([
    {name: 'Скидки и Кэшбэк', icon: 'pi pi-heart'},
    {name: 'Супермаркет', icon: 'pi pi-shopping-bag'},
    {name: 'Акции', icon: 'pi pi-bolt'},
    {name: 'Мега Выгода', icon: 'pi pi-percentage'}
])

const toggleAddressCard = () => {
    isAddressCardOpen.value = !isAddressCardOpen.value
}
const handleWindowResize = () => {
    if (window.innerWidth < 1280) {
        isAddressCardOpen.value = false
    }
}
onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
    addresses.value.forEach(address => {
        if(address.isSelected) {
            selectedAddress.value = address.value
        }
    })
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWindowResize)
})
</script>

<style scoped>
.ulScrollBar {
    scrollbar-width: none;
}
.addressCard {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
}
</style>