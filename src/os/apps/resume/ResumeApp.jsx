import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const action =
  'flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12px] transition-colors duration-150';

// Embedded viewer for the same /Resume.pdf the download button serves —
// per CLAUDE.md both must track the authoritative résumé in context/.
export default function ResumeApp() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 items-center gap-2 border-b border-os-hairline px-4 py-2.5">
        <span className="flex-1 font-mono text-[12px] text-os-muted">Resume.pdf</span>
        <a href="/Resume.pdf" download="Taha-Khan-Resume.pdf"
           className={`${action} bg-os-accent text-white hover:bg-os-accentSoft`}>
          <FaDownload size={11} /> Download
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
           className={`${action} border border-os-hairline text-os-muted hover:text-os-text`}>
          <FaExternalLinkAlt size={10} /> New tab
        </a>
      </div>
      <div className="min-h-0 flex-1 bg-[var(--os-abyss)]">
        <iframe title="Resume PDF" src="/Resume.pdf" className="h-full w-full border-0" />
      </div>
      <p className="shrink-0 border-t border-os-hairline px-4 py-1.5 text-[11px] text-os-dim">
        If the preview does not load,{' '}
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-os-accentSoft hover:underline">
          open the PDF directly
        </a>.
      </p>
    </div>
  );
}
