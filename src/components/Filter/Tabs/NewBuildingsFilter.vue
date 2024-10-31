<template>
  <form class="filter__form newbuild" @submit.prevent="">
    <div class="filter__form-desktop">
      <div class="filter__form-flats-top">
        <Checkboxes
          :labeltitle="$t('tabs.rooms')"
          :checkboxes="checkboxes"
          @toggleCheckbox="toggleCheckbox"
        />

        <FromTo
          ref="priceRef"
          filterFromKey="price_from"
          filterToKey="price_to"
         :labeltitle="$t('tabs.price')"
        />
        <FromTo
          ref="quadratureRef"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
         :labeltitle="$t('tabs.quadrature')"
        />
      </div>
      <div class="filter__form-newbuilding-bottom">
        <FromTo
          ref="floorRef"
          filterFromKey="floor_from"
          filterToKey="floor_to"
         :labeltitle="$t('tabs.floor')"
        />

        <FilterSelect
          ref="selectDistrict"
          :labeltitle="$t('tabs.district')"
          filterKey="district"
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
       :labeltitle="$t('tabs.rooms')"
          :checkboxes="checkboxes"
          @toggleCheckbox="toggleCheckbox"
        />
        <FromTo
          ref="priceRefMob"
          filterFromKey="price_from"
          filterToKey="price_to"
          :labeltitle="$t('tabs.price')"
        />
        <FromTo
          ref="quadratureRefMob"
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
             :labeltitle="$t('tabs.quadrature')"
        />
        <FromTo
          ref="floorRefMob"
          filterFromKey="floor_from"
          filterToKey="floor_to"
         :labeltitle="$t('tabs.floor')"
        />
        <FilterSelect
          ref="selectDistrictMob"
       :labeltitle="$t('tabs.repair')"
          filterKey="district"
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
import { ref } from "vue";
import { useFiltersStore } from "@/stores/FiltersStore";
import Checkboxes from "../Checkboxes/Checkboxes.vue";
import FromTo from "../FromTo/FromTo.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const priceRef = ref(null);
const quadratureRef = ref(null);
const floorRef = ref(null);
const priceRefMob = ref(null);
const quadratureRefMob = ref(null);
const floorRefMob = ref(null);
const selectDistrict = ref(null);
const selectDistrictMob = ref(null);
const filterStore = useFiltersStore();

const props = defineProps({
  rent: Boolean,
  sold: Boolean,
  districts: Array,
  checkboxes: Array,
  toggleCheckbox: Function,
  selectedOperation: String,
});
const resetAll = () => {
  if (priceRef.value) priceRef.value.resetValues();
  if (quadratureRef.value) quadratureRef.value.resetValues();
  if (floorRef.value) floorRef.value.resetValues();
  if (priceRefMob.value) priceRefMob.value.resetValues();
  if (quadratureRefMob.value) quadratureRefMob.value.resetValues();
  if (floorRefMob.value) floorRefMob.value.resetValues();
  if (selectDistrict.value) selectDistrict.value.resetValues();
  if (selectDistrictMob.value) selectDistrictMob.value.resetValues();
  filterStore.resetFilters();
};
const applyFilters = () => {
  filterStore.updateFilter("operation_type", props.selectedOperation);
  filterStore.triggerRefetch();
  filterStore.hideTitle();
  filterStore.currentPage = 1;
};
</script>
