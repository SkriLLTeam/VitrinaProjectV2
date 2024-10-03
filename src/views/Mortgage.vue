<template>
  <div class="mortgage">
    <Banner mainClass="mortgage__banner" subClass="mortgage__banner-wrapper">
      <div class="mortgage__banner-content">
        <div class="mortgage__banner-content-text">
          <h1>{{ $t("banners.mortgage_banner") }}</h1>
          <p>
            {{ $t("description.mortgage_descr") }}
          </p>
        </div>
        <a href="#feedback" class="mortgage__banner-content-btn">
          {{ $t("button.get_advice") }}
        </a>
      </div>
    </Banner>

    <Calculator />
    <Feedback />
  </div>
</template>

<script setup>
import Calculator from "@/components/Mortgage/Calculator.vue";
import Banner from "@/components/UI/Banner.vue";
import Feedback from "@/components/UI/Feedback/Feedback.vue";
</script>
