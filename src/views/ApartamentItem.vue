<template>
  <transition name="fade" mode="out-in">
    <div>
      <Loader v-if="isLoading" />
      <div v-else class="apartament container">
        <div class="apartament__wrapper">
          <ApartamentSlider @zoomOpen="zoomOpen" :gallery="data?.images" />
          <ApartamentUserInfo :userInfo="data" />
        </div>
        <ApartamentCaption :userCaption="data" />
        <SimilarAds :similarAds="data?.related_objects" />
      </div>
      <ZoomSlider
        @zoomClose="zoomClose"
        :gallery="data?.images"
        v-if="isVisible"
      />
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { advertisements } from "@/utils/util";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { useI18n } from "vue-i18n";
// import { useFiltersStore } from "@/stores/FiltersStore";
import ApartamentCaption from "@/components/Apartament/ApartamentCaption.vue";
import ApartamentSlider from "@/components/Apartament/ApartamentSlider.vue";
import ApartamentUserInfo from "@/components/Apartament/ApartamentUserInfo.vue";
import SimilarAds from "@/components/Apartament/SimilarAds.vue";
import axios from "axios";
import ZoomSlider from "@/components/Apartament/ZoomSlider.vue";

const route = useRoute();
const apartamentId = computed(() => route.params.id);
const { locale } = useI18n();
const isVisible = ref(false);

const zoomOpen = () => {
  isVisible.value = true;
  document.body.style.overflow = "hidden";
};

const zoomClose = () => {
  isVisible.value = false;
  document.body.style.overflow = "auto";
};

const { data, isLoading } = useQuery({
  queryKey: [apartamentId, locale],
  queryFn: async () => {
    const response = await axios.get(`${advertisements}${apartamentId.value}`);
    return response.data;
  },
});

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
