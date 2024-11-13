<template>
  <section class="about__advantages container">
    <h3 class="about__advantages-title">
      {{ $t("contents.looking.looking_for") }}
      <span>{{ $t("contents.looking.new_building") }}</span>
      {{ $t("contents.looking.come_to_us") }}
    </h3>
    <div class="about__advantages-wrapper">
      <div
        class="about__advantages-wrapper-item"
        v-for="(item, index) in advantagesList"
        :key="index"
      >
        <span>{{ $t(item.title) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const advantagesList = ref([
  {
    title: "contents.offer_why_us_list.free_consultation",
  },
  {
    title: "contents.offer_why_us_list.one_percent_commission",
  },
  {
    title: "contents.offer_why_us_list.time_energy_saving",
  },
  {
    title: "contents.offer_why_us_list.all_developers_in_one_place",
  },
  {
    title: "contents.offer_why_us_list.verified_developers_only",
  },
]);
</script>

<style lang="scss" scoped></style>
