<template>
  <section class="about__offer container">
    <div class="about__offer-wrapper">
      <h4 class="about__offer-wrapper-title">
        {{ $t("contents.what_do_we_offer_why_us") }}
      </h4>

      <div class="about__offer-offers">
        <div
          class="about__offer-offers-block"
          v-for="(offer, index) in offerList"
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
            {{ $t(offer.title) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const offerList = ref([
  {
    title: "contents.what_do_we_offer_why_us_list.buy_sell_property",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.commercial_property",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.exclusive_top100",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.photo_video_review",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.paid_promotion",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.elite_apartments",
  },
  {
    title: "contents.what_do_we_offer_why_us_list.land_private_houses",
  },
]);
</script>

<style lang="scss" scoped></style>
