<template>
  <section class="career__conditions container">
    <h2 class="career__conditions-title">{{ $t("contents.title_career") }}</h2>
    <div class="career__conditions-wrapper">
      <div
        class="career__conditions-item"
        v-for="(item, index) in combinedConditionsList"
        :key="index"
      >
        <div class="career__conditions-item-img">
          <img :src="item.img" alt="" />
        </div>
        <span class="career__conditions-item-descr">
          {{ item.descr }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const conditionsImages = ref([
  { img: "src/assets/images/clock.svg" },
  { img: "src/assets/images/money.svg" },
  { img: "src/assets/images/calendar.svg" },
  { img: "src/assets/images/education.svg" },
]);

const localizedDescriptions = computed(() => {
  const currentLocale = locale.value;
  return messages.value[currentLocale]?.contents?.conditions_career || [];
});

const combinedConditionsList = computed(() => {
  return localizedDescriptions.value.map((descr, index) => ({
    descr,
    img: conditionsImages.value[index]?.img || "",
  }));
});
</script>

<style lang="scss" scoped></style>
