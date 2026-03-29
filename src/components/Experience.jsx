import { useState } from 'react';
import experienceData from '../data/experience';
import { getTopItems, getMoreItems } from '../utils/listUtils';
import SectionHeader from './ui/SectionHeader';
import ShowMoreButton from './ui/ShowMoreButton';

const typeBadgeColors = {
  'Full-time': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  'Volunteer':  'bg-amber-500/20  text-amber-400  border border-amber-500/30',
  'Part-time':  'bg-blue-500/20   text-blue-400   border border-blue-500/30',
};

const ExperienceEntry = ({ entry, isLast }) => (
  <div className="relative pl-8">
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-bgTheme-accent/30" />
    )}

    {/* Timeline node */}
    <div className="absolute left-0 top-1.5 flex items-center justify-center">
      {entry.isCurrent ? (
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bgTheme-accent opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-bgTheme-accent" />
        </span>
      ) : (
        <span className="h-4 w-4 rounded-full bg-bgTheme-card border-2 border-bgTheme-accent" />
      )}
    </div>

    {/* Card */}
    <div className="bg-bgTheme-card rounded-xl p-6 mb-8 hover:shadow-lg hover:shadow-bgTheme-accent/10 transition-shadow duration-300">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{entry.role}</h3>
          <p className="text-bgTheme-accent font-medium text-sm mt-0.5">{entry.company}</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center shrink-0">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeBadgeColors[entry.type] ?? 'bg-slate-500/20 text-slate-400 border border-slate-500/30'}`}>
            {entry.type}
          </span>
          <span className="text-textTheme-muted text-xs">{entry.period}</span>
        </div>
      </div>

      <p className="text-textTheme-muted text-sm mb-4 leading-relaxed italic">{entry.summary}</p>

      <ul className="space-y-1.5 mb-4">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-textTheme-muted">
            <span className="text-bgTheme-accent mt-1 shrink-0">›</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-bgTheme-light/20">
        {entry.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-bgTheme-light/20 text-textTheme-muted border border-bgTheme-light/30"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const topItems = getTopItems(experienceData);
  const moreItems = getMoreItems(experienceData);
  const visible = showMore ? experienceData.items : topItems;

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-site mx-auto max-w-3xl">
        <SectionHeader
          title="Experience"
          subtitle="Professional track record — building systems that matter"
        />
        <div className="mt-8">
          {visible.map((entry, index) => (
            <ExperienceEntry
              key={entry.company + entry.role}
              entry={entry}
              isLast={index === visible.length - 1 && (!showMore || moreItems.length === 0)}
            />
          ))}
        </div>
        {moreItems.length > 0 && (
          <ShowMoreButton
            showMore={showMore}
            onToggle={() => setShowMore((p) => !p)}
            countHidden={moreItems.length}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
