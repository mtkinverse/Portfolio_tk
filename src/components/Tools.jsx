import { useState } from 'react';
import toolsData from '../data/tools';
import { getTopItems, getMoreItems } from '../utils/listUtils';
import SectionHeader from './ui/SectionHeader';
import ShowMoreButton from './ui/ShowMoreButton';

const levelDots = {
  Expert:     'bg-emerald-400',
  Proficient: 'bg-bgTheme-accent',
  Familiar:   'bg-slate-400',
};

const ToolChip = ({ label, picture, level }) => (
  <div className="flex items-center gap-2 bg-bgTheme-dark/60 rounded-lg px-3 py-2 border border-bgTheme-light/20 hover:border-bgTheme-accent/40 transition-colors duration-200">
    {picture ? (
      <img src={picture} alt={label} className="w-5 h-5 object-contain" />
    ) : (
      <span className="w-5 h-5 rounded bg-bgTheme-light/30 flex items-center justify-center text-[9px] font-bold text-textTheme-muted">
        {label.slice(0, 2).toUpperCase()}
      </span>
    )}
    <span className="text-textTheme-muted text-sm">{label}</span>
    <span
      className={`ml-auto w-2 h-2 rounded-full shrink-0 ${levelDots[level] ?? 'bg-slate-400'}`}
      title={level}
    />
  </div>
);

const ToolCategory = ({ category }) => (
  <div className="bg-bgTheme-card rounded-xl p-5">
    <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
      <span className="w-1.5 h-5 rounded-full bg-bgTheme-accent inline-block" />
      {category.name}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {category.tools.map((tool) => (
        <ToolChip key={tool.label} {...tool} />
      ))}
    </div>
  </div>
);

const Tools = () => {
  const [showMore, setShowMore] = useState(false);
  const topItems = getTopItems(toolsData);
  const moreItems = getMoreItems(toolsData);
  const visible = showMore ? toolsData.items : topItems;

  return (
    <section id="tools" className="py-16 px-4">
      <div className="max-w-site mx-auto">
        <SectionHeader
          title="Tools & Technologies"
          subtitle="Production infrastructure I work with daily"
        />

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mb-8 text-xs text-textTheme-muted">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Expert</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-bgTheme-accent inline-block" /> Proficient</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> Familiar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visible.map((category) => (
            <ToolCategory key={category.name} category={category} />
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

export default Tools;
