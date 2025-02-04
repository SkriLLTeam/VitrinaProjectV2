<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <SelectUI v-model="selectedValue" :options="list" />
  </div>
</template>

<script setup>
import { ref, watch,onMounted } from "vue";
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
  category: String,
});



// Записываем данные с инпута в стор
watch(selectedValue, (newValue) => {
  filterStore.updateFilter(props.category, props.filterKey, newValue);
});
// Визуальный сброс select при изменении
watch(() => filterStore.resetTrigger, () => {
  selectedValue.value = "default";
});
// Для восстановление фильтра при переходе назад
onMounted(() => {
  selectedValue.value = filterStore.getFilter(props.category, props.filterKey) || "default";
});
</script>

<style lang="scss" scoped></style>
