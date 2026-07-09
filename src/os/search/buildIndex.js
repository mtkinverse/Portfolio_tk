import { APPS } from '../apps/appMeta';
import projects from '../../data/projects';
import skills from '../../data/skills';
import tools from '../../data/tools';
import experience from '../../data/experience';
import education from '../../data/education';
import achievements from '../../data/achievements';
import { slugify } from '../../utils/slug';

const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

const record = ({ type, title, subtitle, appId, itemId = null, keywords = [] }) => ({
  type,
  title,
  subtitle,
  appId,
  itemId,
  _hay: norm([title, subtitle, ...keywords].join(' ')),
});

// One SOURCES list — every data file contributes records via flatMap, so
// adding an item anywhere automatically enlarges the index. Adding a whole
// new data TYPE is a one-entry push here.
const SOURCES = [
  () =>
    APPS.map((a) =>
      record({
        type: 'Apps', title: a.title, subtitle: 'Application', appId: a.id,
        keywords: a.keywords,
      })
    ),
  () =>
    projects.items.map((p) =>
      record({
        type: 'Projects', title: p.label,
        subtitle: p.tech.slice(0, 4).join(' · '),
        appId: 'projects', itemId: slugify(p.label),
        keywords: [...p.tech, ...(p.highlights ?? []), p.description],
      })
    ),
  () =>
    skills.items.map((s) =>
      record({
        type: 'Skills', title: s.label, subtitle: `${s.level} · ${s.years} yrs`,
        appId: 'skills', itemId: slugify(s.label),
        keywords: [s.level, s.text],
      })
    ),
  () =>
    tools.items.flatMap((category) =>
      category.tools.map((t) =>
        record({
          type: 'Skills', title: t.label, subtitle: category.name,
          appId: 'skills', itemId: slugify(t.label),
          keywords: [t.level, category.name],
        })
      )
    ),
  () =>
    experience.items.map((job) =>
      record({
        type: 'Experience', title: job.role, subtitle: `${job.company} · ${job.period}`,
        appId: 'experience', itemId: slugify(job.company),
        keywords: [job.company, job.summary, ...job.bullets, ...job.tech],
      })
    ),
  () =>
    education.items.map((edu) =>
      record({
        type: 'Education', title: edu.degree, subtitle: edu.institution,
        appId: 'education', itemId: edu.id,
        keywords: [edu.grade, edu.summary, edu.fyp?.title ?? '', ...(edu.fyp?.tags ?? [])],
      })
    ),
  () =>
    achievements.items.map((a) =>
      record({
        type: 'Achievements', title: a.title, subtitle: a.metric,
        appId: 'achievements', itemId: a.id,
        keywords: [a.category, a.description, ...a.tech],
      })
    ),
];

export default function buildIndex() {
  return SOURCES.flatMap((source) => source());
}
