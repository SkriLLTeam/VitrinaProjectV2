<template>
  <div class="about">
    <Banner subClass="about__banner-wrapper" mainClass="about__banner">
      <div class="about__banner-content">
        <h1 class="about__banner-content-title">
          {{ $t("banners.about_banner") }}
        </h1>
        <p class="about__banner-content-caption">
          {{ $t("description.about_descr") }}
        </p>
      </div>
    </Banner>
    <WhyUs />
    <Offer />
    <Advantages />
  </div>
</template>

<script setup>
import Advantages from "@/components/About/Advantages.vue";
import Offer from "@/components/About/Offer.vue";
import WhyUs from "@/components/About/WhyUs.vue";
import Banner from "@/components/UI/Banner.vue";
</script>

<style lang="scss" scoped></style>
