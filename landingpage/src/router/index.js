import { createRouter, createWebHistory } from 'vue-router'
import RedirectVue from "@/views/RedirectVue.vue";
import MainPage from "@/views/MainPage.vue";
import Impressum from "@/views/Impressum.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {path: '/', component: MainPage    },
    {path: '/qr', component: RedirectVue},
    {path: '/imp', component: Impressum}
  ]
})

export default router
