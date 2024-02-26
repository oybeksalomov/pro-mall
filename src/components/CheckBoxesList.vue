<template>
    <div>
        <div v-if="list.label" class="text-lg xl:text-md font-bold">{{ list.label }}</div>
        <ul class="mt-4">
            <li
                v-for="item in list.items"
                class="flex items-center mt-2"
            >
                <CheckBox />
                <div class="text-md ml-4">{{item.label}}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import CheckBox from "./CheckBox.vue";

const props = defineProps(['list'])
</script>

<style scoped>

</style>