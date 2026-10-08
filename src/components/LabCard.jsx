import { Link } from 'react-router-dom';
import Thumb from './Thumb.jsx';
import RepoStats from './RepoStats.jsx';

// Demo and npm links sit outside the card's <Link>, since links can't be nested.
export default function LabCard({ lab }) {
  return (
    <div className="tile">
      <Link to={`/labs/${lab.slug}`} className="tile-link">
        <Thumb gradient={lab.gradient} seed={lab.slug} label={lab.name} />
        <div className="tile-body">
          <h3>{lab.name}</h3>
          <p className="muted">{lab.tagline}</p>
          <p className="meta">
            {lab.status} · {lab.focus.join(', ')}
          </p>
          {lab.repo && <RepoStats repo={lab.repo} />}
        </div>
      </Link>
      {(lab.demo || lab.npm) && (
        <p className="tile-links">
          {lab.demo && (
            <a className="demo-link" href={lab.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
          )}
          {lab.npm && (
            <a className="demo-link" href={lab.npm} target="_blank" rel="noopener noreferrer">npm package ↗</a>
          )}
        </p>
      )}
    </div>
  );
}
