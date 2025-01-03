<template>
  <transition name="fade" mode="out-in">
    <div>
      <Loader v-if="isLoading" />
      <div v-show="!isLoading">
        <Banner subClass="banner__wrapper" mainClass="banner">
          <h1 class="banner__title">{{ $t("banners.home_banner") }}</h1>
        </Banner>
        <Filter :disctrictsData="disctrictsData" />
        <ApartamentList
          :totalPages="totalPages"
          @changePage="handlePageChange"
          :apartamentList="advertisementsData?.results"
          :currentPage="computedPage"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { advertisements, districts } from "@/utils/util";
import { useFiltersStore } from "@/stores/FiltersStore";
import { useI18n } from "vue-i18n";
import axios from "axios";
import ApartamentList from "@/components/Apartament/ApartamentList.vue";
import Filter from "@/components/Filter/Filter.vue";
import Banner from "@/components/UI/Banner.vue";

const limit = 15;
const filterStore = useFiltersStore();
const computedPage = computed(() => filterStore.currentPage);
const { locale } = useI18n();

const {
  data: advertisementsData,
  refetch,
  isLoading,
} = useQuery({
  queryKey: [computedPage, locale],
  queryFn: async () => {
    const params = new URLSearchParams();
    params.append("limit", limit);
    params.append("offset", (filterStore.currentPage - 1) * limit);
    const filters = filterStore.filters;
    for (const key in filters) {
      if (
        filters[key] !== null &&
        filters[key] !== undefined &&
        filters[key] !== "default"
      ) {
        params.append(key, filters[key]);
      }
    }
    const response = await axios.get(`${advertisements}?${params.toString()}`);
    // console.log(`Отправка запроса: ${advertisements}?${params.toString()}`);
    return response.data;
  },
  refetchOnWindowFocus: false,
});

// console.log(advertisementsData);



const { data: disctrictsData } = useQuery({
  queryKey: ["districts", locale],
  queryFn: async () => {
    const response = await axios.get(`${districts}`);
    return response.data;
  },
});

const totalPages = computed(() => {
  if (advertisementsData?.value?.total) {
    return Math.ceil(advertisementsData.value.total / limit);
  }
  return 1;
});

const handlePageChange = (newPage) => {
  filterStore.setCurrentPage(newPage);
};

filterStore.setRefetch(refetch);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
