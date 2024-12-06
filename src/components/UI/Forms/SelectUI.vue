<template>
  <select class="selectUI" :value="modelValue" @change="updateValue">
    <option value="default" disabled>{{ $t("form.choose") }}</option>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{
        locale.toLowerCase() == "ru"
          ? option.name
          : locale.toLowerCase() == "uz"
          ? option.name_uz
          : option.name
      }}
    </option>
  </select>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// Принимаемые свойства компонента
const props = defineProps({
  options: {
    typeof: Array,
    default: [],
  },
  modelValue: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
