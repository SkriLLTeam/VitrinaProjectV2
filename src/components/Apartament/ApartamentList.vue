<template>
  <section class="apartament__list container">
    <h2 v-if="filterStore.isTitleVisible" class="apartament__list-title">
      {{ $t("contents.title_home") }}
    </h2>

    <div class="apartament__list-wrapper">
      <div
        v-if="apartamentList && apartamentList.length"
        class="apartament__list-wrapper-inner"
      >
        <CardUi
          v-for="apartament in apartamentList"
          :key="apartament.id"
          :apartament="apartament"
        />
      </div>
      <div v-else class="apartament__list-wrapper-nothing">
        <p>Ничего не найдено</p>
      </div>
      <div v-show="apartamentList && apartamentList.length">
        <Paginate
          :page-count="totalPages"
          :force-page="currentPage"
          :click-handler="changePage"
          :container-class="'apartament__list-wrapper-pagination'"
          :prev-text="prevIcon"
          :next-text="nextIcon"
          :page-class="'apartament__list-wrapper-pagination-item'"
          :prev-class="'apartament__list-wrapper-pagination-prev'"
          :next-class="'apartament__list-wrapper-pagination-next'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFiltersStore } from "@/stores/FiltersStore";
import CardUi from "../UI/CardUi.vue";
import Paginate from "vuejs-paginate-next";
const filterStore = useFiltersStore();

const props = defineProps({
  apartamentList: {
    type: Array,
  },
  totalPages: {
    type: Number,
  },
  isFilterActive: {
    type: Boolean,
  },
  currentPage: {
    type: Number,
  },
});

const emit = defineEmits(["changePage"]);

const changePage = (page) => {
  emit("changePage", page);
};

// Иконки для кнопок
const prevIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.08 11.6199C6.12759 11.4972 6.19896 11.385 6.29 11.2899L11.29 6.28994C11.3832 6.1967 11.4939 6.12274 11.6158 6.07228C11.7376 6.02182 11.8681 5.99585 12 5.99585C12.2663 5.99585 12.5217 6.10164 12.71 6.28994C12.8032 6.38318 12.8772 6.49387 12.9277 6.61569C12.9781 6.73751 13.0041 6.86808 13.0041 6.99994C13.0041 7.26624 12.8983 7.52164 12.71 7.70994L9.41 10.9999H17C17.2652 10.9999 17.5196 11.1053 17.7071 11.2928C17.8946 11.4804 18 11.7347 18 11.9999C18 12.2652 17.8946 12.5195 17.7071 12.707C17.5196 12.8946 17.2652 12.9999 17 12.9999H9.41L12.71 16.2899C12.8037 16.3829 12.8781 16.4935 12.9289 16.6154C12.9797 16.7372 13.0058 16.8679 13.0058 16.9999C13.0058 17.132 12.9797 17.2627 12.9289 17.3845C12.8781 17.5064 12.8037 17.617 12.71 17.7099C12.617 17.8037 12.5064 17.8781 12.3846 17.9288C12.2627 17.9796 12.132 18.0057 12 18.0057C11.868 18.0057 11.7373 17.9796 11.6154 17.9288C11.4936 17.8781 11.383 17.8037 11.29 17.7099L6.29 12.7099C6.19896 12.6148 6.12759 12.5027 6.08 12.3799C5.97998 12.1365 5.97998 11.8634 6.08 11.6199Z" />
</svg>
`;
const nextIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z" />
</svg>
`;
</script>
