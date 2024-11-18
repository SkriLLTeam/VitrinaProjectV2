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
import image1 from "@/assets/images/team1.png";
import image2 from "@/assets/images/team2.png";
import image3 from "@/assets/images/team3.png";

const careerCardInfo = ref([
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
]);
</script>

<style lang="scss" scoped></style>
