import { FilterContextConstants } from "./constants";

export const filterReducer = (prevState: any, action: any) => {
  switch (action.type) {
    case FilterContextConstants.ADD_CATEGORIES:
      return {
        ...prevState,
        categories: action.payload,
      };

    case FilterContextConstants.ADD_PRODUCTS:
      return {
        ...prevState,
        products: action.payload,
      };

    case FilterContextConstants.ADD_SEARCH_TERM:
      return {
        ...prevState,
        searchTerm: action.payload,
      };

    case FilterContextConstants.ADD_FILTER:
      return {
        ...prevState,
        activeFilters: [...prevState.activeFilters, action.payload],
      };

    case FilterContextConstants.REMOVE_FILTER:
      return {
        ...prevState,
        activeFilters: action.payload,
      };

    case FilterContextConstants.CLEAR_FILTERS:
      return {
        ...prevState,
        activeFilters: [],
        filteredProducts: [],
        searchTerm: "",
      };

    case FilterContextConstants.ADD_FILTERED_PRODUCTS:
      return {
        ...prevState,
        filteredProducts: action.payload,
      };

    default:
      return prevState;
  }
};
