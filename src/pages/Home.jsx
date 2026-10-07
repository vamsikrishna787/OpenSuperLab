import { Link } from 'react-router-dom';
import { labs, getLab } from '../data/labs.js';
import { research } from '../data/research.js';
import LabCard from '../components/LabCard.jsx';
import ResearchItem, { formatDate, FALLBACK } from '../components/ResearchItem.jsx';
import Thumb from '../components/Thumb.jsx';

const principles = [
  { title: 'Open by default', body: 'Code, data, weights and notes are public from day one, not after publication.' },
  { title: 'Reproducible', body: 'Every result ships with the scripts and configs needed to re-run it.' },
  { title: 'Community-led', body: 'Anyone can propose a project, join a lab, or review work in progress.' },
];

export default function Home() {
  const sorted = [...research].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  const featuredLab = featured && getLab(featured.lab);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Open research for everyone.</h1>
          <p className="lead">
            OpenSuperLab is a network of independent labs doing AI and science research in the open — publishing code,
            data and findings so anyone can reproduce and build on them.
          </p>
          <div className="hero-cta">
            <Link to="/research" className="btn">Explore research</Link>
            <Link to="/labs" className="btn btn-ghost">Meet the labs ›</Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="container">
          <a href={featured.link} className="feature">
            <Thumb gradient={featuredLab?.gradient ?? FALLBACK} seed={featured.id} className="feature-art" />
            <div className="feature-body">
              <p className="meta">{featured.type} · {formatDate(featured.date)}</p>
              <h2>{featured.title}</h2>
              <p className="muted">{featured.abstract}</p>
              <span className="btn btn-small">Read more</span>
            </div>
          </a>
        </section>
      )}

      {rest.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>Latest research</h2>
              <Link to="/research" className="link-more">View all ›</Link>
            </div>
            <div className="grid">
              {rest.slice(0, 3).map((item) => <ResearchItem key={item.id} item={item} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Labs</h2>
            <Link to="/labs" className="link-more">View all ›</Link>
          </div>
          <div className="grid">
            {labs.slice(0, 3).map((lab) => <LabCard key={lab.slug} lab={lab} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="center">How we work</h2>
          <div className="principles">
            {principles.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p className="muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2>Join the open research community</h2>
          <p className="lead">Pick an issue, join a lab, or propose your own.</p>
          <div className="hero-cta">
            <a className="btn" href="https://github.com/vamsikrishna787/OpenSuperLab" target="_blank" rel="noreferrer">
              Get involved on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
