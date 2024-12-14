import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/plugins/i18n";
import Home from "../views/Home.vue";
// import { useHead } from "@vueuse/head";
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "titles.home",
        // metaTags: [
        //   {
        //     property: 'og:title',
        //     content: 'Квартиры в Ташкенте – Аренда и покупка по лучшим ценам'
        //   },
        //   {
        //     property: 'og:description',
        //     content: 'Ищете квартиру в Ташкенте? Найдите подходящее жилье для аренды или покупки. Широкий выбор, выгодные условия, удобный поиск.'
        //   },
        //   {
        //     property: 'keywords',
        //     content: 'квартиры в Ташкенте, аренда квартиры, аренда квартир в Ташкенте, квартира аренда Ташкент'
        //   }
        // ]
      },
    },
    {
      path: "/mortgage",
      name: "Ипотека",
      component: () => import("@/views/Mortgage.vue"),
      meta: {
        title: "titles.mortgage",
        // metaTags: [
        //   {
        //     property: 'og:title',
        //     content: 'Ипотека в Ташкенте – Доступное жилье с выгодными условиями'
        //   },
        //   {
        //     property: 'og:description',
        //     content: 'Подберите удобную ипотеку в Ташкенте. Большой выбор предложений, понятные условия и помощь в оформлении. Сделайте шаг к своему дому уже сегодня!'
        //   },
        //   {
        //     property: 'keywords',
        //     content: 'квартиры в ипотеку Ташкент, ипотека в Ташкенте, оформить ипотеку в Ташкенте'
        //   }
        // ]
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

  scrollBehavior() {
    return { top: 0 };
  },
});

// router.afterEach((to) => {
//   document.title = to.meta.title || "Vitrina";
// });

router.afterEach((to) => {
  const titleKey = to.meta.title;
  document.title = titleKey ? i18n.global.t(titleKey) : "Vitrina";
  const { meta } = to
  // useHead({
  //   meta: meta.metaTags || []
  // })
});
export default router;
