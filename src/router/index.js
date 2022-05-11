import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Films from "@/components/Films.vue";
import Ships from "@/components/Ships.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/starships',
    name: 'Ships',
    component: Ships
  }
]


export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;