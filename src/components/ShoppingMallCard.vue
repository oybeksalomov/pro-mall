<template>
    <div class="w-full h-[21rem] relative rounded-[1.4rem] bg-gray_lightest">
        <div class="absolute grid grid-cols-2 grid-rows-3 bottom-0 left-0 bg-gradient-to-t from-gray_light w-full h-1/2 rounded-b-[1.4rem]">
            <div class="col-span-2 row-start-2 px-6 py-2 whitespace-nowrap text-white text-5xl font-bold">{{props.shoppingMall.name}}</div>
            <div class="col-span-1 whitespace-nowrap text-ellipsis py-2 flex items-end px-6 row-start-3 text-white text-sm">{{props.shoppingMall.address}}</div>
            <div class="col-start-2 py-2 px-6 flex justify-end items-end row-start-3 text-sm text-white font-medium">{{props.shoppingMall.distance}}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({shoppingMall: Object})

</script>

<style scoped>

</style>