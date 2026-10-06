import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section page">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">This experiment didn't replicate.</p>
        <Link to="/" className="btn">Back home</Link>
      </div>
    </section>
  );
}
