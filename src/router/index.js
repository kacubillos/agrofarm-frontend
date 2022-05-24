import { createWebHistory, createRouter } from "vue-router";

import HomePage from '../views/HomePage.vue';
import AccessAccount from '../views/AccessAccount.vue';
import UserLogin from '../views/UserLogin.vue';
import UserSignup from '../views/UserSignup.vue';
import UserCrops from '../views/UserCrops.vue';
import UserCrop from '../views/UserCrop.vue';
import UserNewCrop from '../views/UserNewCrop.vue';
import UserEditCrop from '../views/UserEditCrop.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/access-account', name: 'AccessAccount', component: AccessAccount },
    { path: '/auth/login', name: 'UserLogin', component: UserLogin },
    { path: '/auth/signup', name: 'UserSignup', component: UserSignup },
    { path: '/crops', name: 'UserCrops', component: UserCrops },
    { path: '/crops/:cropId', name: 'UserCrop', component: UserCrop },
    { path: '/crops/new', name: 'UserNewCrop', component: UserNewCrop },
    { path: '/crops/edit/:cropId', name: 'UserEditCrop', component: UserEditCrop }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;