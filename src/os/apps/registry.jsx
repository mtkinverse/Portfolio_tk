// appId → component. Imported ONLY by the window renderer (WindowLayer→Window)
// so the store→appMeta edge and the app→store edge never form a cycle.
import { APPS } from './appMeta';
import ProjectsApp from './projects/ProjectsApp';
import SkillsApp from './skills/SkillsApp';
import ExperienceApp from './experience/ExperienceApp';
import EducationApp from './education/EducationApp';
import ResumeApp from './resume/ResumeApp';
import AchievementsApp from './achievements/AchievementsApp';
import ContactApp from './contact/ContactApp';

const components = {
  projects: ProjectsApp,
  skills: SkillsApp,
  experience: ExperienceApp,
  education: EducationApp,
  resume: ResumeApp,
  achievements: AchievementsApp,
  contact: ContactApp,
};

function MissingApp() {
  return (
    <div className="flex h-full items-center justify-center p-8 text-center text-sm text-os-muted">
      This app is registered but has no component yet. Add it to
      <code className="mx-1 rounded bg-[var(--os-glass)] px-1.5 py-0.5 font-mono text-[12px]">
        src/os/apps/registry.jsx
      </code>
    </div>
  );
}

export const getComponent = (id) => components[id] ?? MissingApp;

if (import.meta.env.DEV) {
  for (const app of APPS) {
    if (!components[app.id]) {
      console.warn(`[registry] app "${app.id}" is in appMeta but has no component`);
    }
  }
}
