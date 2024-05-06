import { createApp } from 'vue'
import App from './App.vue'
// import Comps from 'virtual-scroll-list-liudingkang'
// import 'virtual-scroll-list-liudingkang/es/style.css'
import Vant from 'vant';
import Varlet from '@varlet/ui'
// createApp(App).use(Comps).mount('#app')
const app = createApp(App);
// app.use(Vant).use(Varlet)
app.mount('#app');
