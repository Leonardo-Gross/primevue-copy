import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import globals from './globals';
import './styles/tailwind.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.config.globalProperties.$enums = globals;
createApp(App).use(router).mount('#app');
