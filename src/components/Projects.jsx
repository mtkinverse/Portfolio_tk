import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import projectsData from '../data/projects';
import { getTopItems, getMoreItems } from '../utils/listUtils';
import SectionHeader from './ui/SectionHeader';
import ShowMoreButton from './ui/ShowMoreButton';

const ProjectCard = ({ project }) => (
  <div className="bg-bgTheme-card rounded-xl overflow-hidden hover:shadow-xl hover:shadow-bgTheme-accent/10 transition-shadow duration-300 flex flex-col">
    {/* Project image */}
    <div className="relative h-44 bg-bgTheme-dark overflow-hidden">
      <img
        src={project.picture}
        alt={project.label}
        className="w-full h-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      {project.isPrivate && (
        <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-bgTheme-dark/90 border border-bgTheme-accent/40 text-bgTheme-accent text-xs px-2.5 py-1 rounded-full font-medium">
          <FaLock size={10} /> Client Work
        </span>
      )}
    </div>

    <div className="flex flex-col flex-1 p-5 gap-4">
      <h3 className="text-white font-bold text-lg leading-snug">{project.label}</h3>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full bg-bgTheme-light/20 text-textTheme-muted border border-bgTheme-light/30"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-textTheme-muted text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <ul className="space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs text-textTheme-muted">
              <span className="text-bgTheme-accent mt-0.5 shrink-0">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-3 border-t border-bgTheme-light/20">
        {project.isPrivate ? (
          <span className="flex items-center gap-1.5 text-xs text-textTheme-muted">
            <FaLock size={11} /> NDA — source not public
          </span>
        ) : (
          <>
            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-textTheme-muted hover:text-white transition-colors"
              >
                <FaGithub size={14} /> GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-textTheme-muted hover:text-bgTheme-accent transition-colors"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
          </>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const topItems = getTopItems(projectsData);
  const moreItems = getMoreItems(projectsData);
  const visible = showMore ? projectsData.items : topItems;

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-site mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="From architecture to production — selected work"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visible.map((project) => (
            <ProjectCard key={project.label} project={project} />
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

export default Projects;
