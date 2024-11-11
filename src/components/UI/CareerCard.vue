<template>
  <article class="careerUI">
    <div class="careerUI__wrapper">
      <div class="careerUI__wrapper-top">
        <div class="careerUI__wrapper-top-img">
          <img v-lazy="image" alt="" />
        </div>
      </div>
      <div class="careerUI__wrapper-bottom">
        <p class="careerUI__wrapper-bottom-descr">
          {{ descr }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  descr: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
