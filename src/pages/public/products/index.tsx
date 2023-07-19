import { useFilter } from "@/app/contexts/filter/use-filter.hook";
import Filters from "@/resources/components/filters";
import ProductItem from "@/resources/components/product-item";
import SearchBar from "@/resources/components/search-bar";
import { IProduct } from "@/resources/types/productType";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function ProductsPage(): JSX.Element {
  const { state: filterState } = useFilter();

  const [searchIsEmpty, setSearchIsEmpty] = useState(false);

  useEffect(() => {
    if (
      filterState.filteredProducts.length === 0 &&
      (filterState.searchTerm.length > 0 ||
        filterState.activeFilters.length > 0)
    ) {
      setSearchIsEmpty(true);
    } else {
      setSearchIsEmpty(false);
    }
  }, [filterState.filteredProducts, filterState.searchTerm]);

  return (
    <>
      <Helmet title="Products" />
      <div className="my-2">
        <h1 className="text-2xl font-semibold text-cyan-950 text-center">
          What are you looking for?
        </h1>
      </div>
      <div className="p-8 flex justify-between flex-col gap-4 md:flex-row">
        <div className="min-w-fit">
          <SearchBar />
          <div>
            <Filters />
          </div>
        </div>
        {searchIsEmpty ? (
          <div className="w-full px-8">
            <h2 className="text-2xl text-red-400">
              No results found. Try something else.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-6 pt-0 md:px-4">
            {filterState.filteredProducts.length > 0
              ? filterState.filteredProducts.map((product: IProduct) => (
                  <ProductItem product={product} key={product.id} />
                ))
              : filterState.products.map((product: IProduct) => (
                  <ProductItem product={product} key={product.id} />
                ))}
          </div>
        )}
      </div>
    </>
  );
}
