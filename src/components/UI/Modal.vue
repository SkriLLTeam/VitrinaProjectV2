<template>
  <div class="order__modal" @click="closeModal">
    <div class="order__modal-block" @click.stop="">
      <div class="order__modal-block-top">
        <h1 class="order__modal-block-top-title">{{ $t("form.fill") }}</h1>
        <span class="order__modal-block-top-close" @click="closeModal(false)">
          <img src="@assets/images/icons/close.svg" alt="" />
        </span>
      </div>
      <form @submit.prevent="submitForm" class="order__modal-form">
        <div class="order__modal-form-block">
          <label class="order__modal-form_label">
            {{ $t("form.modal_name") }}
          </label>
          <InputUI
            v-model="postObj.first_name"
            type="text"
            :placeholder="$t('form.modal_name_placeholder')"
          />
        </div>
        <div class="order__modal-form-block">
          <label class="order__modal-form_label">
            {{ $t("form.modal_contact") }}
          </label>
          <InputUI
            v-model="postObj.phone_number"
            type="tel"
            v-mask="mask"
            :placeholder="'+998 (__) ___-__-__ '"
          />
        </div>
        <div class="order__modal-form-block">
          <label class="order__modal-form_label"> Тип операции: </label>
          <SelectUI v-model="postObj.operation_type" :options="typeOperation" />
        </div>
        <div class="order__modal-form-block">
          <label class="order__modal-form_label"> Тип объекта </label>
          <SelectUI v-model="selectedId" :options="modalCategories" />
        </div>

        <div class="order__modal-form-block">
          <label class="order__modal-form_label">
            {{ $t("form.modal_textarea") }}
          </label>
          <textarea
            type="text"
            class="order__modal-form_textarea"
            :placeholder="$t('form.modal_textarea_placeholder')"
            v-model="postObj.message"
          ></textarea>
        </div>
        <div class="order__modal-block-btns">
          <button
            class="revbtn order__modal-block-btn"
            type="button"
            @click="resetForm"
          >
            {{ $t("button.clear") }}
          </button>
          <button class="btn order__modal-block-btn" type="submit">
            {{ $t("button.send") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useQuery, useMutation } from "@tanstack/vue-query";
import { categories, modalPost, postHeaders } from "@/utils/util";
import { useI18n } from "vue-i18n";
import axios from "axios";
import InputUI from "./Forms/InputUI.vue";
import SelectUI from "./Forms/SelectUI.vue";

const { t } = useI18n();

const selectedId = ref("default");
const typeOperation = computed(() => [
  {
    name: t("tabs.buy"),
    id: "buy",
  },
  {
    name: t("tabs.rent"),
    id: "rent",
  },
]);

const postObj = ref({
  first_name: "",
  operation_type: "default",
  object_type: "",
  phone_number: "",
  message: "",
});

const { data: modalCategories } = useQuery({
  queryKey: ["modalCategories"],
  queryFn: async () => {
    const response = await axios.get(`${categories}`);
    return response.data;
  },
});

watch(selectedId, (newValue) => {
  if (modalCategories.value) {
    const selectedCategory = modalCategories.value.find(
      (category) => category.id == newValue
    );
    if (selectedCategory) {
      postObj.value.object_type = selectedCategory.slug;
    }
  }
});
const mutation = useMutation({
  mutationKey: ["modalPost"],
  mutationFn: async (formData) => {
    return await axios.post(`${modalPost}`, formData, {
      headers: postHeaders,
    });
  },
  onSuccess: (response) => {
    console.log("Запрос отправлен успешно", response);
  },
  onError: (response) => {
    console.log("Ошибка отправки данных", response);
  },
});
const submitForm = () => {
  postObj.value.phone_number = postObj.value.phone_number.replace(/\D/g, "");
  mutation.mutate(postObj.value);
  closeModal();
};
const mask = ref({
  mask: "+998 (00) 000-00-00",
  lazy: false,
});

const resetForm = () => {
  postObj.value = {
    first_name: "",
    operation_type: "default",
    object_type: "",
    phone_number: "",
    message: "",
  };
  selectedId.value = "default";
};

const emit = defineEmits(["orderModalClose"]);
const closeModal = (val) => {
  emit("orderModalClose", val);
};
</script>
