import { useState } from 'react';
import skillsData from '../data/skills';
import { getTopItems, getMoreItems } from '../utils/listUtils';
import SectionHeader from './ui/SectionHeader';
import SkillCard from './ui/SkillCard';
import ShowMoreButton from './ui/ShowMoreButton';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  const topItems = getTopItems(skillsData);
  const moreItems = getMoreItems(skillsData);
  const visible = showMore ? skillsData.items : topItems;

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-site mx-auto">
        <SectionHeader
          title="Skills"
          subtitle="Languages and frameworks I build with"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {visible.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
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

export default Skills;
