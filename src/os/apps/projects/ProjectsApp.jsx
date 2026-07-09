import { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLock, FaChevronLeft } from 'react-icons/fa';
import projectsData from '../../../data/projects';
import { slugify } from '../../../utils/slug';
import AppShell from '../../ui/AppShell';
import WindowToolbar from '../../ui/WindowToolbar';
import TechPill from '../../ui/TechPill';
import EmptyState from '../../ui/EmptyState';
import useFocusHighlight from '../../hooks/useFocusHighlight';

const NdaBadge = () => (
  <span className="flex items-center gap-1.5 rounded-full border border-os-warn/40 px-2 py-0.5 text-[10px] font-medium text-os-warn">
    <FaLock size={9} /> Client work
  </span>
);

const ProjectLinks = ({ project }) =>
  project.isPrivate ? (
    <span className="flex items-center gap-1.5 text-[12px] text-os-dim">
      <FaLock size={10} /> NDA: source not public
    </span>
  ) : (
    <span className="flex items-center gap-4">
      {project.gitLink && (
        <a
          href={project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-os-muted transition-colors hover:text-os-text"
        >
          <FaGithub size={13} /> GitHub
        </a>
      )}
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-os-muted transition-colors hover:text-os-accentSoft"
        >
          <FaExternalLinkAlt size={11} /> Live demo
        </a>
      )}
    </span>
  );

function ProjectCard({ project, highlighted, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-item-id={slugify(project.label)}
      className={`os-tile flex flex-col gap-2.5 rounded-xl p-4 text-left transition-colors duration-150 hover:border-os-accent/60 ${
        highlighted ? 'os-highlight' : ''
      }`}
    >
      <span className="flex items-start justify-between gap-2">
        <span className="text-[14px] font-semibold leading-snug text-os-text">{project.label}</span>
        {project.isPrivate && <NdaBadge />}
      </span>
      <span className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <TechPill key={t}>{t}</TechPill>
        ))}
        {project.tech.length > 5 && (
          <span className="text-[11px] text-os-dim">+{project.tech.length - 5}</span>
        )}
      </span>
      <span className="line-clamp-3 text-[12px] leading-relaxed text-os-muted">
        {project.description}
      </span>
    </button>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-2 text-[12px] text-os-muted transition-colors hover:text-os-text"
      >
        <FaChevronLeft size={10} /> All projects
      </button>

      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-semibold">{project.label}</h2>
        {project.isPrivate && <NdaBadge />}
      </div>

      {project.picture && (
        <img
          src={project.picture.startsWith('/') ? project.picture : `/${project.picture}`}
          alt={`${project.label} screenshot`}
          className="max-h-64 w-full rounded-xl border border-os-hairline object-cover"
        />
      )}

      <p className="max-w-prose text-[13px] leading-relaxed text-os-muted">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-[12px] text-os-muted">
              <span className="mt-0.5 shrink-0 text-os-accentSoft">›</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechPill key={t}>{t}</TechPill>
        ))}
      </div>

      <div className="border-t border-os-hairline pt-3">
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

export default function ProjectsApp() {
  const [query, setQuery] = useState('');
  const [tech, setTech] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const highlightId = useFocusHighlight('projects');

  // Global search can land directly on a project: open its detail view.
  useEffect(() => {
    if (highlightId) setSelectedId(highlightId);
  }, [highlightId]);

  const allTech = useMemo(
    () => [...new Set(projectsData.items.flatMap((p) => p.tech))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.items.filter((p) => {
      if (tech && !p.tech.includes(tech)) return false;
      if (!q) return true;
      return (
        p.label.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, tech]);

  const selected = selectedId
    ? projectsData.items.find((p) => slugify(p.label) === selectedId)
    : null;

  return (
    <AppShell
      toolbar={
        !selected && (
          <WindowToolbar
            search={query}
            onSearch={setQuery}
            searchPlaceholder={`Search ${projectsData.items.length} projects…`}
            filters={allTech}
            activeFilter={tech}
            onFilter={setTech}
          />
        )
      }
    >
      {selected ? (
        <ProjectDetail project={selected} onBack={() => setSelectedId(null)} />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No projects match"
          hint="Try a different term, or clear the tech filter."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => {
            const id = slugify(p.label);
            return (
              <ProjectCard
                key={id}
                project={p}
                highlighted={highlightId === id}
                onOpen={() => setSelectedId(id)}
              />
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
