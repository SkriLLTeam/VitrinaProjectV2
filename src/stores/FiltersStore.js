import { defineStore } from "pinia";

export const useFiltersStore = defineStore("FiltersStore", {
  state: () => ({
    filters: {
      operation_type: null,
      category_id: null,
      rooms: null,
      is_studio: null,
      price_from: null,
      price_to: null,
      quadrature_from: null,
      quadrature_to: null,
      floor_from: null,
      floor_to: null,
      repair_type: null,
      district_id: null,
      house_quadrature_from: null,
      house_quadrature_to: null,
    },
    isTitleVisible: true,
    refetchFn: null,
    currentPage: 1,
  }),
  actions: {
    updateFilter(key, value) {
      if (key in this.filters) {
        this.filters[key] =
          key === "operation_type" && value ? value.toUpperCase() : value;
    
        if (key === "operation_type" && value) {
          this.filters.category_id = null;
        }
      }
    },

    resetFilters() {
      this.filters = {
        ...this.filters,
        category_id: null,
        rooms: null,
        is_studio: null,
        price_from: null,
        price_to: null,
        quadrature_from: null,
        quadrature_to: null,
        floor_from: null,
        floor_to: null,
        repair_type: null,
        district_id: null,
        house_quadrature_from: null,
        house_quadrature_to: null,
      };
      this.currentPage = 1;
      this.isTitleVisible = true;
      this.triggerRefetch();
    },
    hideTitle() {
      this.isTitleVisible = false;
    },
    setRefetch(refetch) {
      this.refetchFn = refetch;
    },

    triggerRefetch() {
      if (this.refetchFn) {
        this.refetchFn();
      }
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
});
