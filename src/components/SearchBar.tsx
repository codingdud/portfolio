import { useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

function SearchBar({ onSearch, placeholder = "Search posts..." }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return;
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full py-3 pl-11 pr-12 bg-surface-1 rounded-pill text-ink text-sm border border-hairline focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition-shadow duration-200 placeholder:text-ink-muted/60"
      />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-surface-2 border border-hairline rounded-xs text-xs text-ink-muted font-mono pointer-events-none">
        /
      </kbd>
    </div>
  );
}

export default SearchBar;
