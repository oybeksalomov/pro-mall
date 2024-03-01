<template>
    <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.headerMenu-enter-active,
.headerMenu-leave-active,
.sign-in-enter-active,
.sign-in-leave-active {
    transition: opacity 0.2s ease-in;
}

.headerMenu-enter-from,
.headerMenu-leave-to,
.sign-in-enter-from,
.sign-in-leave-to {
    opacity: 0;
}
.mobileMenu-enter-active,
.mobileMenu-leave-active,
.nestedMenu-leave-active {
    transition: all 0.3s ease;
}
.mobileMenu-enter-from,
.mobileMenu-leave-to,
.nestedMenu-leave-to {
    transform: translateX(-100%);
}

.nestedDesktopItems-enter-active {
    transition: all 1s ease;
}
.nestedDesktopItems-enter-from {
    opacity: 0;
    transform: translateX(-2rem);
}
</style>
