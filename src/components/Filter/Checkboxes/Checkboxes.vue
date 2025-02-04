<template>
  <div class="filter__form-block">
    <label class="filter__form-block-label"> {{ labeltitle }} </label>
    <div class="filter__form-checkboxes">
      <div v-for="(checkbox, index) in checkboxes" :key="index">
        <input
          type="checkbox"
          :checked="checkbox.checked"
          class="hidden-checkbox"
          @change="$emit('toggleCheckbox', category, index)"
        />

        <button
          class="revbtn filter__form-checkboxes-btn"
          :class="{ active: checkbox.checked }"
          @click.prevent="$emit('toggleCheckbox', category, index)"
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
  category: String,
});
</script>

<style lang="scss" scoped></style>
