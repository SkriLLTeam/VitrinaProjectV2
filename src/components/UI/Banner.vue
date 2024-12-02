<template>
  <section :class="mainClass">
    <div :class="['container', subClass]">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  mainClass: {
    type: String,
    default: "",
  },
  subClass: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>

