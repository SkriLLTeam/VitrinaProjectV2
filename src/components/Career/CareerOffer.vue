<template>
  <section class="career__offer container">
    <!-- <p>
      <span>{{ $t("contents.career_offer.join_message_part1") }}</span>
      <span class="brand">{{ $t("contents.career_offer.brand_name") }}</span>
      <span>{{ $t("contents.career_offer.join_message_part2") }}</span>
    </p> -->
    <p v-if="locale == 'ru'">
      <span>{{ $t("contents.career_offer.join_message_part1") }}</span>
      <span class="brand">{{ $t("contents.career_offer.brand_name") }}</span>
      <span>{{ $t("contents.career_offer.join_message_part2") }}</span>
    </p>
    <p v-else>
      <span class="brand">{{ $t("contents.career_offer.brand_name") }}</span>
      <span>{{ $t("contents.career_offer.join_message_part1") }}</span>
      <span>{{ $t("contents.career_offer.join_message_part2") }}</span>
    </p>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
console.log(locale.value);
</script>

<style lang="scss" scoped></style>
