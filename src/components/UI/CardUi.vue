<template>
  <article class="cardUI" v-if="apartament">
    <router-link :to="`/apartament/${apartament?.id}`" class="cardUI__wrapper">
      <div class="cardUI__img">
        <img
          v-lazy="`${media}${apartament?.preview}`"
          alt="недвижимость в ташкенте, квартиры в ташкенте, аренда квартиры"
        />
      </div>
      <div class="cardUI__content">
        <div class="cardUI__content-text">
          <p class="cardUI__content-text-title">
            {{ apartament?.price?.toLocaleString() }} y.e
          </p>

          <div class="cardUI__content-text-caption">
            <div class="cardUI__content-text-caption-info">
              <span>{{ apartament.rooms_quantity }}-{{ $t("card.rooms") }}.</span>
              <span>{{ apartament.quadrature }}м²</span>
              <span
                >{{ apartament.floor_from }}/{{ apartament.floor_to }}
                {{ $t("card.floor") }}</span
              >
            </div>
            <span class="cardUI__content-text-caption-address">
              {{
                locale.toLowerCase() == "ru"
                  ? apartament?.address
                  : locale.toLowerCase() == "uz"
                  ? apartament?.address_uz
                  : apartament?.address
              }}
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup>
import { media } from "@/utils/util";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const props = defineProps({
  apartament: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
