import { useFilter } from "@/app/contexts/filter/use-filter.hook";
import React from "react";
import FilterItem from "../filter-item";

type FiltersProps = {};

const Filters: React.FC<FiltersProps> = (): JSX.Element => {
  const {
    state: filterState,
    removeFilter,
    addFilter,
    clearFilters,
  } = useFilter();

  function handleClick(filterId: string) {
    if (filterState.activeFilters.includes(filterId)) {
      removeFilter(filterId);
    } else {
      addFilter(filterId);
    }
  }

  function removeAllFilters() {
    clearFilters();
  }

  return (
    <div className="my-3 md:my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {filterState.categories.map((filter) => (
          <FilterItem
            key={filter._id}
            name={filter.name}
            isActive={filterState.activeFilters.includes(filter._id)}
            onClick={() => handleClick(filter._id)}
          />
        ))}
      </div>
      <div className="flex justify-center py-2">
        <FilterItem name={"Remove All"} onClick={() => removeAllFilters()} />
      </div>
    </div>
  );
};

export default Filters;
