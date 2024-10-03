<template>
  <section class="apartament__slider">
    <swiper
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="apartament__slider-top"
    >
      <swiper-slide
        v-for="photo in gallery"
        :key="photo.id"
        class="apartament__slider-top-slide"
      >
        <div class="apartament__slider-top-slide-img">
          <img v-lazy="photo?.photo" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="15"
      :slidesPerView="`auto`"
      :modules="modules"
      class="apartament__slider-bottom"
    >
      <swiper-slide
        v-for="photo in gallery"
        :key="photo.id"
        class="apartament__slider-bottom-slide"
      >
        <div class="apartament__slider-bottom-slide-img">
          <img v-lazy="photo?.photo" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "@/components/Apartament/Apartament.scss";

const modules = ref([FreeMode, Thumbs]);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const props = defineProps({
  gallery: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
