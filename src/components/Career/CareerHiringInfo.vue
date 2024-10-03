<template>
  <section class="career__hiring container">
    <div class="career__hiring-wrapper">
      <h2 class="career__hiring-title">
        {{ $t("contents.what_do_we_offer") }}
      </h2>

      <div class="career__hiring-info">
        <div
          class="career__hiring-info-block"
          v-for="(item, index) in listOffer"
          :key="index"
        >
          <div class="career__hiring-info-block-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle cx="15" cy="15" r="15" fill="#08A1C1" />
            </svg>
          </div>

          <span class="career__hiring-info-block-descr">
            {{ item }}
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

// Используем messages напрямую, чтобы получить массив из json
const listOffer = computed(() => {
  const currentLocale = locale.value;
  const offer = messages.value[currentLocale]?.contents?.list_offer;
  return offer;
});
</script>

<style lang="scss" scoped></style>
