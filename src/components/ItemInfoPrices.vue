<template>
    <div class="rounded-[2.5rem] border xl:border-0 xl:rounded-none border-gray_light items-center px-4 py-8 xl:grid xl:grid-cols-12">
        <div class="text-lg xl:col-span-3 xl:col-start-8 xl:row-span-full font-semibold">{{shop.price}} сум</div>
        <div class="flex items-center xl:col-span-3 xl:row-span-full  xl:col-start-5 mt-5 xl:mt-0">
            <i class="pi pi-box hidden xl:block text-base text-gray_icon mr-4"></i>
            <div class="text-sm">
                <div>Доставка по клику, с 3 марта — <span class="font-semibold">0 ₽</span></div>
                <div>Пункты выдачи, 3 марта — <span class="font-semibold">0 ₽</span></div>
            </div>
        </div>
        <button class="text-md xl:col-span-2 xl:row-span-full xl:col-start-11 w-full mt-5 xl:mt-0 rounded-[2rem] font-semibold text-white py-4 bg-main_color">Купить</button>
        <div class="mt-5 xl:mt-0 flex items-center xl:row-span-full  xl:col-start-1 xl:col-span-4">
            <div class="hidden mr-8 xl:flex items-center justify-center bg-gray_lightest rounded-xl w-[6.4rem] h-[6.4rem]">
                shop logo
            </div>
            <div class="text-md">
                <div class="text-main_color">{{shop.shop}}</div>
                <div class="text-gray_text mt-4">Оплата только онлайн</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['shop'])
</script>

<style scoped>

</style>