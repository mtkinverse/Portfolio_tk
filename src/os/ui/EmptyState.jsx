import { FaSearch } from 'react-icons/fa';

export default function EmptyState({ title = 'Nothing here', hint }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <FaSearch size={22} className="text-os-dim" aria-hidden />
      <p className="text-sm font-medium text-os-muted">{title}</p>
      {hint && <p className="text-[12px] text-os-dim">{hint}</p>}
    </div>
  );
}
