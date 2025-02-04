<template>
  <transition name="fade" mode="out-in">
    <div>
      <Loader v-if="isLoading" />
      <div v-show="!isLoading">
        <Banner subClass="banner__wrapper" mainClass="banner">
          <h1 class="banner__title">{{ $t("banners.home_banner") }}</h1>
        </Banner>

        <Filter :disctrictsData="disctrictsData" />
        <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
          <i class="far fa-arrow-to-top"></i>
        </button>
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
import { computed, ref, onMounted } from "vue";
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

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
const categoryMapping = {
  1: "flats",
  2: "commercial",
  3: "newBuildings",
  4: "houses",
};
const {
  data: advertisementsData,
  refetch,
  isLoading,
} = useQuery({
  queryKey: [
    computedPage,
    locale,
    filterStore.filtersApplied,
    JSON.stringify(filterStore.filters),
  ],

  queryFn: async () => {
    const params = new URLSearchParams();
    params.append("limit", limit);
    params.append("offset", (filterStore.currentPage - 1) * limit);

    if (!filterStore.filtersApplied) {
      const response = await axios.get(
        `${advertisements}?${params.toString()}`
      );
      return response.data;
    }

    if (filterStore.filters.operation_type) {
      params.append("operation_type", filterStore.filters.operation_type);
    }

    const categoryId = filterStore.filters.category_id;
    if (categoryId) {
      const activeCategory = categoryMapping[categoryId];
      if (activeCategory && filterStore.filters[activeCategory]) {
        const activeFilters = filterStore.filters[activeCategory];

        for (const key in activeFilters) {
          const value = activeFilters[key];

          if (key === "checkboxes") continue;
          if (key === "rooms" && Array.isArray(value)) {
            if (value.length > 0) {
              params.append(key, value.join(","));
            }
          }
          else if (key === "is_studio") {
            params.append(key, value ? "true" : "false");
          }
          else if (value !== null && value !== undefined) {
            params.append(key, value);
          }
        }
      }
      params.append("category_id", categoryId);
    }

    const response = await axios.get(`${advertisements}?${params.toString()}`);
    console.log(`${advertisements}?${params.toString()}`);
    

    return response.data;
  },
  refetchOnWindowFocus: false,
});


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
