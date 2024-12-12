<template>
  <section id="feedback" class="feedback">
    <div class="feedback__wrapper container">
      <div class="feedback__content">
        <h4 class="feedback__content-title">
          {{ $t("contents.consultation_title_mortgage") }}
        </h4>
        <p class="feedback__content-text">
          {{ $t("contents.consultation_descr_mortgage") }}
          <a href="tel:+998555003020">: +998 (55) 500–30–20 </a>
        </p>
      </div>
      <form @submit.prevent="submitForm" class="feedback__form">
        <div class="feedback__form-wrapper">
          <div class="feedback__form-block">
            <label>{{ $t("form.name_placeholder") }}</label>
            <InputUI
              type="text"
              :placeholder="$t('form.name_placeholder')"
              v-model="postObj.fullname"
            />
          </div>
          <div class="feedback__form-block">
            <label>{{ $t("form.phone_placeholder") }}</label>
            <InputUI
              type="tel"
              v-mask="mask"
              :placeholder="'+998 (__) ___-__-__ '"
              v-model="postObj.phone_number"
            />
          </div>
        </div>
        <button class="feedback__form-btn">
          {{ $t("button.await_call") }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useMutation } from "@tanstack/vue-query";
import { consultationPost, postHeaders } from "@/utils/util";
import axios from "axios";
import InputUI from "../Forms/InputUI.vue";

const postObj = ref({
  fullname: "",
  phone_number: "",
});

const mutation = useMutation({
  mutationKey: ["consultationPost"],
  mutationFn: async (formaData) => {
    return await axios.post(`${consultationPost}`, formaData, {
      headers: postHeaders,
    });
  },
  onSuccess: (response) => {
    console.log("Запрос отправлен успешно");
  },
  onError: (response) => {
    console.log("Ошибка отправки данных");
  },
});

const submitForm = () => {
  postObj.value.phone_number = postObj.value.phone_number.replace(/\D/g, "");
  mutation.mutate(postObj.value);
};

// маска номера
const mask = ref({
  mask: "+998 (00) 000-00-00",
  lazy: false,
});
</script>

<style lang="scss" scoped></style>
