<template>
  <form class="filter__form flats" @submit.prevent="applyFilters">
    <div class="filter__form-desktop">
      <div class="filter__form-flats-top">
        <Checkboxes
          labeltitle="Кол-во комнат"
          :checkboxes="checkboxes"
          @toggleCheckbox="toggleCheckbox"
        />
        <FromTo
          filterFromKey="price_from"
          filterToKey="price_to"
          labeltitle="Стоимость, у.е"
        />
        <FromTo
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          labeltitle="Квадратура, кв-м"
        />
      </div>
      <div class="filter__form-flats-bottom">
        <FromTo
          filterFromKey="floor_from"
          filterToKey="floor_to"
          labeltitle="Этаж"
        />
        <FilterSelect
          labeltitle="Ремонт"
          filterKey="repair_type"
          :list="repairList"
        />
        <FilterSelect
          filterKey="district"
          labeltitle="Район"
          :list="districts"
        />
        <button class="btn filter__form-btn" type="submit">
          {{ $t("button.show_result") }}
        </button>
        <button class="revbtn filter__form-btn">
          {{ $t("button.clear") }}
        </button>
      </div>
    </div>

    <div class="filter__form-mob">
      <div class="filter__form-flats-top">
        <Checkboxes
          labeltitle="Кол-во комнат"
          :checkboxes="checkboxes"
          @toggleCheckbox="toggleCheckbox"
        />
        <FromTo
          filterFromKey="price_from"
          filterToKey="price_to"
          labeltitle="Стоимость, у.е"
        />
        <FromTo
          filterFromKey="quadrature_from"
          filterToKey="quadrature_to"
          labeltitle="Квадратура, кв-м"
        />
        <FromTo
          filterFromKey="floor_from"
          filterToKey="floor_to"
          labeltitle="Этаж"
        />
        <FilterSelect
          labeltitle="Ремонт"
          filterKey="repair_type"
          :list="repairList"
        />
        <FilterSelect
          filterKey="district"
          labeltitle="Район"
          :list="districts"
        />
        <button class="btn filter__form-btn" @click="applyFilters">
          Показать результаты
        </button>
        <button class="revbtn filter__form-btn">Очистить</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Checkboxes from "../Checkboxes/Checkboxes.vue";
import FromTo from "../FromTo/FromTo.vue";
import FilterSelect from "../Selects/FilterSelect.vue";

const props = defineProps({
  rent: Boolean,
  sold: Boolean,
  districts: Array,
  toggleCheckbox: Function,
  checkboxes: Array,
});

const repairList = ref([
  { name: "С ремонтом", id: "with" },
  { name: "Без ремонта", id: "without" },
  { name: "Дизайнерский ремонт", id: "designed" },
  { name: "Черновая", id: "rough" },
  { name: "Предчистовая", id: "pre_finished" },
]);

const emit = defineEmits(["applyFilters"]);
const applyFilters = () => {
  emit("applyFilters");
};
</script>
