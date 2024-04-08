import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import axios from 'axios'

import router from './Router/router.ts'
import store from './store/store.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
    components,
    directives,
})

const app= createApp(App);
app.config.globalProperties.axios = axios;
app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');
