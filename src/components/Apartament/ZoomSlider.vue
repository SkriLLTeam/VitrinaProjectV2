<template>
  <div v-if="gallery && gallery.length" class="apartament__zoom">
    <div @click="zoomClose" class="apartament__zoom-close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M20.586 2 12 10.585 3.414 2H2v1.414L10.586 12 2 20.586V22h1.414L12 13.414 20.586 22H22v-1.414L13.415 12 22 3.414V2h-1.414Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div class="apartament__zoom-wrapper">
      <button class="apartament__zoom-btn-prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="m15.547 2-1.305 1.27L6 11.293v1.414l8.242 8.022L15.547 22H17v-1.414l-1.305-1.271L8.18 12l7.515-7.316L17 3.414V2z"
          ></path>
        </svg>
      </button>
      <swiper
        :navigation="{
          prevEl: '.apartament__zoom-btn-prev',
          nextEl: '.apartament__zoom-btn-next',
        }"
        :modules="modules"
        :spaceBetween="10"
        class="apartament__zoom-slider"
      >
        <swiper-slide
          v-for="photo in gallery"
          :key="photo.id"
          class="apartament__zoom-slider-slide"
        >
          <img
            v-lazy="`${media}${photo?.url}`"
            alt="недвижимость в ташкенте, квартиры в ташкенте, аренда квартиры"
          />
        </swiper-slide>
      </swiper>
      <button class="apartament__zoom-btn-next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M7 2v1.414l1.271 1.27L15.586 12l-7.315 7.315L7 20.585V22h1.414l1.27-1.271L17 13.414l1-1v-.827l-3.942-3.942v-.001L9.686 3.271 8.413 2z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { media } from "@/utils/util";
import "swiper/css";
import "@/components/Apartament/Apartament.scss";

const modules = ref([Navigation]);

const props = defineProps({
  gallery: {
    type: Array,
  },
});

const emit = defineEmits(["zoomClose"]);

const zoomClose = () => {
  emit("zoomClose");
};
</script>

<style lang="scss" scoped></style>
