import { useState } from 'react';

// Icon/thumbnail + label cell with an initials fallback when the image is
// missing or fails to load.
const initials = (label = '') =>
  label
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function FileTile({ picture, label, sub, badge, highlighted, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = picture && !imgFailed;
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      {...(onClick ? { type: 'button', onClick } : {})}
      className={`os-tile flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors duration-150 ${
        onClick ? 'cursor-pointer hover:border-os-accent/60' : ''
      } ${highlighted ? 'os-highlight' : ''}`}
    >
      {showImage ? (
        <img
          src={picture}
          alt=""
          className="h-9 w-9 shrink-0 rounded-lg object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--os-glass)] font-mono text-[12px] text-os-muted"
        >
          {initials(label)}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-medium text-os-text">{label}</span>
        {sub && <span className="block truncate text-[11px] text-os-muted">{sub}</span>}
      </span>
      {badge}
    </Tag>
  );
}
