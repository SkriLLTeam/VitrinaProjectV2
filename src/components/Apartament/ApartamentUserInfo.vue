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
              @click.prevent="sendThisApartments(userInfo?.user?.tg_username)"
            >
              <!-- :href="'https://t.me/' + userInfo?.user?.tg_username" -->
              {{
                ` ${userInfo?.user?.first_name} ${userInfo?.user?.lastname}` ||
                userInfo?.user?.tg_username
              }}
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4999 0.333374C8.29992 0.333374 0.833252 7.80004 0.833252 17C0.833252 26.2 8.29992 33.6667 17.4999 33.6667C26.6999 33.6667 34.1666 26.2 34.1666 17C34.1666 7.80004 26.6999 0.333374 17.4999 0.333374ZM25.2333 11.6667C24.9833 14.3 23.8999 20.7 23.3499 23.65C23.1166 24.9 22.6499 25.3167 22.2166 25.3667C21.2499 25.45 20.5166 24.7334 19.5833 24.1167C18.1166 23.15 17.2833 22.55 15.8666 21.6167C14.2166 20.5334 15.2833 19.9334 16.2333 18.9667C16.4833 18.7167 20.7499 14.8334 20.8333 14.4834C20.8448 14.4304 20.8433 14.3753 20.8288 14.323C20.8142 14.2708 20.7872 14.2228 20.7499 14.1834C20.6499 14.1 20.5166 14.1334 20.3999 14.15C20.2499 14.1834 17.9166 15.7334 13.3666 18.8C12.6999 19.25 12.0999 19.4834 11.5666 19.4667C10.9666 19.45 9.83325 19.1334 8.98325 18.85C7.93325 18.5167 7.11659 18.3334 7.18325 17.75C7.21659 17.45 7.63325 17.15 8.41659 16.8334C13.2833 14.7167 16.5166 13.3167 18.1333 12.65C22.7666 10.7167 23.7166 10.3834 24.3499 10.3834C24.4833 10.3834 24.7999 10.4167 24.9999 10.5834C25.1666 10.7167 25.2166 10.9 25.2333 11.0334C25.2166 11.1334 25.2499 11.4334 25.2333 11.6667Z"
                  fill="#08a1c1"
                />
              </svg>
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
            {{ $t("tabs.district") }}</span
          >
          <span class="apartament__user-content-address-block-descr">
            {{
              locale.toLowerCase() == "ru"
                ? userInfo?.district.name
                : locale.toLowerCase() == "uz"
                ? userInfo?.district.name_uz
                : userInfo?.district.name
            }}
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

        <div
          class="apartament__user-content-address-block"
          v-if="userInfo?.operation_type == 'Аренда'"
        >
          <span class="apartament__user-content-address-block-title">
            {{ $t("contents.address.commision") }}</span
          >
          <span class="apartament__user-content-address-block-descr"> 50% </span>
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
console.log(props.userInfo);

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
const sendThisApartments = (tg_username) => {
  const adUrl = window.location.href;
  const text = `Здравствуйте хотел бы получить информацию о данной квартире ${adUrl}`;
  const tgLink = `https://t.me/${tg_username}?text=${encodeURIComponent(text)}`;
  window.open(tgLink, "_blank");
};
const date = computed(() =>
  new Date(Date.parse(props?.userInfo?.created_at)).toLocaleDateString()
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
