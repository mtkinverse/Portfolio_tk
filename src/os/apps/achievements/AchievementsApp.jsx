import { useMemo } from 'react';
import achievementsData from '../../../data/achievements';
import AppShell from '../../ui/AppShell';
import TechPill from '../../ui/TechPill';
import useFocusHighlight from '../../hooks/useFocusHighlight';

export default function AchievementsApp() {
  const highlightId = useFocusHighlight('achievements');

  // Group by category, preserving data-file order.
  const groups = useMemo(() => {
    const byCategory = new Map();
    for (const item of achievementsData.items) {
      if (!byCategory.has(item.category)) byCategory.set(item.category, []);
      byCategory.get(item.category).push(item);
    }
    return [...byCategory.entries()];
  }, []);

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        {groups.map(([category, items]) => (
          <section key={category}>
            <h2 className="mb-2.5 text-[12px] font-semibold uppercase tracking-wider text-os-dim">
              {category}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((a) => (
                <article
                  key={a.id}
                  data-item-id={a.id}
                  className={`os-tile rounded-xl p-4 ${highlightId === a.id ? 'os-highlight' : ''}`}
                >
                  <p className="font-mono text-lg font-semibold text-os-accentSoft">{a.metric}</p>
                  <h3 className="mt-1 text-[13px] font-semibold leading-snug text-os-text">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-os-muted">{a.description}</p>
                  {a.tech.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {a.tech.map((t) => (
                        <TechPill key={t}>{t}</TechPill>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
