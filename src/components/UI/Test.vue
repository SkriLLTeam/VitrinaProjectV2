<!--<template>
  <div class="mortgage-calculator">
    <h1>Ипотечный калькулятор</h1>

    <form @submit.prevent="calculateMortgage">
      <div>
        <label>Стоимость недвижимости:</label>
        <input type="number" v-model="propertyValue" placeholder="Стоимость в сум" />
      </div>

      <div>
        <label>Первоначальный взнос:</label>
        <input
          type="number"
          v-model="initialPayment"
          placeholder="Первоначальный взнос"
        />
      </div>

      <div>
        <label>Срок кредита (в годах):</label>
        <input type="number" v-model="loanTermYears" placeholder="Срок кредита" />
      </div>

      <div>
        <label>Процентная ставка (годовая):</label>
        <input type="number" v-model="interestRate" placeholder="Процентная ставка" />
      </div>

      <button type="submit">Рассчитать</button>
    </form>

    <div v-if="monthlyPayment !== null">
      <p>Ежемесячный платеж: {{ monthlyPayment.toFixed(2) }} сум</p>
      <p>Переплата по кредиту: {{ overpayment.toFixed(2) }} сум</p>
      <p>Общая выплата: {{ totalPayment.toFixed(2) }} сум</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Реактивные переменные для ввода данных
const propertyValue = ref(0); // Стоимость недвижимости
const initialPayment = ref(0); // Первоначальный взнос
const loanTermYears = ref(30); // Срок кредита
const interestRate = ref(0); // Процентная ставка (годовая)

// Переменные для хранения результатов
const monthlyPayment = ref(null);
const totalPayment = ref(null);
const overpayment = ref(null);

// Функция для расчета ипотеки
const calculateMortgage = () => {
  const loanAmount = propertyValue.value - initialPayment.value; // Сумма кредита
  const monthlyInterestRate = interestRate.value / 100 / 12; // Месячная процентная ставка
  const numberOfPayments = loanTermYears.value * 12; // Общее количество месяцев

  // Если процентная ставка не равна 0, используем формулу аннуитета
  if (monthlyInterestRate > 0) {
    monthlyPayment.value =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    // Если ставка равна 0, то простой расчет без процентов
    monthlyPayment.value = loanAmount / numberOfPayments;
  }

  // Общая сумма выплат
  totalPayment.value = monthlyPayment.value * numberOfPayments;

  // Переплата по кредиту
  overpayment.value = totalPayment.value - loanAmount;
};
</script>

