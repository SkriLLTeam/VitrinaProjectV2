<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <div class="filter__form-from-to">
      <InputUI v-model="fromValue" :placeholder="$t('form.from')" :required="false" />
      <InputUI v-model="toValue" :placeholder="$t('form.to')" :required="false" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFiltersStore } from "@/stores/FiltersStore";
import InputUI from "@/components/UI/Forms/InputUI.vue";

const filterStore = useFiltersStore();
const fromValue = ref(null);
const toValue = ref(null);

const props = defineProps({
  labeltitle: String,
  modelValue: Object,
  filterFromKey: String,
  filterToKey: String,
});

// Следим за изменением полей и обновляем стор
watch([fromValue, toValue], ([newFrom, newTo]) => {
  filterStore.updateFilter(props.filterFromKey, newFrom);
  filterStore.updateFilter(props.filterToKey, newTo);
});

const resetValues = () => {
  fromValue.value = null;
  toValue.value = null;
};
defineExpose({
  resetValues,
});
</script>

<style lang="scss" scoped,></style>
