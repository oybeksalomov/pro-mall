<template>
    <router-link to="#" class="relative rounded-[1.4rem] aspect-square">
        <img :src="props.saleCard.image" alt="Sale Photo" class="w-full h-full object-center object-cover rounded-[1.4rem]">
        <div class="absolute bottom-0 left-0 bg-gradient-to-t flex items-end pb-4 justify-center from-white w-full h-1/2 rounded-b-[1.4rem]">
            <div class="text-xl font-bold">{{ props.saleCard.label }}</div>
        </div>
        <div class="w-[6.6rem] h-[6.6rem] flex items-center justify-center absolute -top-[2rem] -right-[2rem]">
            <img src="../assets/Star%201.svg" alt="Star Photo">
            <div class="text-lg absolute text-white font-semibold">40%</div>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({saleCard: Object})
</script>

<style scoped>

</style>