import profile from '../data/profile';
import { socialLinks } from '../config/social';
import { getIcon } from '../config/iconMap';

// Minimal small-screen fallback until the dedicated mobile pass:
// identity + the essential links, no broken desktop.
export default function SmallScreenGate() {
  return (
    <div className="relative z-10 flex h-full items-center justify-center p-6 md:hidden">
      <div className="os-glass w-full max-w-sm rounded-2xl p-6 text-center shadow-window">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="mx-auto h-24 w-24 rounded-2xl border border-os-hairline object-cover"
        />
        <h1 className="mt-4 text-xl font-semibold">{profile.name}</h1>
        <p className="mt-1 text-sm text-os-muted">
          {profile.title} @ {profile.org}
        </p>
        <p className="mt-4 text-[13px] leading-relaxed text-os-muted">
          The full desktop experience needs a larger screen. Meanwhile:
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="/Resume.pdf"
            download
            className="rounded-full bg-os-accent px-4 py-2 text-sm font-medium text-white"
          >
            Download resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-os-hairline px-4 py-2 text-sm text-os-text"
          >
            {profile.email}
          </a>
        </div>
        <div className="mt-5 flex items-center justify-center gap-5">
          {socialLinks.map(({ label, url, icon }) => {
            const Icon = getIcon(icon);
            return Icon ? (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                 aria-label={label} className="text-os-muted hover:text-os-text">
                <Icon size={22} />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
