import { FilterContext } from ".";
import { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
