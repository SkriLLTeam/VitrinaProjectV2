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
import { ref, watch, onMounted } from "vue";
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
  category: String,
});

// Записываем значения в стор
watch([fromValue, toValue], ([newFrom, newTo]) => {
  const sanitizedFrom = newFrom ? newFrom.toString().replace(/\D/g, "") : null;
  const sanitizedTo = newTo ? newTo.toString().replace(/\D/g, "") : null;

  filterStore.updateFilter(props.category, props.filterFromKey, sanitizedFrom);
  filterStore.updateFilter(props.category, props.filterToKey, sanitizedTo);
});
// Визуальный сброс инпутов
watch(
  () => filterStore.resetTrigger,
  () => {
    fromValue.value = null;
    toValue.value = null;
  }
);
// Для восстановление фильтра при переходе назад
onMounted(() => {
  fromValue.value = filterStore.getFilter(props.category, props.filterFromKey);
  toValue.value = filterStore.getFilter(props.category, props.filterToKey);
});

// Маска номер
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
