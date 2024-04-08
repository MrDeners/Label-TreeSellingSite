import axios from 'axios'

export default {
    state: {
        products: []
    },
    mutations: {
        setObjects: (state, objects) => { state.profucts = objects; }
    },
    getters: {
        getElements: (state) => { return state.products; }
    },
    actions: {
        fetchData(context) {
            axios.get('link')
                .then(response => context.commit('setObjects', response.data))
        }
    }
}
