import {ref} from 'vue';
import {defineStore} from "pinia";
import axios from 'axios'

export const useProductsStore = defineStore('searchStore', () => {
    const products= ref([]);

    const getProducts = async() => {
        while (true) {
            try {
                const res = await axios.get('link');
                products.value = res.data;
                break;
            } catch (error) {
                console.error('Fetch error: ', error);
                setTimeout(() => {}, 3000);
            }
        }
    }

    return {
        products, getProducts
    }
})
