import { useMemo } from 'react';
import getSkillGroups from './getSkillGroups';
import AppShell from '../../ui/AppShell';
import FileTile from '../../ui/FileTile';
import LevelBadge from '../../ui/LevelBadge';
import useFocusHighlight from '../../hooks/useFocusHighlight';

export default function SkillsApp() {
  const groups = useMemo(getSkillGroups, []);
  const highlightId = useFocusHighlight('skills');

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        {groups.map((group) => (
          <section key={group.name}>
            <h2 className="mb-2.5 text-[12px] font-semibold uppercase tracking-wider text-os-dim">
              {group.name}
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {group.members.map((m) => (
                <div key={m.id} data-item-id={m.id} title={m.sub ?? undefined}>
                  <FileTile
                    picture={m.picture}
                    label={m.label}
                    sub={m.sub}
                    badge={<LevelBadge level={m.level} />}
                    highlighted={highlightId === m.id}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
