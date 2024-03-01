<template>
    <div class="flex justify-between">
        <div class="p-4 xl:mr-8">
            <div class="w-[11rem] h-[11rem] flex items-center justify-center">
                <img class="object-contain h-full" :src="cartItem.item.img" alt="Item photo">
            </div>
        </div>
        <div class="xl:flex xl:items-center">
            <div class="text-lg xl:order-3 xl:mx-12 whitespace-nowrap font-bold">{{cartItem.item.price * cartItem.count}} сум</div>
            <div>
               <div class="text-gray_icon xl:text-black text-md mt-3 xl:mt-0">{{cartItem.item.name}}<span class="text-gray_text whitespace-nowrap ml-2 text-md">0.3 кг</span></div>
               <div class="text-sm text-main_color mt-3">{{cartItem.item.owner}}</div>
               <div class="flex items-center mt-3 text-gray_text">
                   <i class="pi pi-map-marker text-md mr-2"></i>
                   <div class="text-sm flex"><span class="hidden xl:block mr-2">Пункты выдачи:</span> 3 марта</div>
               </div>
                <div class="flex items-center text-gray_text">
                    <i class="pi pi-car text-md mr-2"></i>
                    <div class="text-sm flex"><span class="hidden xl:block mr-2">Доставка по клику:</span> 3 марта</div>
                </div>
            </div>

            <div class="flex mt-6 xl:mx-12 xl:mt-0 h-fit rounded-full items-center w-fit gap-4 py-3 px-6 bg-gray_lightest">
                <button @click="emit('decreaseItem', cartId)"><i class="pi pi-minus text-md font-semibold text-gray_icon"></i></button>
                <input class="text-base outline-0 text-center w-12 bg-[transparent] font-semibold" :value="modelValue" @input="updateInput" type="text">
                <button @click="emit('increaseItem', cartId)"><i class="pi pi-plus text-md font-semibold text-gray_icon"></i></button>
            </div>
        </div>
        <div class="flex flex-col justify-between ml-2">
            <button>
                <i class="pi pi-heart text-gray_icon text-lg"></i>
            </button>
            <button @click="emit('removeItem', cartItem.item.id)">
                <i class="pi pi-trash text-gray_icon text-lg"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['cartItem', 'modelValue', 'cartId'])
const emit = defineEmits(['update:modelValue', 'increaseItem', 'decreaseItem', 'removeItem'])

const updateInput = (event) => {
    emit('update:modelValue', event.target.value)
}
onMounted(() => {
})
</script>

<style scoped>

</style>