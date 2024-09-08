import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/o_minimo_que_voce_precisa_saber_para_nao_ser_um_idiota', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')