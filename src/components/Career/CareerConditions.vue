<template>
  <section class="career__conditions container">
    <h2 class="career__conditions-title">{{ $t("contents.title_career") }}</h2>
    <div class="career__conditions-wrapper">
      <div
        class="career__conditions-item"
        data-aos="zoom-in"
        v-for="(item, index) in conditionsList"
        :key="index"
      >
        <div class="career__conditions-item-img">
          <img
            v-lazy="item.img"
            alt="недвижимость в ташкенте, квартиры в ташкенте, аренда квартиры"
          />
        </div>
        <span class="career__conditions-item-descr">
          {{ $t(item.title) }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import clock from "@/assets/images/clock.svg";
import money from "@/assets/images/money.svg";
import calendar from "@/assets/images/calendar.svg";
import education from "@/assets/images/education.svg";

const conditionsList = ref([
  { title: "contents.conditions_career.working_hours", img: clock },
  { title: "contents.conditions_career.unlimited_income", img: money },
  { title: "contents.conditions_career.floating_day_off", img: calendar },
  { title: "contents.conditions_career.training_duration", img: education },
]);
</script>

<style lang="scss" scoped></style>
