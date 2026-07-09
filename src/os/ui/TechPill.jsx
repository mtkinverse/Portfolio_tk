export default function TechPill({ children }) {
  return (
    <span className="os-tile rounded-full px-2 py-0.5 font-mono text-[11px] text-os-muted">
      {children}
    </span>
  );
}
