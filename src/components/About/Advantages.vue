<template>
  <section class="about__advantages container">
    <h3 class="about__advantages-title">
      Ищите <span>новостройку?</span> Тогда вам точно к нам:
    </h3>

    <div class="about__advantages-wrapper">
      <div
        class="about__advantages-wrapper-item"
        v-for="(advantage, index) in advantages"
        :key="index"
      >
        <span>{{ advantage }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { messages, locale } = useI18n();
const advantages = computed(() => {
  const currentLocale = locale.value;
  const advantage = messages.value[currentLocale]?.contents?.offer_why_us_list;
  return advantage;
});
</script>

<style lang="scss" scoped></style>
