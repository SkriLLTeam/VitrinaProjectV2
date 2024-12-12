<template>
  <section class="about__why container">
    <h2 class="about__why-title">{{ $t("contents.why_us_title") }}</h2>
    <div class="about__why-cards">
      <div
        class="about__why-cards-card"
        v-for="(card, index) in whyUsList"
        :key="index"
      >
        <div class="about__why-cards-card-img">
          <img v-lazy="card.img" alt="недвижимость в ташкенте, квартиры в ташкенте, аренда квартиры" />
        </div>
        <span class="about__why-cards-card-descr">
          {{ $t(card.title) }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import key from "@/assets/images/icons/key.svg";
import users from "@/assets/images/icons/users.svg";
import dollar from "@/assets/images/icons/dollar.svg";
import build from "@/assets/images/icons/build.svg";
const whyUsList = ref([
  { title: "contents.why_us_list.experience", img: key },
  { title: "contents.why_us_list.agents", img: users },
  { title: "contents.why_us_list.sales_volume", img: dollar },
  { title: "contents.why_us_list.apartments_sold", img: build },
]);
</script>

<style lang="scss" scoped></style>
