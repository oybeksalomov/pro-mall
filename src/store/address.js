import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useAddressStore = defineStore('address', () => {
    const addresses = ref([
        {id: 1, value: 'Rishton ko\'cha 81', isSelected: true},
        {id: 2, value: 'Mirzo Ulug\'bek ko\'cha 102'}
    ])
    const isAddAddressOpen = ref(false)

    const removeAddress = (id) => {
        addresses.value = addresses.value.filter(address => address.id !== id)
    }
    const toggleAddAddress = () => {
        isAddAddressOpen.value = !isAddAddressOpen.value
    }

    return {addresses, isAddAddressOpen, removeAddress, toggleAddAddress}
})