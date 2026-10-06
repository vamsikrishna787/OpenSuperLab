import { getLab } from '../data/labs.js';
import Thumb from './Thumb.jsx';

const FALLBACK = ['#eeeeee', '#bbbbbb', '#777777'];

export const formatDate = (d) =>
  new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

// Card with artwork, used in grids (home page, lab pages).
export default function ResearchItem({ item }) {
  const lab = getLab(item.lab);
  return (
    <a href={item.link} className="tile">
      <Thumb gradient={lab?.gradient ?? FALLBACK} seed={item.id} />
      <div className="tile-body">
        <h3>{item.title}</h3>
        <p className="meta">
          {item.type} · <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
      </div>
    </a>
  );
}

// Compact list row, used on the research index.
export function ResearchRow({ item }) {
  const lab = getLab(item.lab);
  return (
    <a href={item.link} className="row">
      <div className="row-main">
        <h3>{item.title}</h3>
        <p className="muted">{item.abstract}</p>
      </div>
      <div className="row-side meta">
        <span>{item.type}</span>
        {lab && <span>{lab.name}</span>}
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>
    </a>
  );
}
