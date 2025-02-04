<template>
  <form class="filter__form newbuild" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-flats-top">
        <Checkboxes
          category="newBuildings"
          :labeltitle="$t('tabs.rooms')"
          :checkboxes="filterStore.getCheckboxes('newBuildings')"
          @toggleCheckbox="filterStore.toggleCheckbox"
        />

        <FromTo
          category="newBuildings"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FromTo
          category="newBuildings"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
      </div>
      <div class="filter__form-newbuilding-bottom">
        <FromTo
          category="newBuildings"
          filterFromKey="floor_from"
          filterToKey="floor_to"
          :labeltitle="$t('tabs.floor')"
        />

        <FilterSelect
          category="newBuildings"
          :labeltitle="$t('tabs.district')"
          filterKey="district_id"
          :list="districts"
        />
        <button class="btn filter__form-btn" @click="applyFilters">
          {{ $t("button.show_result") }}
        </button>
        <button class="revbtn filter__form-btn" @click="resetAll">
          {{ $t("button.clear") }}
        </button>
      </div>
    </div>
    <div class="filter__form-mob">
      <div class="filter__form-flats-top">
        <Checkboxes
          category="newBuildings"
          :labeltitle="$t('tabs.rooms')"
          :checkboxes="filterStore.getCheckboxes('newBuildings')"
          @toggleCheckbox="filterStore.toggleCheckbox"
        />
        <FromTo
          category="newBuildings"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FromTo
          category="newBuildings"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          category="newBuildings"
          filterFromKey="floor_from"
          filterToKey="floor_to"
          :labeltitle="$t('tabs.floor')"
        />
        <FilterSelect
          category="newBuildings"
          :labeltitle="$t('tabs.district')"
          filterKey="district_id"
          :list="districts"
        />
        <button class="btn filter__form-btn" @click="applyFilters">
          {{ $t("button.show_result") }}
        </button>
        <button class="revbtn filter__form-btn" @click="resetAll">
          {{ $t("button.clear") }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useFiltersStore } from "@/stores/FiltersStore";
import Checkboxes from "../Checkboxes/Checkboxes.vue";
import FromTo from "../FromTo/FromTo.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const filterStore = useFiltersStore();

const props = defineProps({
  districts: Array,
});
const resetAll = () => {
  filterStore.resetFilters();
};

const applyFilters = () => {
  filterStore.applyFilters();
};
</script>
