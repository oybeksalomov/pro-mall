<template>
    <div class="w-full px-4 py-12 flex justify-center items-center min-h-[100vh]">
        <div class="w-full max-w-[80rem] shadow-md rounded-[2rem] p-8 ">
            <div class="flex items-center">
                <div class="font-semibold text-2xl">Адрес доставки</div>
                <router-link to="/" class="ml-auto opacity-50"><i class="pi pi-times"></i></router-link>
            </div>
        
            <div class="flex mt-12">
                <input type="text" value="Rishton 34" class="w-full border border-gray_light mr-4 rounded-[1rem] text-md px-4">
                <button class="p-4 text-md font-semibold rounded-[2rem] bg-gray_light">Подтвердить</button>
            </div>

            <div class="w-full aspect-[3/2] bg-gray_lightest mt-8">
            <!-- Karta... -->
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>