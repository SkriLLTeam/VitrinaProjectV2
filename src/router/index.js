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
        title: "titles.home",
      },
    },
    {
      path: "/mortgage",
      name: "Ипотека",
      component: () => import("@/views/Mortgage.vue"),
      meta: {
        title: "titles.mortgage",
      },
    },
    {
      path: "/career",
      name: "Карьера",
      component: () => import("@/views/Career.vue"),
      meta: {
        title: "titles.career",
      },
    },
    {
      path: "/about",
      name: "О нас",
      component: () => import("@/views/AboutUs.vue"),
      meta: {
        title: "titles.about",
      },
    },
    {
      path: "/apartament/:id",
      name: "Карточка квартиры",
      component: () => import("@/views/ApartamentItem.vue"),
      meta: {
        title: "titles.apartament",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Ошибка",
      component: () => import("@/views/NotFoundPage.vue"),
      meta: {
        title: "titles.error",
      },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    
    // если есть сохранённая позиция (например, при "назад")
    if (savedPosition) {
      return savedPosition;
    }

    // если маршрут "home" — не трогаем скролл
    if (to.name === 'home') {
      return {};
    }

    // для остальных маршрутов — всегда вверх
    return { top: 0 };
  }
});



router.afterEach((to) => {
  const titleKey = to.meta.title;
  document.title = titleKey ? i18n.global.t(titleKey) : "Vitrina";

});
export default router;
