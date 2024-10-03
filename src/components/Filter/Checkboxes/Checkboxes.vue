<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <div class="filter__form-checkboxes">
      <div v-for="(checkbox, index) in checkboxes" :key="index">
        <input
          type="checkbox"
          v-model="checkbox.checked"
          class="hidden-checkbox"
        />

        <button
          class="revbtn filter__form-checkboxes-btn"
          :class="{ active: checkbox.checked }"
          @click="$emit('toggleCheckbox', index)"
        >
          {{ checkbox.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labeltitle: String,
  checkboxes: Array,
});
</script>

<style lang="scss" scoped></style>
