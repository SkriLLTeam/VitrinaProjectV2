<template>
  <input
    :type="inputType"
    class="inputUI"
    :class="classType"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    :required="required"
  />
</template>

<script setup>

const props = defineProps({
  placeholder: String,
  classType: String,
  inputType: String,
  modelValue: String,
  required:Boolean,
  
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
