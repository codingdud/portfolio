interface SearchBarProps {
  onSearch: (term: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-600"
      />
    </div>
  );
}

export default SearchBar;