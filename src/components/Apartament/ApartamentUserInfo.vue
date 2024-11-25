<template>
  <aside class="apartament__user">
    <div class="apartament__user-content">
      <div class="apartament__user-content-caption">
        <h3 class="apartament__user-content-caption-title">
          {{ userInfo?.name }}
        </h3>
        <span class="apartament__user-content-caption-price"
          >{{ userInfo?.price?.toLocaleString() }} USD</span
        >
      </div>

      <div class="apartament__user-content-info">
        <div class="apartament__user-content-info-avatar">
          <div class="apartament__user-content-info-avatar-img">
            <img v-lazy="userInfo?.user?.photo" alt="" />
          </div>
          <span class="apartament__user-content-info-avatar-name">
            <a
              class="apartament__user-content-info-avatar-name"
              target="_blank"
              style
              :href="'https://t.me/' + userInfo?.user?.tg_username"
            >
              {{ userInfo?.user?.fullname }}
            </a>
          </span>
        </div>

        <div class="apartament__user-content-info-btns">
          <div class="apartament__user-content-info-btns-wrapper">
            <button
              v-if="!showNumber || !userInfo?.user?.phone_number"
              class="apartament__user-content-info-btns-number"
              @click="show"
            >
              Показать номер
            </button>
            <a
              v-else-if="showNumber && userInfo?.user?.phone_number"
              class="apartament__user-content-info-btns-number"
              :href="`tel:${userInfo?.user?.phone_number}`"
            >
              {{ userInfo?.user?.phone_number }}
            </a>
          </div>

          <button @click="orderModalOpen" class="apartament__user-content-info-btns-call">
            Заказать звонок
          </button>
        </div>
      </div>

      <div class="apartament__user-content-address">
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title"> Адрес:</span>
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.address }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            Количество комнат:</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.rooms_qty_from }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            Общая площадь:</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.quadrature_from }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title"> Этаж:</span>
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.floor_from }}/{{ userInfo?.floor_to }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            Год постройки:</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.creation_year }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title"> Состояние:</span>
          <span class="apartament__user-content-address-block-descr">
            {{
              locale.toLowerCase() == "ru"
                ? userInfo?.repair_type
                : locale.toLowerCase() == "uz"
                ? userInfo?.repair_type_uz
                : userInfo?.repair_type
            }}
          </span>
        </div>
      </div>
    </div>
  </aside>

  <Modal v-if="isOrderModal" @orderModalClose="orderModalClose" />
</template>

<script setup>
import { useI18n } from "vue-i18n";
import i18n from "@/plugins/i18n";
import { ref } from "vue";
import Modal from "../UI/Modal.vue";

const props = defineProps({
  userInfo: {
    type: Object,
  },
});

const isOrderModal = ref(false);
const showNumber = ref(false);
const { locale } = useI18n();
const show = () => {
  showNumber.value = !showNumber.value;
};
</script>

<style lang="scss" scoped></style>
