<template>
  <aside class="apartament__user">
    <div class="apartament__user-content">
      <div class="apartament__user-content-caption">
        <h3 class="apartament__user-content-caption-title">
          {{
            locale.toLowerCase() == "ru"
              ? userInfo?.name
              : locale.toLowerCase() == "uz"
              ? userInfo?.name_uz
              : userInfo?.name
          }}
        </h3>
        <span class="apartament__user-content-caption-id"
          >No {{ userInfo?.unique_id }}</span
        >
        <span class="apartament__user-content-caption-price"
          >{{ userInfo?.price?.toLocaleString() }} USD</span
        >
      </div>

      <div class="apartament__user-content-info">
        <div class="apartament__user-content-info-avatar">
          <div class="apartament__user-content-info-avatar-img">
            <img
              v-lazy="`${media}${userInfo?.user?.profile_image}`"
              alt="недвижимость в ташкенте, квартиры в ташкенте, аренда квартиры"
            />
          </div>
          <span class="apartament__user-content-info-avatar-name">
            <a
              class="apartament__user-content-info-avatar-name"
              target="_blank"
              style
              :href="'https://t.me/' + userInfo?.user?.tg_username"
            >
              {{
                ` ${userInfo?.user?.first_name} ${userInfo?.user?.lastname}` ||
                userInfo?.user?.tg_username
              }}
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
              {{ $t("title.show_number") }}
            </button>
            <button
              v-else-if="showNumber && userInfo?.user?.phone_number"
              class="apartament__user-content-info-btns-number"
              @click="(e) => makeCall(e)"
            >
              {{ userInfo?.user?.phone_number }}
            </button>
          </div>

          <button @click="orderModalOpen" class="apartament__user-content-info-btns-call">
            {{ $t("title.order_number") }}
          </button>
        </div>
      </div>
      <div class="apartament__user-content-address">
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.apartCreatedDate") }}
          </span>
          <span class="apartament__user-content-address-block-descr">
            {{ date }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.title") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{
              locale.toLowerCase() == "ru"
                ? userInfo?.address
                : locale.toLowerCase() == "uz"
                ? userInfo?.address_uz
                : userInfo?.address
            }}
          </span>
        </div>

        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.rooms_qty") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.rooms_quantity || "Cтудия" }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.total_area") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.quadrature }} м²
          </span>
        </div>
        <div
          class="apartament__user-content-address-block"
          v-if="userInfo?.house_quadrature_from"
        >
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.house_quadrature") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.house_quadrature_from }} м²
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.floor") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.floor_from }}/{{ userInfo?.floor_to }}
          </span>
        </div>
        <div
          class="apartament__user-content-address-block"
          v-if="userInfo?.creation_year"
        >
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.creation_year") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{ userInfo?.creation_year }}
          </span>
        </div>
        <div class="apartament__user-content-address-block">
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.condition") }}</span
          >
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

  <transition name="modal-fade">
    <Modal v-if="isOrderModal" @orderModalClose="orderModalClose" />
  </transition>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import Modal from "../UI/Modal.vue";
import { media } from "@/utils/util";
import { computed } from "vue";

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
const orderModalOpen = () => {
  isOrderModal.value = true;
};
const orderModalClose = () => {
  isOrderModal.value = false;
};

const date = computed(() =>
  new Date(Date.now(props?.userInfo?.created_at)).toLocaleDateString()
);

const makeCall = (e) => {
  e.preventDefault();
  window.location.href = `tel:${props?.userInfo?.user?.phone_number}`;
};
</script>

<style lang="scss" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