<style>
.mortgage-calculator {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
p {
  font-size: 16px;
}
</style>
-->
<!--<template>
  <div class="mortgage-calculator">
    <h1>Ипотечный калькулятор</h1>

    <form @submit.prevent="calculateMortgage">
      <div>
        <label>Стоимость недвижимости:</label>
        <input type="number" v-model="propertyValue" placeholder="Стоимость в сум" />
      </div>

      <div>
        <label>Первоначальный взнос:</label>
        <input
          type="number"
          v-model="initialPayment"
          placeholder="Первоначальный взнос"
        />
      </div>

      <div>
        <label>Срок кредита (в годах):</label>
        <input type="number" v-model="loanTermYears" placeholder="Срок кредита" />
      </div>

      <div>
        <label>Процентная ставка (годовая):</label>
        <input type="number" v-model="interestRate" placeholder="Процентная ставка" />
      </div>

      <button type="submit">Рассчитать</button>
      <button type="button" @click="clearForm">Очистить</button>
    </form>

    <div v-if="monthlyPayment !== null">
      <p>
        Ежемесячный платеж:
        {{
          monthlyPayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
      <p>
        Переплата по кредиту:
        {{
          overpayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
      <p>
        Общая выплата:
        {{
          totalPayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Реактивные переменные для ввода данных
const propertyValue = ref(0); // Стоимость недвижимости
const initialPayment = ref(0); // Первоначальный взнос
const loanTermYears = ref(30); // Срок кредита
const interestRate = ref(0); // Процентная ставка (годовая)

// Переменные для хранения результатов
const monthlyPayment = ref(null);
const totalPayment = ref(null);
const overpayment = ref(null);

// Функция для расчета ипотеки
const calculateMortgage = () => {
  // Валидация введенных данных
  if (
    propertyValue.value <= 0 ||
    initialPayment.value < 0 ||
    loanTermYears.value <= 0 ||
    interestRate.value < 0
  ) {
    alert("Пожалуйста, введите корректные значения");
    return;
  }

  const loanAmount = propertyValue.value - initialPayment.value; // Сумма кредита
  const monthlyInterestRate = interestRate.value / 100 / 12; // Месячная процентная ставка
  const numberOfPayments = loanTermYears.value * 12; // Общее количество месяцев

  // Если процентная ставка не равна 0, используем формулу аннуитета
  if (monthlyInterestRate > 0) {
    monthlyPayment.value =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    // Если ставка равна 0, то простой расчет без процентов
    monthlyPayment.value = loanAmount / numberOfPayments;
  }

  // Общая сумма выплат
  totalPayment.value = monthlyPayment.value * numberOfPayments;

  // Переплата по кредиту
  overpayment.value = totalPayment.value - loanAmount;
};

// Функция для очистки формы
const clearForm = () => {
  propertyValue.value = 0;
  initialPayment.value = 0;
  loanTermYears.value = 30;
  interestRate.value = 0;
  monthlyPayment.value = null;
  totalPayment.value = null;
  overpayment.value = null;
};
</script>

<style>
.mortgage-calculator {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
p {
  font-size: 16px;
}
</style>

-->
<template>
  <div class="mortgage-calculator">
    <h1>Ипотечный калькулятор</h1>

    <form @submit.prevent="calculateMortgage">
      <div>
        <label>Стоимость недвижимости:</label>
        <input type="number" v-model="propertyValue" placeholder="Стоимость в сум" />
      </div>

      <div>
        <label>Первоначальный взнос:</label>
        <input
          type="number"
          v-model="initialPayment"
          placeholder="Первоначальный взнос"
        />
      </div>

      <div>
        <label>Срок кредита (в годах):</label>
        <input type="number" v-model="loanTermYears" placeholder="Срок кредита" />
      </div>

      <div>
        <label>Процентная ставка (годовая):</label>
        <input type="number" v-model="interestRate" placeholder="Процентная ставка" />
      </div>

      <button type="submit">Рассчитать</button>
      <button type="button" @click="clearForm">Очистить</button>
    </form>

    <div v-if="monthlyPayment !== null">
      <p>
        Ежемесячный платеж:
        {{
          monthlyPayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
      <p>
        Переплата по кредиту:
        {{
          overpayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
      <p>
        Общая выплата:
        {{
          totalPayment.toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        }}
        сум
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Реактивные переменные для ввода данных
const propertyValue = ref(0); // Стоимость недвижимости
const initialPayment = ref(0); // Первоначальный взнос
const loanTermYears = ref(5); // Срок кредита
const interestRate = ref(0); // Процентная ставка (годовая)

// Переменные для хранения результатов
const monthlyPayment = ref(null);
const totalPayment = ref(null);
const overpayment = ref(null);

// Функция для расчета ипотеки
const calculateMortgage = () => {
  // Конвертируем значения в числа
  const propertyValueNum = parseFloat(+propertyValue.value);
  const initialPaymentNum = parseFloat(+initialPayment.value);
  const loanTermYearsNum = parseInt(+loanTermYears.value);
  const interestRateNum = parseFloat(+interestRate.value);

  // Валидация введенных данных
  if (
    propertyValueNum <= 0 ||
    initialPaymentNum < 0 ||
    loanTermYearsNum <= 0 ||
    interestRateNum < 0
  ) {
    alert("Пожалуйста, введите корректные значения");
    return;
  }

  const loanAmount = propertyValueNum - initialPaymentNum; // Сумма кредита
  const monthlyInterestRate = interestRateNum / 100 / 12; // Месячная процентная ставка
  const numberOfPayments = loanTermYearsNum * 12; // Общее количество месяцев

  // Если процентная ставка не равна 0, используем формулу аннуитета
  // аннуитет - это ежемесечная выплата по кридиту
  if (monthlyInterestRate > 0) {
    monthlyPayment.value =
      (loanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    // Если ставка равна 0, то простой расчет без процентов
    monthlyPayment.value = loanAmount / numberOfPayments;
  }

  // Общая сумма выплат
  totalPayment.value = monthlyPayment.value * numberOfPayments;

  // Переплата по кредиту
  overpayment.value = totalPayment.value - loanAmount;
};

// Функция для очистки формы
const clearForm = () => {
  propertyValue.value = 0;
  initialPayment.value = 0;
  loanTermYears.value = 30;
  interestRate.value = 0;
  monthlyPayment.value = null;
  totalPayment.value = null;
  overpayment.value = null;
};
</script>

<style scoped>
.mortgage-calculator {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
p {
  font-size: 16px;
}
</style>
