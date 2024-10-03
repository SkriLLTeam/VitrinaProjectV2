<template>
  <section class="apartament__similar" v-if="similarAds && similarAds.length">
    <h2 class="apartament__similar-title">Похожие объявления</h2>

    <div class="apartament__similar-wrapper">
      <CardUi :apartament="ad" v-for="ad in similarAds" :key="ad.id" />
    </div>
  </section>
</template>

<script setup>
import CardUi from "../UI/CardUi.vue";

const props = defineProps({
  similarAds: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
