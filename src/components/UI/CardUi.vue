<template>
  <article class="cardUI" v-if="apartament">
    <router-link :to="`/apartament/${apartament?.id}`" class="cardUI__wrapper">
      <div class="cardUI__img">
        <img v-lazy="apartament?.preview" alt="" />
      </div>
      <div class="cardUI__content">
        <div class="cardUI__content-text">
          <h3 class="cardUI__content-text-title">
            {{ apartament?.price?.toLocaleString() }}
          </h3>

          <div class="cardUI__content-text-caption">
            <div class="cardUI__content-text-caption-info">
              <span>{{ apartament.rooms_qty_from }}-комн.</span>
              <span>{{ apartament.quadrature_from }} м2</span>
              <span
                >{{ apartament.floor_from }}/{{
                  apartament.floor_to
                }}
                этаж</span
              >
            </div>
            <span class="cardUI__content-text-caption-address">
              Адрес адрес адрес. 99А
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup>

const props = defineProps({
  apartament: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
