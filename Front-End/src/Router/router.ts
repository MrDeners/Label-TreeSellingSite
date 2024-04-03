import { createRouter, createWebHashHistory } from 'vue-router';

import CatalogView from '../pages/CatalogView/CatalogView.vue';
import AdminView from '../pages/AdminView/AdminView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/Catalog', component: CatalogView, alias: '/' },
        { path: '/admin', component: AdminView }
    ]
});
export default router;
