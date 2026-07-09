import skills from '../../../data/skills';
import tools from '../../../data/tools';
import { slugify } from '../../../utils/slug';

// Merges skills.js (flat languages/frameworks) and tools.js (already
// categorized) into one group list with a common member shape. Adding an item
// to either file — or a whole new category to tools.js — auto-appears.
export default function getSkillGroups() {
  return [
    {
      name: 'Languages & Frameworks',
      members: skills.items.map((s) => ({
        id: slugify(s.label),
        label: s.label,
        picture: s.picture,
        level: s.level,
        sub: `${s.years} yrs — ${s.text}`,
      })),
    },
    ...tools.items.map((category) => ({
      name: category.name,
      members: category.tools.map((t) => ({
        id: slugify(t.label),
        label: t.label,
        picture: t.picture,
        level: t.level,
        sub: null,
      })),
    })),
  ];
}
