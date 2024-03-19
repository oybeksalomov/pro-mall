<template>
    <router-link :to="'/shopping-mall/' + mallId" class="w-full relative rounded-[1.4rem]">
        <img class="w-full h-full object-center object-cover rounded-[1.4rem]" :src="props.shoppingMall.image" alt="Mall Photo">
        <div class="absolute grid grid-cols-2 grid-rows-3 bottom-0 left-0 bg-gradient-to-t from-black_font w-full h-1/2 rounded-b-[1.4rem]">
            <div class="col-span-2 row-start-2 px-6 py-2 whitespace-nowrap flex items-center overflow-hidden text-white text-5xl font-semibold">{{props.shoppingMall.name}}</div>
            <div class="col-span-1 whitespace-nowrap text-ellipsis py-2 flex items-start px-6 row-start-3 text-white text-sm">{{props.shoppingMall.address}}</div>
            <div class="col-start-2 py-2 px-6 flex justify-end items-start row-start-3 text-sm text-white font-medium">{{props.shoppingMall.distance}}</div>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    shoppingMall: Object,
    mallId: Number
})
</script>

<style scoped>

</style>