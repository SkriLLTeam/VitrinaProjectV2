<template>
  <form class="filter__form commersial" @submit.prevent="applyFilters">
    <div class="filter__form-desktop">
      <div class="filter__form-house-top">
        <FromTo
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          labeltitle="Квадратура, кв-м"
        />
        <!-- не должно быть  -->
        <FilterSelect labeltitle="Метро" />
      </div>
      <div class="filter__form-newbuilding-bottom">
        <FromTo
          filterFromKey="price_from"
          filterToKey="price_to"
          labeltitle="Стоимость, у.е"
        />
        <FilterSelect
          labeltitle="Район"
          filterKey="district"
          :list="districts"
        />
        <button class="btn filter__form-btn">
          {{ $t("button.show_result") }}
        </button>
        <button class="revbtn filter__form-btn">
          {{ $t("button.clear") }}
        </button>
      </div>
    </div>
    <div class="filter__form-mob">
      <div class="filter__form-house-top">
        <FromTo
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          labeltitle="Квадратура, кв-м"
        />
        <!-- не должно быть  -->

        <FilterSelect labeltitle="Метро" />
        <FromTo
          filterFromKey="price_from"
          filterToKey="price_to"
          labeltitle="Стоимость, у.е"
        />
        <FilterSelect
          labeltitle="Район"
          filterKey="district"
          :list="districts"
        />
        <button class="btn filter__form-btn">Показать результаты</button>
        <button class="revbtn filter__form-btn">Очистить</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import FromTo from "../FromTo/FromTo.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const props = defineProps({
  districts: Array,
});

const emit = defineEmits(["applyFilters"]);
const applyFilters = () => {
  emit("applyFilters");
};
</script>
