import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Toaster from '@meforma/vue-toaster';


createApp(App)
    .use(Toaster)
    .use(router)
    .mount('#app')
