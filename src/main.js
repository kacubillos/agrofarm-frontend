import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)

app.mount('#app')