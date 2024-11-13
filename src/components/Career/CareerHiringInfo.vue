<template>
  <section class="career__hiring container">
    <div class="career__hiring-wrapper">
      <h2 class="career__hiring-title">
        {{ $t("contents.what_do_we_offer") }}
      </h2>

      <div class="career__hiring-info">
        <div
          class="career__hiring-info-block"
          v-for="(item, index) in hiringInfoList"
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
            {{ $t(item.title) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hiringInfoList = ref([
  { title: "contents.list_offer.training" },
  { title: "contents.list_offer.office" },
  { title: "contents.list_offer.bonus" },
  { title: "contents.list_offer.communication" },
  { title: "contents.list_offer.support" },
]);
</script>

<style lang="scss" scoped></style>
