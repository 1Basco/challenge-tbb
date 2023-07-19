type FilterItemProps = {
  name: string;
  onClick: () => void;
  isActive?: boolean;
};

const FilterItem: React.FC<FilterItemProps> = ({
  name,
  onClick,
  isActive,
}: FilterItemProps) => {
  return (
    <button
      className={`py-2 px-4 md:py-2 md:px-4 text-sm md:text-base text-white rounded-lg ${
        isActive ? "bg-sky-900" : "bg-slate-800"
      } hover:bg-slate-600`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default FilterItem;
