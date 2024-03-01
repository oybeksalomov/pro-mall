<template>
    <div class="container">
        <div>
            <div class="flex items-center justify-between py-6">
                <router-link to="/" class="w-[10rem] xl:w-fit lg: flex-none"><img src="../assets/promall 1.svg" alt="Logo"></router-link>
                <div class="text-base text-main_color font-semibold">Помощь покупателю</div>
            </div>
            <div class="text-3xl xl:text-[3.2rem] mt-8 font-bold">Корзина</div>

            <div v-if="cartItems.length > 0" class="xl:shadow-[0_8px_24px_0_#08090a14] xl:flex xl:p-10 xl:mt-10 xl:rounded-[2.5rem]">
                <div class="flex-1">
                    <div class="text-lg mt-8 xl:mt-0 xl:text-3xl font-bold">Доставка курьером или в пункт выдачи</div>
                    <CartItemCard
                        v-for="(cartItem, index) in cartItems"
                        :key="index"
                        class="mt-8 py-6 border-t border-gray_light"
                        :cart-item="cartItem"
                        :cart-id="index"
                        v-model="cartItem.count"
                        @increase-item="addItem"
                        @decrease-item="reduceItem"
                        @remove-item="removeItem"
                    />
                </div>
                <div class="xl:w-[32rem] xl:pl-12">
                    <div class="text-lg mt-6 font-semibold xl:hidden">Детали для заказа</div>
                    <div class="flex mt-6 text-md">
                        <div>{{cartItems.length}} товар</div>
                        <div class="text-gray_text ml-4">0.3 кг</div>
                        <div class="font-semibold ml-auto">{{result}} сум</div>
                    </div>
                    <div class="flex mt-6 justify-between">
                        <div class="text-lg font-semibold">Итого:</div>
                        <div class="text-lg font-semibold">{{result}} сум</div>
                    </div>
                    <button class="w-full mt-6 h-fit bg-main_color text-white text-base font-bold px-12 py-3 rounded-full">Купить</button>
                </div>
            </div>
            <div v-else class="text-lg text-center mt-10 text-gray_icon font-semibold">В корзине пока пусто.</div>
        </div>
    </div>
</template>

<script setup>
import CartItemCard from "../components/CartItemCard.vue";
import {computed, onMounted, ref} from "vue";
import itemImg11 from "../assets/sneakers.webp";

const cartItems = ref([
    {
        item: {
            id: 1,
            img: itemImg11,
            price: 62000,
            name: 'Робот-пылесос Polaris PVCR 6001 белый',
            rate: 3,
            rates: 45,
            owner: 'ТЕХНОПАРК (доставка МегаМаркет)',
        },
        count: 1
    },
    {
        item: {
            id: 2,
            img: itemImg11,
            price: 100000,
            name: 'Робот-пылесос Polaris PVCR 6001 белый',
            rate: 3,
            rates: 45,
            owner: 'Mediapark (доставка МегаМаркет)',
        },
        count: 1
    }
])

const result = computed(() => {
    let calcValue = 0
    for(let i = 0; i < cartItems.value.length; i++) {
        calcValue += (cartItems.value[i].item.price * cartItems.value[i].count)
    }
    return calcValue
})

const addItem = (value) => {
    if(cartItems.value[value].count < 1000) {
        cartItems.value[value].count++
    }
}
const reduceItem = (value) => {
    if(cartItems.value[value].count > 1) {
        cartItems.value[value].count--
    }
}

const removeItem = (value) => {
    cartItems.value = cartItems.value.filter(item => item.item.id !== value)
}
onMounted(() => {

})
</script>

<style scoped>

</style>