import { useState } from 'react';
import { FaCopy, FaCheck, FaExternalLinkAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../../../config/social';
import profile from '../../../data/profile';
import { getIcon } from '../../../config/iconMap';
import AppShell from '../../ui/AppShell';

function Row({ icon: Icon, tint, name, value, href, copyable }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — the value is still visible to select */
    }
  };

  return (
    <div className="os-tile flex items-center gap-3 rounded-xl p-3.5">
      {Icon && <Icon size={18} style={tint ? { color: tint } : undefined} className="shrink-0 text-os-muted" />}
      <div className="min-w-0 flex-1 select-text">
        <p className="font-mono text-[12px] text-os-dim">{name}</p>
        <p className="truncate text-[13px] text-os-text">{value}</p>
      </div>
      {copyable && (
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? 'Copied' : `Copy ${name}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-os-muted transition-colors hover:bg-[var(--os-glass)] hover:text-os-text"
        >
          {copied ? <FaCheck size={12} className="text-os-online" /> : <FaCopy size={12} />}
        </button>
      )}
      {href && (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={`Open ${name}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-os-muted transition-colors hover:bg-[var(--os-glass)] hover:text-os-text"
        >
          <FaExternalLinkAlt size={11} />
        </a>
      )}
    </div>
  );
}

// Nostalgic ".url / .txt" file listing built from social.js + profile.js —
// adding a social link auto-adds a row.
export default function ContactApp() {
  return (
    <AppShell>
      <div className="flex flex-col gap-2.5">
        {socialLinks.map(({ label, url, icon }) => (
          <Row
            key={label}
            icon={getIcon(icon)}
            name={`${label}.url`}
            value={url.replace(/^https?:\/\/(www\.)?/, '')}
            href={url}
          />
        ))}
        <Row icon={FaEnvelope} name="Email.txt" value={profile.email} href={`mailto:${profile.email}`} copyable />
        <Row icon={FaPhone} name="Phone.txt" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} copyable />
      </div>
      <p className="mt-5 text-center text-[12px] text-os-dim">
        Open to backend, distributed-systems, and agentic-AI work.
      </p>
    </AppShell>
  );
}
