interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholser?:string;
}

function SearchBar({ onSearch,placeholser="Search posts..." }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholser}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-600"
      />
    </div>
  );
}

export default SearchBar;