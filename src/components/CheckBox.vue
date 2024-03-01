<template>
    <label :class="{'border-main_color': isChecked}" class="border bg-white border-gray_light hover:border-gray_icon transition-all flex-none w-[1.6rem] h-[1.6rem] relative rounded">
        <input @click="handleCheckbox" ref="checkbox" type="checkbox" class="w-full h-full cursor-pointer appearance-none">
        <svg v-if="isChecked" class="absolute top-0 left-0 cursor-pointer scale-110 w-full h-full" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="5" fill="#f00000"/>
            <mask id="path-2-inside-1_8_7" fill="white">
                <path d="M17.4622 1.96301L23.9684 8.46914L10.5061 21.9314L4 15.4253L17.4622 1.96301Z"/>
            </mask>
            <path d="M10.5061 21.9314L8.3848 24.0527L10.5061 26.174L12.6274 24.0527L10.5061 21.9314ZM21.8471 6.34782L8.3848 19.8101L12.6274 24.0527L26.0897 10.5905L21.8471 6.34782ZM12.6274 19.8101L6.12132 13.3039L1.87868 17.5466L8.3848 24.0527L12.6274 19.8101Z" fill="white" mask="url(#path-2-inside-1_8_7)"/>
        </svg>
    </label>
</template>

<script setup>
import {ref} from "vue";

const checkbox = ref(null)
const isChecked = ref(false)

const handleCheckbox = () => {
    isChecked.value = checkbox.value.checked
}
</script>

<style scoped>

</style>