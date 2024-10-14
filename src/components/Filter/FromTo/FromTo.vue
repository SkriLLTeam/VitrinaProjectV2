<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <div class="filter__form-from-to">
      <InputUI
        v-model="fromValue"
        :placeholder="$t('form.from')"
        :required="false"
        v-mask="maskOptions"
      />
      <InputUI
        v-model="toValue"
        :placeholder="$t('form.to')"
        :required="false"
        v-mask="maskOptions"
      />
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

watch([fromValue, toValue], ([newFrom, newTo]) => {
  const sanitizedFrom = newFrom ? newFrom.toString().replace(/\D/g, "") : null;
  const sanitizedTo = newTo ? newTo.toString().replace(/\D/g, "") : null;

  // Обновляем стор с очищенными данными
  filterStore.updateFilter(props.filterFromKey, sanitizedFrom);
  filterStore.updateFilter(props.filterToKey, sanitizedTo);
});

const resetValues = () => {
  fromValue.value = null;
  toValue.value = null;
};
defineExpose({
  resetValues,
});

const maskOptions = ref({
  mask: Number, // Числовой ввод
  signed: false, // Без отрицательных чисел
  thousandsSeparator: " ", // Разделитель тысяч — пробел
  radix: ",", // Разделитель десятичных знаков — запятая
  mapToRadix: ["."], // Учитываем точку как разделитель
  min: 0,
});
</script>

<style lang="scss" scoped,></style>
