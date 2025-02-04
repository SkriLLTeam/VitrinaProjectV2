<template>
  <div class="container filter__container">
    <div class="filter">
      <div class="filter__swap">
        <button
          class="filter__swap_btn"
          @click="selectOperation('buy')"
          :class="{ active: filterStore.filters.operation_type === 'BUY' }"
          >
          {{ $t("tabs.buy") }}
        </button>
        <button
          class="filter__swap_btn"
          @click="selectOperation('rent')"
          :class="{ active: filterStore.filters.operation_type === 'RENT' }"
          >
          {{ $t("tabs.rent") }}
        </button>
      </div>
      <div class="filter__tabs">
        <!-- Render the tab buttons -->
        <button
          v-for="(tab, index) in filteredTabs"
          :key="index"
          :class="{ active: filterStore.activeTab === index }"
          @click="updateActiveTab(index)"
          class="filter__tabs-btn"
        >
          {{ $t(tab.name) }}
        </button>
      </div>

      <!-- Render the active tab content -->
      <div class="tab-content">
        <transition name="fade" mode="out-in">
          <component
            :is="filteredTabs[filterStore.activeTab].component"
            :sold="filterStore.filters.operation_type === 'buy'"
            :rent="filterStore.filters.operation_type === 'rent'"
            :districts="disctrictsData"
            :selectedOperation="filterStore.filters.operation_type"
            :category="category"
          ></component>
   
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  computed } from "vue";
import { useFiltersStore } from "@/stores/FiltersStore";
import Tab1 from "./Tabs/FlatsFilter.vue";
import Tab2 from "./Tabs/NewBuildingsFilter.vue";
import Tab3 from "./Tabs/HousesFilter.vue";
import Tab4 from "./Tabs/CommercialFilter.vue";

const props = defineProps({
  disctrictsData: {
    type: Array,
  },
});
const filterStore = useFiltersStore();

const category = computed(() => filterStore.filters.category_id);


const tabs = [
  {
    name: "tabs.flats",
    component: Tab1,
    id: 1,
  },
  {
    name: "tabs.commercial",
    component: Tab4,
    id: 2,
  },
  {
    name: "tabs.new_building",
    component: Tab2,
    id: 3,
  },
  {
    name: "tabs.houses",
    component: Tab3,
    id: 4,
  },
];

const filteredTabs = computed(() => {
  if (filterStore.filters.operation_type === "rent") {
    return tabs.filter((tab) => tab.name !== "tabs.new_building");
  }
  return tabs;
});

const selectOperation = (type) => {
  filterStore.updateFilter(null, "operation_type", type);
  filterStore.setActiveTab(0, 1); 
  filterStore.applyFilters();
  
};

const updateActiveTab = (index) => {
  const selectedTabId = tabs[index].id;
  filterStore.setActiveTab(index, selectedTabId);
  filterStore.applyFilters();
};


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
