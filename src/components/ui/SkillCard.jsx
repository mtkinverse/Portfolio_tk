const levelColors = {
  Expert:     'bg-emerald-500 text-white',
  Proficient: 'bg-bgTheme-accent text-white',
  Familiar:   'bg-slate-500 text-white',
};

const SkillCard = ({ label, picture, level, years, text }) => (
  <div className="bg-bgTheme-card rounded-xl p-5 flex flex-col gap-3 hover:shadow-lg hover:shadow-bgTheme-accent/20 transition-shadow duration-300">
    <div className="flex items-center gap-3">
      {picture ? (
        <img src={picture} alt={label} className="w-10 h-10 object-contain" />
      ) : (
        <div className="w-10 h-10 rounded-lg bg-bgTheme-light flex items-center justify-center text-white font-bold text-sm">
          {label.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold text-base leading-tight">{label}</h3>
        {years && (
          <p className="text-textTheme-muted text-xs mt-0.5">{years} yrs</p>
        )}
      </div>
      {level && (
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${levelColors[level] ?? 'bg-slate-500 text-white'}`}>
          {level}
        </span>
      )}
    </div>
    {text && (
      <p className="text-textTheme-muted text-sm leading-relaxed">{text}</p>
    )}
  </div>
);

export default SkillCard;
