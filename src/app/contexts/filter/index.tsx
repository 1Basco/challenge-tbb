import { createContext, useEffect, useReducer } from "react";
import { filterReducer } from "./reducer";
import {
  FilterContextOptions,
  FilterProviderOptions,
  FilterReducerOptions,
} from "./types";
import { FilterContextConstants } from "./constants";
import productData from "@/resources/data";
import { ICategory, IProduct } from "@/resources/types/productType";

export const FilterContext = createContext<FilterContextOptions>(
  {} as FilterContextOptions
);

export const filterInitialState: FilterReducerOptions = {
  products: [],
  filteredProducts: [],
  activeFilters: [],
  categories: [],
  searchTerm: "",
};

export const FilterProvider: React.FC<FilterProviderOptions> = ({
  children,
}: FilterProviderOptions): JSX.Element => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function getCategories() {
    const products: Array<IProduct> = productData.data.nodes;

    const uniqueCategories = products.reduce(
      (categories: Array<ICategory>, product: IProduct) => {
        const categoryExists = categories.some(
          (category) => category._id === product.category._id
        );
        if (!categoryExists) {
          categories.push(product.category);
        }
        return categories;
      },
      []
    );

    return uniqueCategories;
  }

  function filterProducts(): void {
    let filteredProducts: Array<IProduct> = [];

    const hasActiveFilters = state.activeFilters.length > 0;
    const hasSearchTerm = state.searchTerm && state.searchTerm.trim() !== "";

    if (hasActiveFilters) {
      filteredProducts = state.products.filter((product: IProduct) =>
        state.activeFilters.includes(product.category._id)
      );

      if (hasSearchTerm) {
        filteredProducts = termSearch(state.searchTerm, filteredProducts);
      }
    }

    if (hasSearchTerm && !hasActiveFilters) {
      filteredProducts = termSearch(state.searchTerm, state.products);
    }

    dispatch({
      type: FilterContextConstants.ADD_FILTERED_PRODUCTS,
      payload: filteredProducts,
    });
  }

  function termSearch(term: string, products: Array<IProduct>): IProduct[] {
    const searchTerm = term.trim().toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.name.toLowerCase().includes(searchTerm)
    );

    return filteredProducts;
  }

  function addSearchTerm(term: string): void {
    dispatch({
      type: FilterContextConstants.ADD_SEARCH_TERM,
      payload: term,
    });
  }

  function addFilter(filterId: string) {
    dispatch({
      type: FilterContextConstants.ADD_FILTER,
      payload: filterId,
    });
  }

  function removeFilter(filterId: string) {
    const filters = state.activeFilters.filter(
      (filter: string) => filter !== filterId
    );

    dispatch({
      type: FilterContextConstants.REMOVE_FILTER,
      payload: filters,
    });
  }

  function clearFilters() {
    dispatch({
      type: FilterContextConstants.CLEAR_FILTERS,
    });
  }

  //// EFFECTS ////
  useEffect(() => {
    filterProducts();
  }, [state.activeFilters, state.searchTerm]);

  useEffect(() => {
    dispatch({
      type: FilterContextConstants.ADD_PRODUCTS,
      payload: productData.data.nodes,
    });

    const categories = getCategories();

    dispatch({
      type: FilterContextConstants.ADD_CATEGORIES,
      payload: categories,
    });
  }, []);

  return (
    <FilterContext.Provider
      value={{ state, addFilter, removeFilter, clearFilters, addSearchTerm }}
    >
      {children}
    </FilterContext.Provider>
  );
};
