<template>
    <div>
        <div class="text-lg font-semibold my-8">{{props.characteristic.label}}</div>
        <ul>
            <li
                v-for="(item, index) in props.characteristic.items"
                :key="index"
                class="text-md flex items-center mt-6 justify-between"
            >
                <div class="text-gray_text">{{item.label}}</div>
                <div>{{item.info}}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['characteristic'])
</script>

<style scoped>

</style>