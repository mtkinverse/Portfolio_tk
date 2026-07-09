import { FaSearch } from 'react-icons/fa';

// Generic app header: optional search, optional filter chips, optional right
// slot (e.g. a view toggle). Each app passes only what it needs.
export default function WindowToolbar({
  search, onSearch, searchPlaceholder = 'Search…',
  filters, activeFilter, onFilter,
  right,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {onSearch && (
        <label className="os-tile flex min-w-[180px] flex-1 items-center gap-2 rounded-lg px-3 py-1.5 md:max-w-xs">
          <FaSearch size={12} className="shrink-0 text-os-dim" aria-hidden />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-[13px] text-os-text placeholder:text-os-dim focus:outline-none"
          />
        </label>
      )}

      {filters?.length > 0 && (
        <div className="os-scroll flex max-w-full items-center gap-1.5 overflow-x-auto pb-0.5">
          {filters.map((f) => {
            const active = f === activeFilter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => onFilter(active ? null : f)}
                aria-pressed={active}
                className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors duration-150 ${
                  active
                    ? 'border-os-accent bg-os-accent text-white'
                    : 'border-os-hairline text-os-muted hover:border-os-accent hover:text-os-text'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}

      {right && <div className="ml-auto flex items-center gap-2">{right}</div>}
    </div>
  );
}
