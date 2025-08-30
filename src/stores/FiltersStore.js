import { defineStore } from "pinia";

export const useFiltersStore = defineStore("FiltersStore", {
  state: () => ({
    filters: {
      flats: {
        price_from: null,
        price_to: null,
        rooms: null,
        quadrature_from: null,
        quadrature_to: null,
        floor_from: null,
        floor_to: null,
        repair_type: null,
        district_id: null,
        is_studio: null,
        checkboxes: [
          // { checked: false, val: -1, title: "Студия" },
          { checked: false, val: 1, title: "1" },
          { checked: false, val: 2, title: "2" },
          { checked: false, val: 3, title: "3" },
          { checked: false, val: 4, title: "4+" },
        ],
      },
      commercial: {
        quadrature_from: null,
        quadrature_to: null,
        district_id: null,
        price_from: null,
        price_to: null,
      },
      newBuildings: {
        is_studio: null,
        rooms: null,
        price_from: null,
        price_to: null,
        quadrature_from: null,
        quadrature_to: null,
        floor_from: null,
        floor_to: null,
        district_id: null,
        checkboxes: [
          // { checked: false, val: -1, title: "Студия" },
          { checked: false, val: 1, title: "1" },
          { checked: false, val: 2, title: "2" },
          { checked: false, val: 3, title: "3" },
          { checked: false, val: 4, title: "4+" },
        ],
      },
      houses: {
        quadrature_from: null,
        quadrature_to: null,
        house_quadrature_from: null,
        house_quadrature_to: null,
        price_from: null,
        price_to: null,
        district_id: null,
      },
      category_id: 1,
      operation_type: null,
    },
    activeTab: 0,
    isTitleVisible: true,
    refetchFn: null,
    currentPage: 1,
    filtersApplied: false,
    resetTrigger: 0,
  }),
  getters: {
    getCheckboxes: (state) => (category) => {
      return state.filters[category]?.checkboxes.map((cb) => ({ ...cb })) || [];
    },
  },
  actions: {
    updateFilter(category, key, value) {
      if (key === "operation_type" && value) {
        value = value.toUpperCase();
      }
      if (category && this.filters[category] && key in this.filters[category]) {
        this.filters[category][key] = value;
      } else if (key in this.filters) {
        this.filters[key] = value;
      }
    },

    toggleCheckbox(category, index) {
      const checkbox = this.filters[category].checkboxes[index];
      checkbox.checked = !checkbox.checked;

      if (checkbox.val === -1) {
        this.filters[category].is_studio = checkbox.checked;
      } else {
        const selectedRooms = this.filters[category].checkboxes
          .filter((cb) => cb.checked && cb.val !== -1)
          .map((cb) => cb.val);
        this.filters[category].rooms = selectedRooms.length
          ? selectedRooms
          : null;
      }
    },

    getFilter(category, key) {
      return this.filters[category]?.[key] ?? this.filters[key] ?? null;
    },

    setActiveTab(index, categoryId) {
      this.activeTab = index;
      this.filters.category_id = categoryId;
    },

    resetFilters() {
      for (const category in this.filters) {
        if (typeof this.filters[category] === "object") {
          for (const key in this.filters[category]) {
            if (key === "checkboxes") {
              this.filters[category].checkboxes.forEach(
                (checkbox) => (checkbox.checked = false)
              );
            } else {
              this.filters[category][key] = null;
            }
          }
        }
      }
      this.filtersApplied = false;
      this.triggerRefetch();
      this.currentPage = 1;
      this.resetTrigger++;
    },
    applyFilters() {
      this.filtersApplied = true;
      this.triggerRefetch();
      this.hideTitle();
      this.currentPage = 1;
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
