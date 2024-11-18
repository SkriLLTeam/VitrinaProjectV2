<template>
  <header class="header">
    <nav class="container header__nav">
      <div class="header__nav-right">
        <router-link to="/" class="header__nav-logo">
          <img src="@assets/images/logo.svg" alt="" />
        </router-link>
        <ul class="header__nav-list">
          <li class="header__nav-list_item">
            <router-link to="/" class="header__nav-list_item-link">
              {{ $t("menu.home") }}
            </router-link>
          </li>
          <li class="header__nav-list_item" v-for="(item, index) in links" :key="index">
            <router-link :to="item.path" class="header__nav-list_item-link">
              {{ $t(item.title) }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="header__nav-right-wrapper">
        <button class="btn" @click="orderModalOpen">
          {{ $t("button.request") }}
        </button>

        <div class="header__nav-right-wrapper-drop">
          <button class="header__nav-right-wrapper-drop-btn" @click="toggleDropdown">
            {{ currentLanguage.toUpperCase() }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
            >
              <path d="M0 0L5 5L10 0H0Z" fill="white" />
            </svg>
          </button>

          <div v-if="isDropdownOpen" class="header__nav-right-wrapper-drop-menu">
            <span @click="changeLanguage('ru')">Русский язык</span>
            <span @click="changeLanguage('uz')">O’zbek tili</span>
          </div>
        </div>
      </div>
    </nav>

    <nav class="container header__mob">
      <div class="header__nav-right">
        <router-link to="/" class="header__nav-logo">
          <img src="@assets/images/logo.svg" alt="" />
        </router-link>

        <div class="header__mob-wrapper">
          <div class="header__mob-wrapper-drop">
            <button class="header__mob-wrapper-drop-btn" @click="toggleDropdown">
              {{ currentLanguage.toUpperCase() }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
              >
                <path d="M0 0L5 5L10 0H0Z" fill="white" />
              </svg>
            </button>

            <div class="header__mob-wrapper-drop-menu" v-if="isDropdownOpen">
              <span @click="changeLanguage('ru')">Русский язык</span>
              <span @click="changeLanguage('uz')">O’zbek tili</span>
            </div>
          </div>

          <button class="header__mob-burger__btn" @click="burgerOpen">
            <img src="@assets/images/icons/bar.svg" alt="" v-if="!isBurgerOpen" />
            <img src="@assets/images/icons/close.svg" alt="" v-else />
          </button>
        </div>
      </div>
      <div class="header__mob-burger" v-if="isBurgerOpen">
        <div class="header__mob-burger-block">
          <ul class="header__nav-list-mob">
            <li class="header__nav-list_item" @click="burgerOpen">
              <router-link to="/" class="header__nav-list_item-link">
                {{ $t("menu.home") }}
              </router-link>
            </li>
            <li
              class="header__nav-list_item"
              @click="burgerOpen"
              v-for="(item, index) in links"
              :key="index"
            >
              <router-link :to="item.path" class="header__nav-list_item-link">
                {{ $t(item.title) }}
              </router-link>
            </li>
          </ul>
          <button class="btn" @click="orderModalOpen">{{ $t("order") }}</button>
        </div>
      </div>
    </nav>
  </header>
  <Modal v-if="isOrderModal" @orderModalClose="orderModalClose" />
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useQueryClient } from "@tanstack/vue-query";
import Modal from "../UI/Modal.vue";
import router from "@/router";
import i18n from "@/plugins/i18n";
const queryClient = useQueryClient();
const links = ref([
  {
    title: "menu.mortgage",
    path: "/mortgage",
  },
  {
    title: "menu.career",
    path: "/career",
  },
  {
    title: "menu.about",
    path: "/about",
  },
]);
const isOrderModal = ref(false);
const isBurgerOpen = ref(false);
const orderModalOpen = () => {
  isOrderModal.value = true;
  isBurgerOpen.value = false;

  document.body.style.overflow = "hidden";
};
const burgerOpen = () => {
  if (!isBurgerOpen.value) {
    isBurgerOpen.value = !isBurgerOpen.value;
    document.body.style.overflow = "hidden";
  } else {
    isBurgerOpen.value = !isBurgerOpen.value;
    document.body.style.overflow = "auto";
  }
};
const orderModalClose = () => {
  isOrderModal.value = false;
  document.body.style.overflow = "auto";
};

const { locale } = useI18n();
const currentLanguage = ref(locale.value);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const changeLanguage = (lang) => {
  locale.value = lang;
  currentLanguage.value = locale.value;
  i18n.global.locale = lang;
  queryClient.refetchQueries();
  isDropdownOpen.value = false;

  // Обновление заголовка вкладки
  const currentRoute = router.currentRoute.value;
  const titleKey = currentRoute.meta.title;
  document.title = titleKey ? i18n.global.t(titleKey) : "Vitrina";
};
</script>

<style lang="scss" scoped></style>
