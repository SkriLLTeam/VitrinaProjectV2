<template>
  <form class="filter__form flats" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-flats-top">
        <Checkboxes
          category="flats"
          :labeltitle="$t('tabs.rooms')"
          :checkboxes="filterStore.getCheckboxes('flats')"
          @toggleCheckbox="filterStore.toggleCheckbox"
        />
        <FromTo
          category="flats"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FromTo
          category="flats"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
      </div>
      <div class="filter__form-flats-bottom">
        <FromTo
          category="flats"
          filterFromKey="floor_from"
          filterToKey="floor_to"
          :labeltitle="$t('tabs.floor')"
        />
        <FilterSelect
          category="flats"
          filterKey="repair_type"
          :labeltitle="$t('tabs.repair')"
          :list="repairList"
        />
        <FilterSelect
          category="flats"
          filterKey="district_id"
          :labeltitle="$t('tabs.district')"
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
          category="flats"
          :labeltitle="$t('tabs.rooms')"
          :checkboxes="filterStore.getCheckboxes('flats')"
          @toggleCheckbox="filterStore.toggleCheckbox"
        />
        <FromTo
          category="flats"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FromTo
          category="flats"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          category="flats"
          filterFromKey="floor_from"
          filterToKey="floor_to"
          :labeltitle="$t('tabs.floor')"
        />
        <FilterSelect
          category="flats"
          :labeltitle="$t('tabs.repair')"
          filterKey="repair_type"
          :list="repairList"
        />
        <FilterSelect
          category="flats"
          filterKey="district_id"
          :labeltitle="$t('tabs.district')"
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useFiltersStore } from "@/stores/FiltersStore";
import FromTo from "../FromTo/FromTo.vue";
import Checkboxes from "../Checkboxes/Checkboxes.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const filterStore = useFiltersStore();
const { t } = useI18n();

const props = defineProps({
  districts: Array,
});

const repairList = computed(() => [
  { name: t("repair.with"), id: "WITH", name_uz: t("repair.with") },
  { name: t("repair.without"), id: "WITHOUT", name_uz: t("repair.without") },
  { name: t("repair.designed"), id: "DESIGNED", name_uz: t("repair.designed") },
  { name: t("repair.rough"), id: "ROUGH", name_uz: t("repair.rough") },
  {
    name: t("repair.pre_finished"),
    id: "PRE_FINISHED",
    name_uz: t("repair.pre_finished"),
  },
]);

const resetAll = () => {
  filterStore.resetFilters();
};

const applyFilters = () => {
  filterStore.applyFilters();
};
</script>
