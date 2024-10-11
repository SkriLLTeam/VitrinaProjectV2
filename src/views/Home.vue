<template>
  <transition name="fade" mode="out-in">
    <div>
      <Loader v-if="isLoading" />
      <div v-show="!isLoading">
        <Banner subClass="banner__wrapper" mainClass="banner">
          <h1 class="banner__title">{{ $t("banners.home_banner") }}</h1>
        </Banner>
        <Filter :disctrictsData="disctrictsData" @applyFilters="applyFilters" />
        <ApartamentList
          :isFilterActive="isFilterActive"
          :totalPages="totalPages"
          @changePage="handlePageChange"
          :apartamentList="advertisementsData?.results"
          :currentPage="currentPage"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { advertisements, districts } from "@/utils/util";
import { useFiltersStore } from "@/stores/FiltersStore";
import axios from "axios";
import ApartamentList from "@/components/Apartament/ApartamentList.vue";
import Filter from "@/components/Filter/Filter.vue";
import Banner from "@/components/UI/Banner.vue";
// import Test from "@/components/UI/Test.vue";
const isFilterActive = ref(false);
const currentPage = ref(1);
const limit = 15;
const filterStore = useFiltersStore();
const {
  data: advertisementsData,
  refetch,
  isLoading,
} = useQuery({
  queryKey: [currentPage],
  queryFn: async () => {
    const params = new URLSearchParams();
    params.append("limit", limit);
    params.append("offset", (currentPage.value - 1) * limit);
    const filters = filterStore.filters;
    for (const key in filters) {
      if (filters[key] !== null && filters[key] !== undefined) {
        params.append(key, filters[key]);
      }
    }

    const response = await axios.get(`${advertisements}?${params.toString()}`);
    console.log(`Отправка запроса: ${advertisements}?${params.toString()}`);

    return response.data;
  },
  keepPreviousData: true,
  refetchOnWindowFocus: false,
});

const { data: disctrictsData } = useQuery({
  queryKey: ["districts"],
  queryFn: async () => {
    const response = await axios.get(`${districts}`);
    return response.data;
  },
});
const totalPages = computed(() => {
  if (advertisementsData?.value?.count) {
    return Math.ceil(advertisementsData.value.count / limit);
  }
  return 1;
});

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};

const applyFilters = () => {
  console.log("applyFilters called in Home component");
  currentPage.value = 1;
  isFilterActive.value = !isFilterActive.value;

  refetch();
};

watch(currentPage, (newValue, oldValue) => {
  console.log(`Current page changed from ${oldValue} to ${newValue}`);
});
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
