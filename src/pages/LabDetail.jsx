import { Link, useParams } from 'react-router-dom';
import { getLab } from '../data/labs.js';
import { research } from '../data/research.js';
import ResearchItem from '../components/ResearchItem.jsx';
import Thumb from '../components/Thumb.jsx';
import RepoStats from '../components/RepoStats.jsx';
import CopyCommand from '../components/CopyCommand.jsx';
import NotFound from './NotFound.jsx';

const CONTACT = 'https://vamsicloud.com';

// Diagrams are same-origin pages under public/, so the frame can grow to fit them.
function fitToContent(e) {
  const frame = e.currentTarget;
  const doc = frame.contentDocument;
  if (!doc) return;
  const fit = () => {
    const border = frame.offsetHeight - frame.clientHeight;
    frame.style.height = `${doc.documentElement.scrollHeight + border}px`;
  };
  fit();
  new ResizeObserver(fit).observe(doc.body);
}

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
            {lab.npm && (
              <a className={lab.demo ? 'btn btn-outline' : 'btn'} href={lab.npm} target="_blank" rel="noopener noreferrer">View on npm ↗</a>
            )}
            {lab.comingSoon && (
              <a className="btn" href={CONTACT} target="_blank" rel="noopener noreferrer">Get involved early ↗</a>
            )}
            {lab.repo && (
              <>
                <a className={lab.demo || lab.npm ? 'btn btn-outline' : 'btn'} href={lab.repo} target="_blank" rel="noreferrer">
                  View repository
                </a>
                <RepoStats repo={lab.repo} actions />
              </>
            )}
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

        {lab.comingSoon && (
          <div className="demo-callout">
            <div>
              <h2>Coming soon</h2>
              {lab.comingSoonNote && <p className="muted">{lab.comingSoonNote}</p>}
            </div>
            <a className="btn" href={CONTACT} target="_blank" rel="noopener noreferrer">Get in touch ↗</a>
          </div>
        )}

        {lab.diagram && (
          <>
            <div className="section-head">
              <h2>Architecture</h2>
              <a className="link-more" href={lab.diagram} target="_blank" rel="noopener noreferrer">Open full screen ↗</a>
            </div>
            {lab.diagramNote && <p className="muted">{lab.diagramNote}</p>}
            <iframe
              className="diagram-frame"
              src={`${lab.diagram}?theme=light`}
              title={`${lab.name} architecture`}
              loading="lazy"
              onLoad={fitToContent}
            />
          </>
        )}

        {lab.install && (
          <div className="demo-callout">
            <div>
              <h2>Get started</h2>
              {lab.installNote && <p className="muted">{lab.installNote}</p>}
            </div>
            <CopyCommand command={lab.install} />
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
          <p className="muted">Nothing published yet{lab.repo ? ' — work in progress is on GitHub' : ''}.</p>
        )}
      </div>
    </section>
  );
}
