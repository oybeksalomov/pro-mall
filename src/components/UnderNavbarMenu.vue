<template>
    <!--start Under Navbar catalog-->
    <div class="lg:container">
        <div class="flex items-center mt-[16rem] lg:mt-[9rem] justify-between relative">
            <ul class="flex ulScrollBar items-center px-4 lg:px-0 overflow-x-auto gap-4">
                <li
                    v-for="(navItem, index) in underNavbarItems"
                    :key="index"
                    class="text-md relative cursor-pointer whitespace-nowrap"
                >
                    <router-link to="#" class="border text-sm p-4 flex items-center rounded-[1.4rem] bg-gray_lightest border-gray_light">
                        <i class="text-main_color text-lg pr-4" :class="navItem.icon"></i>
                        <span class="whitespace-nowrap">{{navItem.name}}</span>
                    </router-link>
                </li>
            </ul>

            <button @click="openAddressCard" class="border hidden text-sm p-4 lg:flex items-center rounded-2xl bg-gray_lightest border-gray_light">
                <span class="whitespace-nowrap">Ташкент, Афросийоб 156</span>
                <i class="pi pi-chevron-down text-main_color px-2"></i>
            </button>

            <!--Address Card start-->
            <div v-if="isAddressCardOpen" class="absolute z-30 shadow-md p-8 bg-white rounded-[2rem] w-full max-w-[56rem] right-0 -bottom-4 translate-y-full">
                <div class="flex items-center">
                    <button class="w-8 h-8 border mr-4 bg-gray_light"></button>
                    <div class="text-3xl font-semibold">Адрес доставки</div>
                    <button @click="closeAddressCard" class="ml-auto"><i class="pi pi-times"></i></button>
                </div>

                <div class="flex flex-col">
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
                        <span class="w-8 h-8 ml-auto border bg-gray_light"></span>
                    </label>
                </div>
                <button @click="pushToAddress" class="text-base w-full rounded-[2rem] py-4 bg-gray_light">Добавить новый</button>
            </div>
        </div>
    </div>

    <!--end Under Navbar catalog-->
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router"

const isAddressCardOpen = ref(false)
const router = useRouter()
const selectedAddress = ref()
const selectAddress = ref([
    {value: 'Rishton ko\'cha 81', isSelected: true},
    {value: 'Mirzo Ulug\'bek ko\'cha 102'}
])
const underNavbarItems = ref([
    {name: 'Скидки и Кэшбэк', icon: 'pi pi-heart'},
    {name: 'Супермаркет', icon: 'pi pi-shopping-bag'},
    {name: 'Акции', icon: 'pi pi-bolt'},
    {name: 'Мега Выгода', icon: 'pi pi-percentage'}
])

const openAddressCard = () => {
    isAddressCardOpen.value = true
}
const closeAddressCard = () => {
    isAddressCardOpen.value = false
}
const pushToAddress = () => {
    router.push('/add-address')
}
</script>

<style scoped>
.ulScrollBar {
    scrollbar-width: none;
}
</style>