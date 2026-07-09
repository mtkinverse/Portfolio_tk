// PURE app metadata — the single source of truth for "what apps exist".
// No component imports here (that lives in registry.jsx, imported only by the
// window renderer) so store/desktop/taskbar/start/search can all import this
// without creating a cycle. Adding an entry here + a component in registry.jsx
// surfaces the app on the desktop, Start menu, taskbar and global search.
export const APPS = [
  {
    id: 'projects',
    title: 'Projects',
    iconKey: 'FaCode',
    tint: '#4c8dff',
    size: { w: 1000, h: 660 },
    group: 'Work',
    taskbarPinned: true,
    showOnDesktop: true,
    keywords: ['work', 'portfolio', 'github', 'apps', 'case studies'],
  },
  {
    id: 'skills',
    title: 'Skills',
    iconKey: 'FaLayerGroup',
    tint: '#3fe0a5',
    size: { w: 920, h: 640 },
    group: 'Work',
    taskbarPinned: true,
    showOnDesktop: true,
    keywords: ['stack', 'technologies', 'languages', 'tools'],
  },
  {
    id: 'experience',
    title: 'Experience',
    iconKey: 'FaBriefcase',
    tint: '#f5b567',
    size: { w: 900, h: 640 },
    group: 'Work',
    taskbarPinned: true,
    showOnDesktop: true,
    keywords: ['jobs', 'career', 'timeline', 'companies', 'roles'],
  },
  {
    id: 'education',
    title: 'Education',
    iconKey: 'FaGraduationCap',
    tint: '#b18cff',
    size: { w: 780, h: 580 },
    group: 'Me',
    taskbarPinned: false,
    showOnDesktop: true,
    keywords: ['degree', 'university', 'fyp', 'cgpa', 'fast', 'nuces'],
  },
  {
    id: 'resume',
    title: 'Resume',
    iconKey: 'FaFilePdf',
    tint: '#ff8fa3',
    size: { w: 840, h: 680 },
    group: 'Me',
    taskbarPinned: true,
    showOnDesktop: true,
    keywords: ['cv', 'pdf', 'download', 'hire'],
  },
  {
    id: 'achievements',
    title: 'Achievements',
    iconKey: 'FaTrophy',
    tint: '#ffd166',
    size: { w: 880, h: 600 },
    group: 'Me',
    taskbarPinned: false,
    showOnDesktop: true,
    keywords: ['wins', 'metrics', 'impact', 'awards'],
  },
  {
    id: 'contact',
    title: 'Contact',
    iconKey: 'FaAddressBook',
    tint: '#5ad1e6',
    size: { w: 640, h: 540 },
    group: 'Reach',
    taskbarPinned: true,
    showOnDesktop: true,
    keywords: ['email', 'phone', 'linkedin', 'github', 'social', 'reach', 'hire'],
  },
];

export const getApp = (id) => APPS.find((a) => a.id === id);

// Dev-only sanity checks: catch registry drift early instead of at runtime.
if (import.meta.env.DEV) {
  const ids = new Set();
  for (const app of APPS) {
    for (const key of ['id', 'title', 'iconKey', 'tint', 'size', 'group']) {
      if (app[key] == null) console.warn(`[appMeta] "${app.id}" missing "${key}"`);
    }
    if (ids.has(app.id)) console.warn(`[appMeta] duplicate app id "${app.id}"`);
    ids.add(app.id);
  }
}
