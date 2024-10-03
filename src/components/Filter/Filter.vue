<template>
  <div class="container filter__container">
    <div class="filter">
      <div class="filter__swap">
        <button
          class="filter__swap_btn"
          @click="selectOperation('buy')"
          :class="{ active: sold }"
        >
          {{ $t("tabs.buy") }}
        </button>
        <button
          class="filter__swap_btn"
          @click="selectOperation('rent')"
          :class="{ active: rent }"
        >
          {{ $t("tabs.rent") }}
        </button>
      </div>
      <div class="filter__tabs">
        <!-- Render the tab buttons -->
        <button
          v-for="(tab, index) in filteredTabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="updateActiveTab(index)"
          class="filter__tabs-btn"
        >
          {{ $t(tab.name)}}
        </button>
      </div>

      <!-- Render the active tab content -->
      <div class="tab-content">
        <transition name="fade" mode="out-in">
          <component
            :is="filteredTabs[activeTab].component"
            :sold="sold"
            :rent="rent"
            :districts="disctrictsData"
            @applyFilters="emitApplyFilters"
            :toggleCheckbox="toggleCheckbox"
            :checkboxes="checkboxes"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
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

const activeTab = ref(0);
const sold = ref(true);
const rent = ref(false);
const filterStore = useFiltersStore();

const tabs = [
  {
    name: "tabs.flats",
    component: Tab1,
    id: 1,
  },
  {
    name: "tabs.new_building",
    component: Tab2,
    id: 2,
  },
  {
    name: "tabs.houses",
    component: Tab3,
    id: 3,
  },
  {
    name: "tabs.commercial",
    component: Tab4,
    id: 4,
  },
];
const checkboxes = ref([
  { checked: false, val: -1, title: "Студия" },
  { checked: false, val: 1, title: "1" },
  { checked: false, val: 2, title: "2" },
  { checked: false, val: 3, title: "3" },
  { checked: false, val: 4, title: "4+" },
]);

const filteredTabs = computed(() => {
  if (rent.value) {
    return tabs.filter((tab) => tab.name !== "Новостройки");
  }
  return tabs;
});

const selectOperation = (type) => {
  if (type === "buy") {
    sold.value = true;
    rent.value = false;
  } else {
    sold.value = false;
    rent.value = true;
  }
  filterStore.updateFilter("operation_type", type);
  activeTab.value = 0;
};

const updateActiveTab = (index) => {
  activeTab.value = index;
  const selectedTabId = tabs[index].id;
  filterStore.updateFilter("category", selectedTabId);
};

const toggleCheckbox = (index) => {
  checkboxes.value[index].checked = !checkboxes.value[index].checked;
  if (checkboxes.value[index].val === -1) {
    filterStore.updateFilter("is_studio", checkboxes.value[index].checked);
  } else {
    const selectedRooms = checkboxes.value
      .filter((checkbox) => checkbox.checked && checkbox.val !== -1)
      .map((checkbox) => checkbox.val);

    filterStore.updateFilter(
      "rooms",
      selectedRooms.length ? selectedRooms : null
    );
  }
};

const emit = defineEmits(["applyFilters"]);
const emitApplyFilters = () => {
  emit("applyFilters");
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
