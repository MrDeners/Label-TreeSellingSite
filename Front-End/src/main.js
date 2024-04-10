import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps';

import router from './Router/router.ts'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
});

const app= createApp(App);
app.config.globalProperties.axios = axios;
app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(createYmaps, {
    apiKey: "5b50ad09-5506-4e23-8dfd-764d028f9ed1"
});
app.mount('#app');
