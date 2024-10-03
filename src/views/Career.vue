<template>
  <Banner subClass="career__banner-wrapper" mainClass="career__banner">
    <div class="career__banner-content">
      <h1 class="career__banner-content-title">
        {{ $t("banners.career_banner") }}
      </h1>
      <p class="career__banner-content-caption">
        {{ $t("description.career_descr") }}
      </p>
    </div>
  </Banner>

  <CareerOpenPositions />
  <CareerHiringInfo />
  <CareerConditions />
  <CareerOffer />
</template>

<script setup>
import CareerConditions from "@/components/Career/CareerConditions.vue";
import CareerHiringInfo from "@/components/Career/CareerHiringInfo.vue";
import CareerOffer from "@/components/Career/CareerOffer.vue";
import CareerOpenPositions from "@/components/Career/CareerOpenPositions.vue";
import Banner from "@/components/UI/Banner.vue";
</script>

<style lang="scss" scoped></style>
