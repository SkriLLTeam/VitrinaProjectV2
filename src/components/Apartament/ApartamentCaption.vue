<template>
  <section class="apartament__caption">
    <h2 class="apartament__caption-title">{{ $t("title.descr") }}</h2>
    <div class="apartament__caption-content">
      <p>
        {{ userCaption?.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  userCaption: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
