<template>
  <select class="selectUI" :value="modelValue" @change="updateValue">
    <option value="default" disabled>{{ $t("form.choose") }}</option>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
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
