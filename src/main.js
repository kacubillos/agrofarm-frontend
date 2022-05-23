import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router'

axios.defaults.baseURL = 'http://localhost:5000/api';

let token = sessionStorage.getItem('user_token');
if(token)
    axios.defaults.headers.common['Authorization'] = token;

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')