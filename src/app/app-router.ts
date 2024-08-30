import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/ui/home-page.vue';
import TenderId from '@/pages/tender-id/ui/tender-id-page.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/tender/:id', component: TenderId },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
