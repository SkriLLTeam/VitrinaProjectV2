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
          <li
            class="header__nav-list_item"
            v-for="(item, index) in links"
            :key="index"
          >
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

        <button @click="toggleLanguage">
          {{ currentLanguage.toUpperCase() }}
        </button>
      </div>
    </nav>

    <nav class="container header__mob">
      <div class="header__nav-right">
        <router-link to="/" class="header__nav-logo">
          <img src="@assets/images/logo.svg" alt="" />
        </router-link>
        <button class="header__mob-burger__btn" @click="burgerOpen">
          <img src="@assets/images/icons/bar.svg" alt="" v-if="!isBurgerOpen" />
          <img src="@assets/images/icons/close.svg" alt="" v-else />
        </button>
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
          <button class="btn" @click="orderModalOpen">Оставить заявку</button>
        </div>
      </div>
    </nav>
  </header>
  <Modal v-if="isOrderModal" @orderModalClose="orderModalClose" />
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Modal from "../UI/Modal.vue";
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
const toggleLanguage = () => {
  locale.value = locale.value === "ru" ? "uz" : "ru";
  currentLanguage.value = locale.value;
};
</script>

<style lang="scss" scoped></style>
