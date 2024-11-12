import { defineStore } from "pinia";

export const useFiltersStore = defineStore("FiltersStore", {
  state: () => ({
    filters: {
      operation_type: null,
      category: null,
      rooms: null,
      is_studio: null,
      price_from: null,
      price_to: null,
      quadrature_from: null,
      quadrature_to: null,
      floor_from: null,
      floor_to: null,
      repair_type: null,
      district: null,
      house_quadrature_from: null,
      house_quadrature_to: null,
    },
    isTitleVisible: true,
    currentPage: 1,
    refetchFns: [],
  }),
  actions: {
    updateFilter(key, value) {
      if (key in this.filters) {
        this.filters[key] = value;
      }
    },
    resetFilters() {
      this.filters = {
        operation_type: null,
        category: null,
        rooms: null,
        is_studio: null,
        price_from: null,
        price_to: null,
        quadrature_from: null,
        quadrature_to: null,
        floor_from: null,
        floor_to: null,
        repair_type: null,
        district: null,
      };
      this.currentPage = 1;
      this.isTitleVisible = true;
      this.triggerRefetch();
    },
    hideTitle() {
      this.isTitleVisible = false;
    },
    addRefetch(refetch) {
      if (!this.refetchFns.includes(refetch)) {
        this.refetchFns.push(refetch);
      }
    },
    triggerRefetch() {
      this.refetchFns.forEach((refetch) => refetch());
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
});
