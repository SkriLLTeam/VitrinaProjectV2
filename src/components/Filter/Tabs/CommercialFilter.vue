<template>
  <form class="filter__form commersial" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-house-top">
        <FromTo
          ref="quadratureRef"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <!-- не должно быть  -->
        <FilterSelect
          ref="selectDistrict"
          :labeltitle="$t('tabs.district')"
          filterKey="district_id"
          :list="districts"
        />
      </div>
      <div class="filter__form-commersial-bottom">
        <FromTo
          ref="priceRef"
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
          ref="quadratureRefMob"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          :labeltitle="$t('tabs.quadrature')"
        />
        <!-- не должно быть  -->
        <FromTo
          ref="priceRefMob"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <div class="filter__form-commersial-mob">
          <FilterSelect
            ref="selectDistrictMob"
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
import { ref } from "vue";
import { useFiltersStore } from "@/stores/FiltersStore";
import FromTo from "../FromTo/FromTo.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const priceRef = ref(null);
const quadratureRef = ref(null);
const priceRefMob = ref(null);
const quadratureRefMob = ref(null);
const selectDistrict = ref(null);
const selectDistrictMob = ref(null);

const filterStore = useFiltersStore();
const props = defineProps({
  districts: Array,
  selectedOperation: String,
  category: Number,
});

const resetAll = () => {
  if (priceRef.value) priceRef.value.resetValues();
  if (quadratureRef.value) quadratureRef.value.resetValues();
  if (priceRefMob.value) priceRefMob.value.resetValues();
  if (quadratureRefMob.value) quadratureRefMob.value.resetValues();
  if (selectDistrict.value) selectDistrict.value.resetValues();
  if (selectDistrictMob.value) selectDistrictMob.value.resetValues();
  filterStore.resetFilters();
};

const applyFilters = () => {
  filterStore.updateFilter("operation_type", props.selectedOperation);
  filterStore.updateFilter("category_id", props.category);
  filterStore.triggerRefetch();
  filterStore.hideTitle();
  filterStore.currentPage = 1;
};
</script>
