const ShowMoreButton = ({ showMore, onToggle, countHidden }) => (
  <div className="flex justify-center mt-8">
    <button
      onClick={onToggle}
      className="px-6 py-2 rounded-full border border-bgTheme-accent text-bgTheme-accent hover:bg-bgTheme-accent hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
    >
      {showMore
        ? 'Show Less'
        : `Show More${countHidden ? ` (${countHidden})` : ''}`}
    </button>
  </div>
);

export default ShowMoreButton;
