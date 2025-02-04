<template>
  <form class="filter__form commersial" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-house-top">
        <FromTo
          category="commercial"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FilterSelect
          category="commercial"
          :labeltitle="$t('tabs.district')"
          filterKey="district_id"
          :list="districts"
        />
      </div>
      <div class="filter__form-commersial-bottom">
        <FromTo
          category="commercial"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
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
      <div class="filter__form-commersial-top">
        <FromTo
          category="commercial"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          category="commercial"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <div class="filter__form-commersial-mob">
          <FilterSelect
            category="commercial"
            :labeltitle="$t('tabs.district')"
            filterKey="district_id"
            :list="districts"
          />
        </div>
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
