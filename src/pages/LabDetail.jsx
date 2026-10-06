import { Link, useParams } from 'react-router-dom';
import { getLab } from '../data/labs.js';
import { research } from '../data/research.js';
import ResearchItem from '../components/ResearchItem.jsx';
import Thumb from '../components/Thumb.jsx';
import NotFound from './NotFound.jsx';

export default function LabDetail() {
  const { slug } = useParams();
  const lab = getLab(slug);
  if (!lab) return <NotFound />;

  const outputs = research.filter((r) => r.lab === lab.slug).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="section page">
      <div className="container">
        <div className="page-head">
          <Link to="/labs" className="link-more">‹ All labs</Link>
          <h1>{lab.name}</h1>
          <p className="lead">{lab.description}</p>
          <p className="meta">{lab.status} · {lab.focus.join(', ')}</p>
          <div className="hero-cta">
            <a className="btn" href={lab.repo} target="_blank" rel="noreferrer">View repository</a>
          </div>
        </div>
        <Thumb gradient={lab.gradient} seed={lab.slug + 'banner'} className="banner" />

        <div className="section-head">
          <h2>Research from this lab</h2>
        </div>
        {outputs.length ? (
          <div className="grid">
            {outputs.map((item) => <ResearchItem key={item.id} item={item} />)}
          </div>
        ) : (
          <p className="muted">Nothing published yet — work in progress is on GitHub.</p>
        )}
      </div>
    </section>
  );
}
