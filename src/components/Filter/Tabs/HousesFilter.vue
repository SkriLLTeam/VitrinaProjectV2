<template>
  <form class="filter__form house" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-house-top">
        <FromTo
          category="houses"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          category="houses"
          filterFromKey="house_quadrature_from"
          filterToKey="house_quadrature_to"
          :labeltitle="$t('tabs.house_quadrature')"
        />
      </div>
      <div class="filter__form-newbuilding-bottom">
        <FromTo
          category="houses"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FilterSelect
          category="houses"
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
      <div class="filter__form-house-top">
        <FromTo
          category="houses"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          category="houses"
          filterFromKey="house_quadrature_from"
          filterToKey="house_quadrature_to"
          :labeltitle="$t('tabs.house_quadrature')"
        />
        <FromTo
          category="houses"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FilterSelect
          category="houses"
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
