<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <SelectUI v-model="selectedValue" :options="list" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFiltersStore } from "@/stores/FiltersStore";
import SelectUI from "@/components/UI/Forms/SelectUI.vue";

const selectedValue = ref("default");
const filterStore = useFiltersStore();

const props = defineProps({
  labeltitle: String,
  list: {
    typeof: Array,
    default: [],
  },
  modelValue: Object,
  filterKey: String,
});

watch(selectedValue, (newValue) => {
  filterStore.updateFilter(props.filterKey, newValue);
});
</script>

<style lang="scss" scoped></style>
