<template>
  <section class="about__company">
    <div class="container">
      <h2 class="about__company-title">
        <span class="about__company-title-span">{{ $t("company.name") }}</span>
        {{ $t("company.title") }}
      </h2>
      <div class="about__company-text-desc">
        <p class="about__company-desc">
          {{ $t("company.text1") }}
        </p>
        <p class="about__company-desc">
          {{ $t("company.text2") }}
        </p>
        <p class="about__company-desc">
          {{ $t("company.text3") }}
        </p>
        <p class="about__company-desc">
          {{ $t("company.text4") }}
        </p>
        <p class="about__company-desc">
          {{ $t("company.text5") }}
        </p>
      </div>
      <h3 class="about__company-title2">
        <span class="about__company-title-span">{{ $t("company.name") }}</span>
        {{ $t("company.title2") }}
      </h3>
    </div>
  </section>
</template>

<script setup></script>
