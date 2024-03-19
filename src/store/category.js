import {defineStore} from "pinia";
import {ref} from "vue";

export const useCategoryStore = defineStore('category', () => {
    const menuItems = ref([
        {
            id: 1,
            label: 'Электроника',
            icon: 'pi pi-apple', isOpen: false,
            items: [
                {
                    label: 'Смартфоны и телефоны',
                    isOpen: false,
                    items: [
                        {
                            label: 'Аксессуары для смартфонов',
                            icon: 'pi pi-apple',
                            isOpen: false,
                            items: [
                                {label: 'Фильтр 1'},
                                {label: 'Фильтр 2'}
                            ]
                        },
                        {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},{label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]},
                        {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}
                    ]
                },
                {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Умные часы и фитнес браслеты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Наушники и аудиотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Часы и электронные будильники', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Телевизоры и видеотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Игровые приставки', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Оптические приборы', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            ]
        },
        {
            id: 2,
            label: 'Бытовая техника',
            icon: 'pi pi-car', isOpen: false,
            items: [
                {label: 'Техника для красоты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Крупная бытовая техника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Умные часы и фитнес браслеты', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Наушники и аудиотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Часы и электронные будильники', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Телевизоры и видеотехника', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Игровые приставки', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Ноутбуки, планшеты и электронные книги', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Оптические приборы', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            ]
        },
        {
            id: 3,
            label: 'Одежда',
            icon: 'pi pi-camera', isOpen: false,
            items: [
                {label: 'Мужская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Женская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
                {label: 'Детская одежда', isOpen: false, items: [{label: 'Аксессуары для смартфонов', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Смартфоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Кнопочные телефоны', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}, {label: 'Электронные книги', icon: 'pi pi-apple', isOpen: false, items: [{label: 'Фильтр 1'}, {label: 'Фильтр 2'}]}]},
            ]
        },
        {id: 4, label: 'Обувь', isOpen: false, icon: 'pi pi-box'},
        {id: 5, label: 'Аксессуары', isOpen: false, icon: 'pi pi-box'},
        {id: 6, label: 'Красота и уход', isOpen: false, icon: 'pi pi-apple'},
        {id: 7, label: 'Здоровье', isOpen: false, icon: 'pi pi-box'},
        {id: 8, label: 'Товары для дома', isOpen: false, icon: 'pi pi-apple'},
        {id: 9, label: 'Строительство и ремонт', isOpen: false, icon: 'pi pi-box'},
        {id: 10, label: 'Автотовары', isOpen: false, icon: 'pi pi-box'},
        {id: 11, label: 'Детские товары', isOpen: false, icon: 'pi pi-box'},
        {id: 12, label: 'Хобби и творчество', isOpen: false, icon: 'pi pi-apple'},
    ])

    return {menuItems}
})