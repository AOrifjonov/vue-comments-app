import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import CommentPage from '@/pages/CommentPage';
import AboutPage from '@/pages/AboutPage';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/comment',
        component: CommentPage,
    },
    {
        path: '/about',
        component: AboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})  

export default router;