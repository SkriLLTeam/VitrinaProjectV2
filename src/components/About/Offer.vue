<template>
  <section class="about__offer container">
    <div class="about__offer-wrapper">
      <h4 class="about__offer-wrapper-title">
        {{ $t("contents.what_do_we_offer_why_us") }}
      </h4>

      <div class="about__offer-offers">
        <div
          class="about__offer-offers-block"
          v-for="(offer, index) in listOffer"
          :key="index"
        >
          <div class="about__offer-offers-block-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle cx="15" cy="15" r="15" fill="#08A1C1" />
            </svg>
          </div>

          <span class="about__offer-offers-block-caption">
            {{ offer }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { messages, locale } = useI18n();
const listOffer = computed(() => {
  const currentLocale = locale.value;
  const offer = messages.value[currentLocale]?.contents?.list_offer;
  return offer;
});
</script>

<style lang="scss" scoped></style>
