const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-white tracking-tight">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-textTheme-muted text-lg">{subtitle}</p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-bgTheme-accent" />
  </div>
);

export default SectionHeader;
