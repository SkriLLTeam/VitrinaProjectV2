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

<!-- <div class="banner__wrapper-content">
    <h1 class="banner__wrapper-content-title"></h1>
    <p class="banner__wrapper-content-subtitle"></p>
  </div> -->
