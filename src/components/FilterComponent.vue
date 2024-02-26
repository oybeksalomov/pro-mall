<template>
    <div>
        <div>
            <div class="text-lg xl:text-md font-bold">Категория</div>
            <ul class="mt-4">
                <li class="text-md px-[8px] py-[6px]">Роботы-пылесосы</li>
                <li class="text-md px-[8px] py-[6px]">Комоды</li>
                <li class="text-md px-[8px] py-[6px]">Парфюмерия унисекс</li>
            </ul>
        </div>
        <div class="mt-8">
            <div class="text-lg xl:text-md font-bold">Цена</div>
            <VueSimpleRangeSlider
                class="w-full xl:w-[28rem]"
                active-bar-color="#f00"
                :min="0"
                :max="10000"
                exponential
                v-model="state.range"
            >
                <template #suffix="{ value }">сум</template>
            </VueSimpleRangeSlider>
            <div class="flex gap-4">
                <label class="text-md flex border border-gray_light text-gray_light rounded-[0.8rem] p-[0.8rem]">
                    <span class="mr-[1.2rem]">от</span>
                    <input class="outline-0 text-black w-full" type="text" :value="state.range[0]">
                    <span>сум</span>
                </label>
                <label class="text-md flex border border-gray_light text-gray_light rounded-[0.8rem] p-[0.8rem]">
                    <span class="mr-[1.2rem]">до</span>
                    <input class="outline-0 text-black w-full" type="text" :value="state.range[1]">
                    <span>сум</span>
                </label>
            </div>
        </div>
        <CheckBoxesList class="mt-8" :list="list2"/>
        <CheckBoxesList class="mt-8" :list="list1" />
    </div>

</template>

<script setup>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css"
import {ref} from "vue";
import CheckBoxesList from "./CheckBoxesList.vue";

const state = ref({ range: [0, 10000], number: 10 });
const list1 = {label: 'Бренд', items: [{label: 'Xiaomi'}, {label: 'Samsung'}, {label: 'Artel'}, {label: 'LG'}, {label: 'Huawei'}]}
const list2 = {items: [{label: 'Списать бонусы'}, {label: 'Купить в кредит'}, {label: 'С доставкой'}, {label: 'В наличии'}, {label: 'Высокий рейтинг'}]}

</script>

<style scoped>

</style>