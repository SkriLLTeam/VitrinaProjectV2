<template>
  <section class="career__positions container">
    <h2 class="career__positions-title">
      {{ $t("contents.who_are_we_looking_for") }}
    </h2>
    <div class="career__positions-wrapper">
      <CareerCard
        :descr="$t(`contents.descr_card_career.${index}`)"
        :image="item.image"
        v-for="(item, index) in careerCardInfo"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CareerCard from "../UI/CareerCard.vue";

const careerCardInfo = ref([
  {
    image: "src/assets/images/apartments-test.jpeg",
  },
  {
    image: "src/assets/images/apartments-test.jpeg",
  },
  {
    image: "src/assets/images/apartments-test.jpeg",
  },
]);
</script>

<style lang="scss" scoped></style>
