import { createWebHistory, createRouter } from "vue-router";

import HomePage from '../views/HomePage.vue';
import AccessAccount from '../views/AccessAccount.vue';
import UserLogin from '../views/UserLogin.vue';
import UserSignup from '../views/UserSignup.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/access-account', name: 'AccessAccount', component: AccessAccount },
    { path: '/auth/login', name: 'UserLogin', component: UserLogin },
    { path: '/auth/signup', name: 'UserSignup', component: UserSignup }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;