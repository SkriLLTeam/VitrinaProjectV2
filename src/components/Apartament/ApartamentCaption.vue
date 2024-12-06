<template>
  <section class="apartament__caption">
    <h2 class="apartament__caption-title">{{ $t("title.descr") }}</h2>
    <div class="apartament__caption-content">
      <p>
        {{
          locale.toLowerCase() == "ru"
            ? userCaption?.description
            : locale.toLowerCase() == "uz"
            ? userCaption?.description_uz
            : userCaption?.description
        }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const props = defineProps({
  userCaption: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
