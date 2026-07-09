const levelStyles = {
  Expert: 'text-os-online border-os-online/40',
  Proficient: 'text-os-accentSoft border-os-accent/40',
  Familiar: 'text-os-warn border-os-warn/40',
};

export default function LevelBadge({ level }) {
  if (!level) return null;
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
        levelStyles[level] ?? 'text-os-muted border-os-hairline'
      }`}
    >
      {level}
    </span>
  );
}
