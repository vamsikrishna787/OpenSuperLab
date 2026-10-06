import { Link } from 'react-router-dom';
import Thumb from './Thumb.jsx';

export default function LabCard({ lab }) {
  return (
    <Link to={`/labs/${lab.slug}`} className="tile">
      <Thumb gradient={lab.gradient} seed={lab.slug} label={lab.name} />
      <div className="tile-body">
        <h3>{lab.name}</h3>
        <p className="muted">{lab.tagline}</p>
        <p className="meta">
          {lab.status} · {lab.focus.join(', ')}
        </p>
      </div>
    </Link>
  );
}
