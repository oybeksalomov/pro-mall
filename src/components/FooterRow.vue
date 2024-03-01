<template>
    <!--start Footer-->
    <footer class="mt-[5rem] mb-4 lg:mt-12 border-t border-[#E4EBF0] bg-gray_subscribe">
        <!--start Mobile panel menu-->
        <div class="min-[800px]:hidden bg-white">
            <div class="container">
                <ul>
                    <li
                        v-for="(menuItem, index) in footerMenuItems"
                        :key="index"
                        class="flex flex-col"
                        @click="openSubItems(index)"
                    >
                        <div class="flex items-center justify-between py-8">
                            <div class="text-base font-semibold ">{{menuItem.label}}</div><!-- continue panelMenu-->
                            <i class="pi pi-chevron-down transition-transform text-md text-gray_icon" :class="{'rotate-180': menuItem.isOpen}"></i>
                        </div>
                        <transition name="footerMenu">
                            <ul v-if="menuItem.isOpen">
                                <li
                                    v-for="(subItem, index) in menuItem.subItems"
                                    :key="index"
                                    class="text-md text-gray_icon mb-5"
                                >
                                    <router-link :to="subItem.url" >{{subItem.label}}</router-link>
                                </li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
        <!--end Mobile panel menu-->

        <!--start Desktop panel menu-->
        <div class="container">
            <div class="py-[4rem] hidden min-[800px]:block">
                <ul class="flex justify-between">
                    <li
                        v-for="(menuItem, index) in footerMenuItems"
                        :key="index"
                        ref="liMenuItemsRef"
                    >
                        <div class="text-base w-fit font-semibold mb-8">{{menuItem.label}}</div>
                        <ul class="">
                            <li
                                v-for="(subItem, idx) in menuItem.subItems"
                                :key="idx"
                                class="text-md text-gray_icon w-full mb-5"
                            >
                                <router-link :to="subItem.url">{{subItem.label}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="flex-col items-start flex">
                        <img src="../assets/promall%201.svg" alt="Logo">
                        <div class="text-md mt-[1.6rem] text-gray_text">&#169; 2024 «PRO MALL»</div>
                        <div class="flex mt-[1.6rem] gap-4">
                            <router-link class="social rounded-full" to="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                                    <g clip-path="url(#clip0_612_1850)">
                                        <g clip-path="url(#clip1_612_1850)">
                                            <path d="M23.3775 11.937C23.4901 11.5794 23.3775 11.32 22.8777 11.32H21.2183C20.7991 11.32 20.6059 11.5474 20.4925 11.7909C20.4925 11.7909 19.6389 13.8702 18.4459 15.2184C18.0594 15.6087 17.8829 15.7388 17.6729 15.7388C17.5596 15.7388 17.4142 15.6087 17.4142 15.2511V11.921C17.4142 11.4988 17.2857 11.3032 16.9311 11.3032H14.3208C14.0628 11.3032 13.9023 11.4988 13.9023 11.6935C13.9023 12.0998 14.498 12.1972 14.5627 13.3338V15.8035C14.5627 16.3398 14.4661 16.4372 14.2561 16.4372C13.6923 16.4372 12.3221 14.3412 11.5004 11.953C11.3391 11.482 11.1786 11.3032 10.7594 11.3032H9.0833C8.60018 11.3032 8.51953 11.5315 8.51953 11.7749C8.51953 12.2132 9.0833 14.4226 11.1459 17.3464C12.5153 19.3451 14.4661 20.417 16.222 20.417C17.2857 20.417 17.415 20.1736 17.415 19.7673V18.2563C17.415 17.7694 17.5116 17.688 17.8502 17.688C18.0921 17.688 18.5273 17.8173 19.5103 18.776C20.6378 19.9134 20.8311 20.433 21.4595 20.433H23.1196C23.6035 20.433 23.8287 20.1896 23.7001 19.7179C23.5548 19.2477 23.007 18.5652 22.2979 17.7527C21.9107 17.2977 21.3309 16.794 21.1537 16.5506C20.9117 16.2257 20.9764 16.0956 21.1537 15.8035C21.1377 15.8035 23.1683 12.9124 23.3775 11.937Z" fill="#677178"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_612_1850">
                                            <rect width="24" height="9.89062" fill="white" transform="translate(4 11.0498)"/>
                                        </clipPath>
                                        <clipPath id="clip1_612_1850">
                                            <rect width="24" height="9.89062" fill="white" transform="translate(4 11.0498)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </router-link>
                            <router-link class="social rounded-full" to="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                                    <g clip-path="url(#clip0_612_1855)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.27119 15.1228C12.4624 13.2967 15.2574 12.0935 16.6564 11.5111C20.649 9.85084 21.4791 9.5616 22.02 9.55292C22.1386 9.55003 22.4047 9.57992 22.5773 9.71972C22.7219 9.83734 22.7624 9.99739 22.7817 10.1092C22.801 10.2211 22.8241 10.4756 22.8058 10.6752C22.5889 12.9487 21.6527 18.4655 21.1764 21.0128C20.9749 22.0898 20.5786 22.4514 20.1939 22.487C19.3589 22.5642 18.7245 21.9346 17.9166 21.4043C16.6506 20.5751 15.9352 20.0593 14.7069 19.2494C13.2877 18.3142 14.2075 17.7993 15.0174 16.9595C15.2295 16.7397 18.9077 13.3931 18.9791 13.0894C18.9887 13.0509 18.9964 12.9101 18.9116 12.8349C18.8277 12.7607 18.7043 12.7867 18.6146 12.806C18.4874 12.8349 16.4655 14.1712 12.5501 16.8149C11.9755 17.2093 11.4558 17.4011 10.9901 17.3915C10.4762 17.3799 9.48891 17.1013 8.75519 16.8622C7.85467 16.57 7.13927 16.4148 7.20098 15.9173C7.23376 15.6589 7.5905 15.3928 8.27119 15.1228Z" fill="#677178"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_612_1855">
                                            <rect width="16.3906" height="18" fill="white" transform="translate(6.80078 7)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </router-link>
                            <router-link class="social rounded-full" to="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                                    <g clip-path="url(#clip0_612_1860)">
                                        <g clip-path="url(#clip1_612_1860)">
                                            <path d="M15.9967 16.0852C14.0651 16.0852 12.4885 14.5165 12.4885 12.5849C12.4885 10.6453 14.0646 9.07666 15.9967 9.07666C17.9288 9.07666 19.5049 10.6453 19.5049 12.5849C19.5049 14.5165 17.9288 16.0852 15.9967 16.0852ZM15.9967 10.854C15.7699 10.8544 15.5454 10.8995 15.336 10.9867C15.1266 11.0739 14.9365 11.2016 14.7765 11.3623C14.6164 11.5231 14.4897 11.7138 14.4034 11.9236C14.3172 12.1333 14.2731 12.358 14.2737 12.5849C14.2737 13.5354 15.0467 14.3078 15.9967 14.3078C16.9467 14.3078 17.7196 13.5349 17.7196 12.5849C17.7196 11.627 16.9467 10.854 15.9967 10.854ZM20.038 16.51C20.3782 17.2053 19.9915 17.5376 19.1108 18.1093C18.369 18.5806 17.3487 18.766 16.6767 18.8357L17.2409 19.3921L19.3041 21.4553C19.6132 21.7723 19.6132 22.2821 19.3041 22.5912L19.2116 22.6916C19.0585 22.8402 18.8534 22.9234 18.64 22.9234C18.4265 22.9234 18.2215 22.8402 18.0683 22.6916C17.3827 21.9991 16.695 21.3087 16.0051 20.6205L13.9419 22.6916C13.6249 23.0007 13.1151 23.0007 12.806 22.6916L12.7135 22.5912C12.6382 22.517 12.5784 22.4286 12.5376 22.3311C12.4967 22.2336 12.4757 22.1289 12.4757 22.0232C12.4757 21.9175 12.4967 21.8129 12.5376 21.7154C12.5784 21.6179 12.6382 21.5294 12.7135 21.4553C13.2387 20.9301 13.9884 20.1725 14.7767 19.3921L15.333 18.8357C14.6684 18.766 13.6333 18.5885 12.8836 18.1093C12.0029 17.5376 11.6166 17.2053 11.9564 16.51C12.1572 16.1158 12.7061 15.7835 13.4321 16.3552C13.4321 16.3552 14.4132 17.1355 15.9972 17.1355C17.5812 17.1355 18.5623 16.3552 18.5623 16.3552C19.2888 15.7835 19.8372 16.1158 20.038 16.51Z" fill="#677178"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_612_1860">
                                            <rect width="9.89062" height="18" fill="white" transform="translate(11.0508 7)"/>
                                        </clipPath>
                                        <clipPath id="clip1_612_1860">
                                            <rect width="9.89062" height="18" fill="white" transform="translate(11.0508 7)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
            <!--end Desktop Panel Menu-->
            <div>
                <div class="flex flex-col max-w-[41.5rem] mx-auto min-[800px]:flex-row min-[800px]:max-w-full min-[800px]:gap-4 text-md py-6">
                    <div class="mb-[1.6rem] min-[800px]:mb-0">Есть вопросы? Звоните:</div>
                    <div class="font-semibold">+998 99 888 88 88</div>
                    <div class="font-semibold">+998 77 666 66 66</div>
                    <div class="hidden min-[800px]:block">Режим работы с 6 до 24</div>
                </div>
            </div>
        </div>

        <div class="bg-white py-8 flex flex-col items-center min-[800px]:hidden">
            <div class="text-md text-gray_text">&#169; 2024 «PRO MALL»</div>
            <div class="flex mt-[1.6rem] gap-4">
                <router-link to="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                        <g clip-path="url(#clip0_612_1850)">
                            <g clip-path="url(#clip1_612_1850)">
                                <path d="M23.3775 11.937C23.4901 11.5794 23.3775 11.32 22.8777 11.32H21.2183C20.7991 11.32 20.6059 11.5474 20.4925 11.7909C20.4925 11.7909 19.6389 13.8702 18.4459 15.2184C18.0594 15.6087 17.8829 15.7388 17.6729 15.7388C17.5596 15.7388 17.4142 15.6087 17.4142 15.2511V11.921C17.4142 11.4988 17.2857 11.3032 16.9311 11.3032H14.3208C14.0628 11.3032 13.9023 11.4988 13.9023 11.6935C13.9023 12.0998 14.498 12.1972 14.5627 13.3338V15.8035C14.5627 16.3398 14.4661 16.4372 14.2561 16.4372C13.6923 16.4372 12.3221 14.3412 11.5004 11.953C11.3391 11.482 11.1786 11.3032 10.7594 11.3032H9.0833C8.60018 11.3032 8.51953 11.5315 8.51953 11.7749C8.51953 12.2132 9.0833 14.4226 11.1459 17.3464C12.5153 19.3451 14.4661 20.417 16.222 20.417C17.2857 20.417 17.415 20.1736 17.415 19.7673V18.2563C17.415 17.7694 17.5116 17.688 17.8502 17.688C18.0921 17.688 18.5273 17.8173 19.5103 18.776C20.6378 19.9134 20.8311 20.433 21.4595 20.433H23.1196C23.6035 20.433 23.8287 20.1896 23.7001 19.7179C23.5548 19.2477 23.007 18.5652 22.2979 17.7527C21.9107 17.2977 21.3309 16.794 21.1537 16.5506C20.9117 16.2257 20.9764 16.0956 21.1537 15.8035C21.1377 15.8035 23.1683 12.9124 23.3775 11.937Z" fill="#677178"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_612_1850">
                                <rect width="24" height="9.89062" fill="white" transform="translate(4 11.0498)"/>
                            </clipPath>
                            <clipPath id="clip1_612_1850">
                                <rect width="24" height="9.89062" fill="white" transform="translate(4 11.0498)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </router-link>
                <router-link to="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                        <g clip-path="url(#clip0_612_1855)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.27119 15.1228C12.4624 13.2967 15.2574 12.0935 16.6564 11.5111C20.649 9.85084 21.4791 9.5616 22.02 9.55292C22.1386 9.55003 22.4047 9.57992 22.5773 9.71972C22.7219 9.83734 22.7624 9.99739 22.7817 10.1092C22.801 10.2211 22.8241 10.4756 22.8058 10.6752C22.5889 12.9487 21.6527 18.4655 21.1764 21.0128C20.9749 22.0898 20.5786 22.4514 20.1939 22.487C19.3589 22.5642 18.7245 21.9346 17.9166 21.4043C16.6506 20.5751 15.9352 20.0593 14.7069 19.2494C13.2877 18.3142 14.2075 17.7993 15.0174 16.9595C15.2295 16.7397 18.9077 13.3931 18.9791 13.0894C18.9887 13.0509 18.9964 12.9101 18.9116 12.8349C18.8277 12.7607 18.7043 12.7867 18.6146 12.806C18.4874 12.8349 16.4655 14.1712 12.5501 16.8149C11.9755 17.2093 11.4558 17.4011 10.9901 17.3915C10.4762 17.3799 9.48891 17.1013 8.75519 16.8622C7.85467 16.57 7.13927 16.4148 7.20098 15.9173C7.23376 15.6589 7.5905 15.3928 8.27119 15.1228Z" fill="#677178"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_612_1855">
                                <rect width="16.3906" height="18" fill="white" transform="translate(6.80078 7)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </router-link>
                <router-link to="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#677178"/>
                        <g clip-path="url(#clip0_612_1860)">
                            <g clip-path="url(#clip1_612_1860)">
                                <path d="M15.9967 16.0852C14.0651 16.0852 12.4885 14.5165 12.4885 12.5849C12.4885 10.6453 14.0646 9.07666 15.9967 9.07666C17.9288 9.07666 19.5049 10.6453 19.5049 12.5849C19.5049 14.5165 17.9288 16.0852 15.9967 16.0852ZM15.9967 10.854C15.7699 10.8544 15.5454 10.8995 15.336 10.9867C15.1266 11.0739 14.9365 11.2016 14.7765 11.3623C14.6164 11.5231 14.4897 11.7138 14.4034 11.9236C14.3172 12.1333 14.2731 12.358 14.2737 12.5849C14.2737 13.5354 15.0467 14.3078 15.9967 14.3078C16.9467 14.3078 17.7196 13.5349 17.7196 12.5849C17.7196 11.627 16.9467 10.854 15.9967 10.854ZM20.038 16.51C20.3782 17.2053 19.9915 17.5376 19.1108 18.1093C18.369 18.5806 17.3487 18.766 16.6767 18.8357L17.2409 19.3921L19.3041 21.4553C19.6132 21.7723 19.6132 22.2821 19.3041 22.5912L19.2116 22.6916C19.0585 22.8402 18.8534 22.9234 18.64 22.9234C18.4265 22.9234 18.2215 22.8402 18.0683 22.6916C17.3827 21.9991 16.695 21.3087 16.0051 20.6205L13.9419 22.6916C13.6249 23.0007 13.1151 23.0007 12.806 22.6916L12.7135 22.5912C12.6382 22.517 12.5784 22.4286 12.5376 22.3311C12.4967 22.2336 12.4757 22.1289 12.4757 22.0232C12.4757 21.9175 12.4967 21.8129 12.5376 21.7154C12.5784 21.6179 12.6382 21.5294 12.7135 21.4553C13.2387 20.9301 13.9884 20.1725 14.7767 19.3921L15.333 18.8357C14.6684 18.766 13.6333 18.5885 12.8836 18.1093C12.0029 17.5376 11.6166 17.2053 11.9564 16.51C12.1572 16.1158 12.7061 15.7835 13.4321 16.3552C13.4321 16.3552 14.4132 17.1355 15.9972 17.1355C17.5812 17.1355 18.5623 16.3552 18.5623 16.3552C19.2888 15.7835 19.8372 16.1158 20.038 16.51Z" fill="#677178"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_612_1860">
                                <rect width="9.89062" height="18" fill="white" transform="translate(11.0508 7)"/>
                            </clipPath>
                            <clipPath id="clip1_612_1860">
                                <rect width="9.89062" height="18" fill="white" transform="translate(11.0508 7)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </router-link>
            </div>
        </div>
    </footer>
    <!--end Footer-->
</template>

<script setup>
import {onBeforeMount, onMounted, ref} from "vue";

const liMenuItemsRef = ref(null)
const footerMenuItems = ref([
    {
        label: 'Маркетплейс',
        isOpen: false,
        subItems: [
            {label: 'О компании', url: '#'},
            {label: 'Контакты', url: '#'},
            {label: 'Реквизиты', url: '#'},
            {label: 'Партнерская программа', url: '#'},
            {label: 'IT-аккредитация', url: '#'},
        ]
    },
    {
        label: 'Покупателю',
        isOpen: false,
        subItems: [
            {label: 'Помощь покупателю', url: '#'},
            {label: 'Доставка', url: '#'},
            {label: 'Оплата', url: '#'},
            {label: 'Возврат', url: '#'},
            {label: 'Акции', url: '#'},
            {label: 'Промокоды', url: '#'},
            {label: 'СберСпасибо', url: '#'},
        ]
    },
    {
        label: 'Продавцам',
        isOpen: false,
        subItems: [
            {label: 'Приглашение к сотрудничеству', url: '#'},
            {label: 'База знаний', url: '#'},
            {label: 'Вход в личный кабинет', url: '#'},
        ]
    },
    {
        label: 'Правовая информация',
        isOpen: false,
        subItems: [
            {label: 'Условия использования сайта', url: '#'},
            {label: 'Политика обработки персональных данных', url: '#'},
            {label: 'Условия заказа и доставки', url: '#'},
            {label: 'Правила сервиса «закажи и забери»', url: '#'},
            {label: 'Правила применения рекомендательных технологий', url: '#'},
            {label: 'Политика использования cookie-файлов', url: '#'},
        ]
    },
])

const openSubItems = (index) => {
    footerMenuItems.value[index].isOpen = !footerMenuItems.value[index].isOpen
}

const giveWidth = () => {
    if(liMenuItemsRef.value) {
        let liMenuWidth = 0

        for(let liMenuItem of liMenuItemsRef.value) {
            liMenuWidth = liMenuItem.children[0].offsetWidth
            liMenuItem.children[1].style.maxWidth = `${liMenuWidth + 10}px`
        }
    }

}

onMounted(() => {
    giveWidth()
})
</script>

<style scoped>
.social {
    transition: all .2s ease-in-out;
}
.social:hover svg path {
    fill: #F2F5F7;
}
.social:hover {
    background: #677178;
}
.footerMenu-enter-active {
    transition: opacity 0.2s ease-in;
}

.footerMenu-enter-from {
    opacity: 0;
}
</style>