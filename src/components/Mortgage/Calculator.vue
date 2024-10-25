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
        <form
          @submit.prevent="calculateMortgage"
          class="mortgage__calculator-inner-form"
        >
          <div class="mortgage__calculator-inner-form-content">
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.price_statement") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 сум"
                v-model="propertyValue"
                :required="true"
                v-mask="maskOptions"
              />
            </div>

            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.in_year") }}</label>
              <InputUI
                :required="true"
                type="text"
                placeholder="30"
                v-model="loanTermYears"
                v-mask="maskOptions"
              />
            </div>

            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.down_payment") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 сум"
                v-model="initialPayment"
                :required="true"
                v-mask="maskOptions"
              />
            </div>
            <div class="mortgage__calculator-inner-form-content-block">
              <label>{{ $t("form.percent") }}</label>
              <InputUI
                type="text"
                placeholder="000000000 сум"
                v-model="interestRate"
                :required="true"
                v-mask="percentMaskOptions"
              />
            </div>
          </div>

          <button type="submit" class="mortgage__calculator-inner-form-btn">
            {{ $t("button.calculate_the_bet") }}
          </button>
        </form>
        <div
          v-if="monthlyPayment !== null"
          class="mortgage__calculator-inner-calculations"
        >
          <div class="mortgage__calculator-inner-calculations-block">
            <span class="mortgage__calculator-inner-calculations-block-title">
              {{ monthlyPayment.toLocaleString("ru-RU") }}
              сум</span
            >
            <span
              class="mortgage__calculator-inner-calculations-block-subtitle"
            >
              Ежемесячный платеж
            </span>
          </div>
          <div class="mortgage__calculator-inner-calculations-block">
            <span class="mortgage__calculator-inner-calculations-block-title">
              {{ sumTotal.toLocaleString("ru-RU") }}
              сум
            </span>
            <span
              class="mortgage__calculator-inner-calculations-block-subtitle"
            >
              Сумма кредита
            </span>
          </div>
          <div class="mortgage__calculator-inner-calculations-block">
            <span class="mortgage__calculator-inner-calculations-block-title">
              {{ overpayment.toLocaleString("ru-RU") }}
              сум</span
            >
            <span
              class="mortgage__calculator-inner-calculations-block-subtitle"
            >
              Переплата по кредиту
            </span>
          </div>
          <div class="mortgage__calculator-inner-calculations-block">
            <span class="mortgage__calculator-inner-calculations-block-title">
              {{ totalPayment.toLocaleString("ru-RU") }}
              сум</span
            >
            <span
              class="mortgage__calculator-inner-calculations-block-subtitle"
            >
              Общая выплата
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import InputUI from "../UI/Forms/InputUI.vue";
// Реактивные переменные для ввода данных
const propertyValue = ref(null); // Стоимость недвижимости
const initialPayment = ref(null); // Первоначальный взнос
const loanTermYears = ref(null); // Срок кредита
const interestRate = ref(null); // Процентная ставка (годовая)

// Переменные для хранения результатов
const monthlyPayment = ref(null);
const totalPayment = ref(null);
const overpayment = ref(null);
const sumTotal = ref(null);
// Функция для расчета ипотеки
const calculateMortgage = () => {
  const propertyValueNum = +propertyValue.value.replace(/\s/g, "");
  const initialPaymentNum = +initialPayment.value.replace(/\s/g, "");
  const loanTermYearsNum = +loanTermYears.value.replace(/\s/g, "");
  const interestRateNum = +interestRate.value.replace(/\s/g, "");
  const total = +propertyValue.value.replace(/\s/g, "");
  const loanAmount = propertyValueNum - initialPaymentNum; // Сумма кредита
  const monthlyInterestRate = interestRateNum / 100 / 12; // Месячная процентная ставка
  const numberOfPayments = loanTermYearsNum * 12; // Общее количество месяцев

  // Если процентная ставка не равна 0, используем формулу аннуитета
  if (monthlyInterestRate > 0) {
    monthlyPayment.value =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    // Если ставка равна 0, простой расчет без процентов
    monthlyPayment.value = loanAmount / numberOfPayments;
  }

  // Общая сумма выплат без округления
  totalPayment.value = monthlyPayment.value * numberOfPayments;

  // Переплата по кредиту без округления
  overpayment.value = totalPayment.value - loanAmount;

  sumTotal.value = total;

  monthlyPayment.value = Math.floor(monthlyPayment.value);
  totalPayment.value = Math.floor(totalPayment.value);
  overpayment.value = Math.floor(overpayment.value);
};

const maskOptions = ref({
  mask: Number, // Числовой ввод
  signed: false, // Без отрицательных чисел
  thousandsSeparator: " ", // Разделитель тысяч — пробел
  radix: ",", // Разделитель десятичных знаков — запятая
  mapToRadix: ["."], // Учитываем точку как разделитель
  min: 0,
});

const percentMaskOptions = ref({
  mask: Number, // Числовая маска
  signed: false, // Без отрицательных чисел
  min: 0, // Минимум 0
  max: 30, // Максимум 30
  thousandsSeparator: "", // Без разделителя тысяч
  radix: ",", // Разделитель десятичных знаков — запятая
  mapToRadix: ["."], // Учитываем точку как разделитель
});
</script>

<style lang="scss" scoped></style>
