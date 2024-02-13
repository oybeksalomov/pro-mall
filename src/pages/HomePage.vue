<template>
    <HeaderMenu></HeaderMenu>
    <UnderNavbarMenu />

    <!--start carousel-->
    <section class="mt-8">
        <div class="lg:container">
            <div class="relative">
                <div ref="carouselRef" class="flex snap-mandatory snap-x aspect-[12/7] lg:aspect-auto lg:rounded-[2.5rem] lg:gap-8 flex-nowrap carouselScrollbar overflow-hidden">
                    <div
                        v-for="(carouselItem, index) in carouselItems"
                        :key="index"
                        class="w-full xl:w-[105rem] lg:h-[31rem] flex-none snap-start"
                    >
                        <a href="#" class="w-full h-full relative">
                            <img :src="carouselItem.image" alt="Carousel Image" class="w-full h-full object-cover lg:rounded-[2.5rem] bg-gray_lightest">
                        </a>
                    </div>
                </div>
                <button @click="moveCarousel('right')" class="rounded-full flex bg-white absolute top-1/2 -translate-y-[50%] right-4 lg:-right-[1.9rem] shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                    <i class="pi pi-chevron-right text-lg text-main_color"></i>
                </button>
                <button @click="moveCarousel('left')" class="rounded-full flex bg-white absolute top-1/2 -translate-y-[50%] left-4 lg:-left-[1.9rem] shadow-md items-center justify-center w-[3.9rem] h-[3.9rem]">
                    <i class="pi pi-chevron-left text-lg text-main_color"></i>
                </button>
            </div>
        </div>
    </section>
    <!--end carousel-->

    <!--start Shopping Malls-->
    <section class="mt-12">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Торговые центры</h2>
                <button class="text-xl font-medium">Увидеть все</button>
            </div>
            <div class="mt-8 grid min-[640px]:grid-cols-2 lg:grid-cols-3 gap-8">
                <ShoppingMallCard
                    v-for="(shoppingMall, index) in shoppingMalls"
                    :key="index"
                    :shoppingMall="shoppingMall"
                    class="w-full"
                />
            </div>
        </div>
    </section>
    <!--end Shopping Malls-->

    <!--start Sales Cards-->
    <section class="mt-20">
        <div class="container">
            <div class="flex justify-between">
                <h2 class="text-5xl font-bold">Топ скидки</h2>
                <button class="text-xl font-medium">Увидеть все</button>
            </div>
            <div class="relative">
                <div ref="saleCardsRef" class="pt-8 snap-x snap-mandatory flex overflow-auto saleCardsScrollbar gap-8">
                    <SaleCard
                        v-for="(saleCard, index) in saleCards"
                        :key="index"
                        :saleCard="saleCard"
                        class="min-w-[22rem] snap-start"
                    />
                    <button @click="moveSaleCards('left')" class="absolute hidden lg:flex left-4 hover:bg-gray_icon hover:bg-opacity-20 transition-all rounded-full items-center justify-center w-12 h-12 top-1/2 -translate-y-1/2"><i class="pi pi-chevron-left text-xl text-gray_icon"></i></button>
                    <button @click="moveSaleCards('right')" class="absolute hidden lg:flex right-4 hover:bg-gray_medium hover:bg-opacity-20 transition-all rounded-full items-center justify-center w-12 h-12 top-1/2 -translate-y-1/2"><i class="pi pi-chevron-right text-xl text-gray_icon"></i></button>
                </div>
            </div>
        </div>
    </section>
    <!--end Sales Cards-->

    <!--start Top Shops-->
    <section>

    </section>
    <!--end Top Shops-->

    <!--start Top Brands-->
    <section>

    </section>
    <!--end Top Brands-->

    <!--start Subscribe-->
    <section class="mt-20">
        <div class="container">
            <div class="rounded-[3.2rem] bg-gray_subscribe flex flex-col items-center py-12 px-8">
                <h2 class="text-6xl font-semibold">Выгода с доставкой</h2>
                <div class="text-base mt-8">Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту.</div>
                <div class="bg-white flex border border-gray_light items-center rounded-full mt-8 w-full max-w-[55rem]">
                    <input type="email" placeholder="Введите e-mail" class="bg-white h-full px-[2.4rem] py-[1.6rem] outline-none rounded-full text-base w-full">
                    <button class="text-base hidden lg:block px-[2.4rem] py-[1.2rem] font-semibold m-[0.4rem] rounded-full bg-main_color text-white">Подписаться</button>
                </div>
                <button class="text-base lg:hidden mr-auto min-[475px]:mr-0 mt-4 px-[2rem] py-[1.2rem] font-semibold m-[0.4rem] rounded-full bg-main_color text-white">Подписаться</button>
                <div class="text-sm mt-8 lg:text-center lg:max-w-[55rem]">Нажимая «Подписаться» вы соглашаетесь с <span class="text-main_color">Условиями использования сайта</span> и <span class="text-main_color">Политикой обработки персональных данных.</span></div>
            </div>
        </div>
    </section>
    <!--end Subscribe-->

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
                                v-for="(subItem, index) in menuItem.subItems"
                                :key="index"
                                class="text-md text-gray_icon w-full mb-5"
                            >
                                <router-link to="#">{{subItem.label}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="flex-col items-start flex">
                        <svg width="134" height="30" viewBox="0 0 134 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="134" height="30" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_220_13317" transform="matrix(0.00101626 0 0 0.0045393 0 -0.00613144)"/>
                                </pattern>
                                <image id="image0_220_13317" width="984" height="223" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
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
import HeaderMenu from '../components/HeaderMenu.vue'
import ShoppingMallCard from '../components/ShoppingMallCard.vue'
import SaleCard from "../components/SaleCard.vue";
import {ref, onMounted, onBeforeMount} from "vue";
import UnderNavbarMenu from "../components/UnderNavbarMenu.vue";
import carouselImage1 from "../assets/Rectangle 6.svg"
import carouselImage2 from "../assets/banner_2.svg"
import carouselImage3 from "../assets/44b38499-9532-4df0-a8c7-831997444c13.webp"
import mallImage1 from "../assets/samarqand_darvoza.jpg"
import mallImage2 from "../assets/mega_planet.jpg"
import mallImage3 from "../assets/atlas.jpeg"
import saleImage from "../assets/Frame 48096434.svg"

const carouselRef = ref(null)
const saleCardsRef = ref(null)
const liMenuItemsRef = ref(null)
const carouselBannerItems = ref([
    {id: 1, image: carouselImage1},
    {id: 2, image: carouselImage2},
    {id: 3, image: carouselImage3},
    {id: 4, image: carouselImage2},
])
const carouselItems = ref([]);
const shoppingMalls = ref([
    {name: 'Samarqand Darvoza', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '2.5 км'},
    {name: 'Mega Planet', address: '15 улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '3 км'},
    {name: 'Aviator', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '5.5 км'},
    {name: 'Samarqand Darvoza', address: '51 улица Самарканд Дарвоза, Ташкент', image: mallImage1, distance: '4.7 км'},
    {name: 'Eco Bozor', address: '5a улица Самарканд Дарвоза, Ташкент', image: mallImage2, distance: '6 км'},
    {name: 'Atlas', address: '22 улица Самарканд Дарвоза, Ташкент', image: mallImage3, distance: '1 км'},
])
const saleCards = ref([
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "New Balance"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "New Balance"},
    {image: saleImage, label: "Balenciaga"},
    {image: saleImage, label: "Adidas"},
    {image: saleImage, label: "Balenciaga"}
])
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

const moveCarousel = (direction) => {
    if(carouselRef.value) {
        const carouselItemWidth = carouselRef.value.children[0].offsetWidth + (screen.width < 1024 ? 0 : 20)
        const scrollLeft = carouselRef.value.scrollLeft
        const scrollWidth = carouselRef.value.scrollWidth
        const timeOut = screen.width < 1024 ? 500 : 700
        const newIndex = direction === 'left' ? scrollLeft - carouselItemWidth : scrollLeft + carouselItemWidth;

        carouselRef.value.scrollTo({
            left: newIndex,
            behavior: 'smooth',
        });

        if(scrollLeft > scrollWidth * 0.7) {
            setTimeout(() => {
                carouselRef.value.scrollTo({
                    left: scrollWidth / 2
                })
            }, timeOut)
        } else if(scrollLeft < scrollWidth * 0.3) {
            setTimeout(() => {
                carouselRef.value.scrollTo({
                    left: scrollWidth / 2
                })
            }, timeOut)
        }
    }
}

const moveSaleCards = (direction) => {
    if (saleCardsRef.value) {
        const saleCardWidth = saleCardsRef.value.children[0].offsetWidth + 20
        const scrollLeft = saleCardsRef.value.scrollLeft
        const newIndex = direction === 'left' ? scrollLeft - saleCardWidth : scrollLeft + saleCardWidth;

        saleCardsRef.value.scrollTo({
            left: newIndex,
            behavior: 'smooth',
        });
    }
}
const openSubItems = (index) => {
    footerMenuItems.value[index].isOpen = !footerMenuItems.value[index].isOpen
}

const giveWidth = () => {
    if(liMenuItemsRef.value) {
        let liMenuWidth = 0

        for(let liMenuItem of liMenuItemsRef.value) {
            liMenuWidth = liMenuItem.children[0].offsetWidth
            liMenuItem.children[1].classList.add(`max-w-[${liMenuWidth}px]`)
        }
    }

}

onBeforeMount(() => {
    carouselItems.value = [...carouselBannerItems.value, ...carouselBannerItems.value, ...carouselBannerItems.value]
})
onMounted(() => {
    carouselRef.value.scrollTo({
        left: carouselRef.value.scrollWidth / 2
    })
    setInterval(() => {
        moveCarousel('right')
    }, 3000)

    giveWidth()
})
</script>

<style scoped>
.carouselScrollbar,
.saleCardsScrollbar {
    scrollbar-width: none;
}
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
