import { Link, useParams } from 'react-router-dom';
import { getLab } from '../data/labs.js';
import { research } from '../data/research.js';
import ResearchItem from '../components/ResearchItem.jsx';
import Thumb from '../components/Thumb.jsx';
import RepoStats from '../components/RepoStats.jsx';
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
            {lab.demo && (
              <a className="btn" href={lab.demo} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>
            )}
            <a className={lab.demo ? 'btn btn-outline' : 'btn'} href={lab.repo} target="_blank" rel="noreferrer">
              View repository
            </a>
            <RepoStats repo={lab.repo} actions />
          </div>
        </div>
        <Thumb gradient={lab.gradient} seed={lab.slug + 'banner'} className="banner" />

        {lab.demo && (
          <div className="demo-callout">
            <div>
              <h2>Try the live demo</h2>
              {lab.demoNote && <p className="muted">{lab.demoNote}</p>}
            </div>
            <a className="btn" href={lab.demo} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>
          </div>
        )}

        {lab.overview && (
          <>
            <div className="section-head">
              <h2>Overview</h2>
            </div>
            <div className="principles">
              {lab.overview.map((o) => (
                <div key={o.title}>
                  <h3>{o.title}</h3>
                  <p className="muted">{o.body}</p>
                </div>
              ))}
            </div>
          </>
        )}

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
