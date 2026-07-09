import educationData from '../../../data/education';
import AppShell from '../../ui/AppShell';
import TechPill from '../../ui/TechPill';
import useFocusHighlight from '../../hooks/useFocusHighlight';

export default function EducationApp() {
  const highlightId = useFocusHighlight('education');

  return (
    <AppShell>
      <div className="flex flex-col gap-4">
        {educationData.items.map((edu) => (
          <article
            key={edu.id}
            data-item-id={edu.id}
            className={`os-tile rounded-xl p-5 ${highlightId === edu.id ? 'os-highlight' : ''}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-[15px] font-semibold text-os-text">{edu.degree}</h2>
                <p className="text-[12px] text-os-muted">
                  {edu.institution} · {edu.location}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] text-os-dim">{edu.period}</p>
                <p className="mt-0.5 font-mono text-[12px] font-semibold text-os-accentSoft">
                  {edu.grade}
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-prose text-[12px] leading-relaxed text-os-muted">
              {edu.summary}
            </p>

            {edu.highlights?.length > 0 && (
              <ul className="mt-2.5 space-y-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[12px] text-os-muted">
                    <span className="mt-0.5 shrink-0 text-os-accentSoft">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {edu.fyp && (
              <div className="mt-4 rounded-lg border border-os-hairline bg-[var(--os-glass)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-os-dim">
                  Final-year project
                </p>
                <h3 className="mt-1 text-[13px] font-semibold text-os-text">{edu.fyp.title}</h3>
                <p className="mt-1.5 max-w-prose text-[12px] leading-relaxed text-os-muted">
                  {edu.fyp.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {edu.fyp.tags.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </AppShell>
  );
}
