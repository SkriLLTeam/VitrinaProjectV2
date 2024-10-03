<template>
  <section class="mortgage__calculator container">
    <h2 class="mortgage__calculator-title">
      <span>{{ $t("contents.title_mortgage") }}</span>
      <span>{{ $t("contents.sub_title_mortgage") }}</span>
    </h2>

    <div class="mortgage__calculator-wrapper">
      <h3 class="mortgage__calculator-wrapper-title">
        {{ $t("contents.title_calculator") }}
      </h3>

      <div class="mortgage__calculator-inner">
        <form @click.prevent class="mortgage__calculator-inner-form">
          <div class="mortgage__calculator-inner-form-content">
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.type_statement") }}</label>
              <SelectUI :options="estateList" />
            </div>
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.price_statement") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 у.е."
                v-model="postObj.price"
              />
            </div>
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.in_year") }}</label>
              <InputUI type="text" placeholder="30" v-model="postObj.year" />
            </div>
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.down_payment") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 у.е."
                v-model="postObj.down_payment"
              />
            </div>
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.percent") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 у.е."
                v-model="postObj.percent"
              />
            </div>
          </div>

          <button class="mortgage__calculator-inner-form-btn">
            {{ $t("button.calculate_the_bet") }}
          </button>
        </form>

        <div class="mortgage__calculator-inner-calculations">
          <div
            class="mortgage__calculator-inner-calculations-block"
            v-for="(calculate, index) in calculations"
            :key="index"
          >
            <span class="mortgage__calculator-inner-calculations-block-title"
              >{{ calculate.title }} {{$t('description.currency')}}</span
            >
            <span
              class="mortgage__calculator-inner-calculations-block-subtitle"
            >
              {{ $t(calculate.subtitle) }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import InputUI from "../UI/Forms/InputUI.vue";
import SelectUI from "../UI/Forms/SelectUI.vue";

const estateList = ref(["Коммерческая", "Вторичная"]);
const postObj = ref({
  price: "",
  year: "",
  down_payment: "",
  percent: "",
});

const calculations = ref([
  {
    title: "500 000 000",
    subtitle: "form.monthly_payment",
  },
  {
    title: "500 000 000",
    subtitle: "form.loan_amount",
  },
  {
    title: "500 000 000",
    subtitle: "form.overpayment",
  },
  {
    title: "500 000 000",
    subtitle: "form.total_amount",
  },
]);
</script>

<style lang="scss" scoped></style>
