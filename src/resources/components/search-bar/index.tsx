import { useFilter } from "@/app/contexts/filter/use-filter.hook";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
const SearchBar: React.FC = (): JSX.Element => {
  const { state: filterState, addSearchTerm } = useFilter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    const inputValue = inputRef.current?.value;
    addSearchTerm(inputValue ?? "");
  }

  useEffect(() => {
    if (filterState.searchTerm.length !== 0) {
      handleClick();
    }
  }, [filterState.activeFilters]);

  return (
    <div className="flex items-center bg-neutral-500 rounded-lg shadow-md border border-neutral-400">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
      />
      <button className="px-4 py-2" onClick={() => handleClick()}>
        <LuSearch />
      </button>
    </div>
  );
};

export default SearchBar;
