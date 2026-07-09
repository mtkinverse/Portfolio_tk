// Hand-rolled weighted matcher — deterministic and dependency-free.
// AND across query tokens; per token the best field score wins.
const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();

const tokenScore = (rec, token) => {
  const title = norm(rec.title);
  if (title === token) return 100;
  if (title.startsWith(token)) return 60;
  if (title.includes(token)) return 40;
  if (rec._hay.includes(token)) return 20;
  return 0;
};

export default function match(index, query, limit = 14) {
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored = [];
  for (const rec of index) {
    let total = 0;
    let miss = false;
    for (const token of tokens) {
      const s = tokenScore(rec, token);
      if (s === 0) {
        miss = true;
        break;
      }
      total += s;
    }
    if (!miss) scored.push({ rec, score: total });
  }

  scored.sort((a, b) => b.score - a.score || a.rec.title.localeCompare(b.rec.title));
  return scored.slice(0, limit).map((s) => s.rec);
}
