import { createRouter, createWebHashHistory } from 'vue-router';

import LabelView from "../pages/LabelView/LabelView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/Label', component: LabelView, alias: '/' },]
});
export default router;
