import { useState } from 'react';
import { FaThLarge, FaStream } from 'react-icons/fa';
import experienceData from '../../../data/experience';
import { slugify } from '../../../utils/slug';
import AppShell from '../../ui/AppShell';
import WindowToolbar from '../../ui/WindowToolbar';
import TechPill from '../../ui/TechPill';
import useFocusHighlight from '../../hooks/useFocusHighlight';

const CurrentBadge = () => (
  <span className="flex items-center gap-1.5 rounded-full border border-os-online/40 px-2 py-0.5 text-[10px] font-medium text-os-online">
    <span className="h-1.5 w-1.5 rounded-full bg-os-online" aria-hidden /> Current
  </span>
);

function RoleCard({ job, highlighted }) {
  return (
    <article
      data-item-id={slugify(job.company)}
      className={`os-tile rounded-xl p-4 ${highlighted ? 'os-highlight' : ''}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-[14px] font-semibold text-os-text">{job.role}</h3>
          <p className="text-[12px] text-os-muted">
            {job.company} · {job.type} · {job.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-os-dim">{job.period}</span>
          {job.isCurrent && <CurrentBadge />}
        </div>
      </div>

      <p className="mt-2.5 text-[12px] leading-relaxed text-os-muted">{job.summary}</p>

      <ul className="mt-2.5 space-y-1">
        {job.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[12px] text-os-muted">
            <span className="mt-0.5 shrink-0 text-os-accentSoft">›</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.tech.map((t) => (
          <TechPill key={t}>{t}</TechPill>
        ))}
      </div>
    </article>
  );
}

function TimelineView({ items, highlightId }) {
  return (
    <ol className="relative ml-2 border-l border-os-hairline pl-6">
      {items.map((job) => (
        <li key={job.company} className="relative pb-8 last:pb-0">
          <span
            aria-hidden
            className={`absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full border-2 border-os-base ${
              job.isCurrent ? 'bg-os-online' : 'bg-os-accent'
            }`}
          />
          <div
            data-item-id={slugify(job.company)}
            className={highlightId === slugify(job.company) ? 'os-highlight rounded-lg' : ''}
          >
            <p className="font-mono text-[11px] text-os-dim">{job.period}</p>
            <h3 className="mt-0.5 text-[14px] font-semibold text-os-text">{job.role}</h3>
            <p className="text-[12px] text-os-muted">
              {job.company} · {job.type}
            </p>
            <p className="mt-1.5 max-w-prose text-[12px] leading-relaxed text-os-muted">
              {job.summary}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

const viewBtn = (active) =>
  `flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] transition-colors duration-150 ${
    active ? 'bg-os-accent text-white' : 'text-os-muted hover:text-os-text'
  }`;

export default function ExperienceApp() {
  const [view, setView] = useState('folder');
  const highlightId = useFocusHighlight('experience');
  const items = experienceData.items;

  return (
    <AppShell
      toolbar={
        <WindowToolbar
          right={
            <div className="os-tile flex items-center gap-0.5 rounded-lg p-0.5" role="group" aria-label="View mode">
              <button type="button" onClick={() => setView('folder')} className={viewBtn(view === 'folder')} aria-pressed={view === 'folder'}>
                <FaThLarge size={11} /> Cards
              </button>
              <button type="button" onClick={() => setView('timeline')} className={viewBtn(view === 'timeline')} aria-pressed={view === 'timeline'}>
                <FaStream size={11} /> Timeline
              </button>
            </div>
          }
        />
      }
    >
      {view === 'folder' ? (
        <div className="flex flex-col gap-3">
          {items.map((job) => (
            <RoleCard key={job.company} job={job} highlighted={highlightId === slugify(job.company)} />
          ))}
        </div>
      ) : (
        <TimelineView items={items} highlightId={highlightId} />
      )}
    </AppShell>
  );
}
