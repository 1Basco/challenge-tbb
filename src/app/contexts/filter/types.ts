import { ICategory, IProduct } from "@/resources/types/productType";

export interface FilterContextOptions {
  state: FilterReducerOptions;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
  addSearchTerm: (searchTerm: string) => void;
}

export interface FilterProviderOptions {
  children: JSX.Element | JSX.Element[];
}

export interface FilterReducerOptions {
  products: Array<IProduct>;
  filteredProducts: Array<IProduct>;
  activeFilters: Array<string>;
  searchTerm: string;
  categories: Array<ICategory>;
}
