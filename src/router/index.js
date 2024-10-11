import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/plugins/i18n";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Главная",
      },
    },
    {
      path: "/mortgage",
      name: "Ипотека",
      component: () => import("@/views/Mortgage.vue"),
      meta: {
        title: "Ипотека",
      },
    },
    {
      path: "/career",
      name: "Карьера",
      component: () => import("@/views/Career.vue"),
      meta: {
        title: "Карьера",
      },
    },
    {
      path: "/about",
      name: "О нас",
      component: () => import("@/views/AboutUs.vue"),
      meta: {
        title: "О нас",
      },
    },
    {
      path: "/apartament/:id",
      name: "Карточка квартиры",
      component: () => import("@/views/ApartamentItem.vue"),
      meta: {
        title: "Объявления",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Ошибка",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Vitrina";
});
export default router;
