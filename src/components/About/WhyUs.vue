<template>
  <section class="about__why container">
    <h2 class="about__why-title">{{ $t("contents.why_us_title") }}</h2>
    <div class="about__why-cards">
      <div
        class="about__why-cards-card"
        v-for="(card, index) in combinedCardsInfo"
        :key="index"
      >
        <div class="about__why-cards-card-img">
          <img v-lazy="card.img" alt="" />
        </div>
        <span class="about__why-cards-card-descr">
          {{ card.descr }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
const { messages, locale } = useI18n();
import key from "@/assets/images/icons/key.svg";
import users from "@/assets/images/icons/users.svg";
import dollar from "@/assets/images/icons/dollar.svg";
import build from "@/assets/images/icons/build.svg";
const cardsImg = ref([
  {
    img: key,
  },
  {
    img: users,
  },
  {
    img: dollar,
  },
  {
    img: build,
  },
]);
const localizedDescriptions = computed(() => {
  const currentLocale = locale.value;
  return messages.value[currentLocale]?.contents?.why_us_list || [];
});

const combinedCardsInfo = computed(() => {
  return localizedDescriptions.value.map((descr, index) => ({
    descr,
    img: cardsImg.value[index]?.img || "",
  }));
});
</script>

<style lang="scss" scoped></style>
