import { useMemo, useState } from 'react';
import { research } from '../data/research.js';
import { labs } from '../data/labs.js';
import { ResearchRow } from '../components/ResearchItem.jsx';

const types = ['All', ...new Set(research.map((r) => r.type))];

export default function Research() {
  const [type, setType] = useState('All');
  const [lab, setLab] = useState('all');
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return research
      .filter((r) => type === 'All' || r.type === type)
      .filter((r) => lab === 'all' || r.lab === lab)
      .filter(
        (r) =>
          !q ||
          r.title.toLowerCase().includes(q) ||
          r.abstract.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      )
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [type, lab, query]);

  return (
    <section className="section page">
      <div className="container">
        <div className="page-head">
          <h1>Research</h1>
          <p className="lead">Papers, reports, datasets and software from across our labs. Everything is openly licensed.</p>
        </div>

        <div className="filters">
          <div className="chips" role="group" aria-label="Filter by type">
            {types.map((t) => (
              <button key={t} className={`chip ${type === t ? 'active' : ''}`} onClick={() => setType(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="filter-row">
            <select value={lab} onChange={(e) => setLab(e.target.value)} aria-label="Filter by lab">
              <option value="all">All labs</option>
              {labs.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
            </select>
            <input
              type="search"
              placeholder="Search research"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search research"
            />
          </div>
        </div>

        {items.length ? (
          <div className="rows">
            {items.map((item) => <ResearchRow key={item.id} item={item} />)}
          </div>
        ) : (
          <p className="muted">{research.length ? 'No results match these filters.' : 'Nothing published yet. Work in progress is on GitHub.'}</p>
        )}
      </div>
    </section>
  );
}
