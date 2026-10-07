import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { labs } from '../data/labs.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Research</h4>
          <Link to="/research">Overview</Link>
          <Link to="/research">Papers</Link>
          <Link to="/research">Datasets</Link>
          <Link to="/research">Software</Link>
        </div>
        <div className="footer-col">
          <h4>Labs</h4>
          {labs.slice(0, 4).map((l) => (
            <Link key={l.slug} to={`/labs/${l.slug}`}>{l.name}</Link>
          ))}
        </div>
        <div className="footer-col">
          <h4>Community</h4>
          <a href="https://github.com/vamsikrishna787/OpenSuperLab" target="_blank" rel="noreferrer">GitHub</a>
          <Link to="/about">Get involved</Link>
          <Link to="/about">Propose a lab</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/about">Mission</Link>
          <Link to="/about#licensing">Licensing</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="brand">
          <Logo size={22} />
          <span>OpenSuperLab © {new Date().getFullYear()}</span>
        </div>
        <span>Code MIT · Content CC BY 4.0</span>
      </div>
    </footer>
  );
}
