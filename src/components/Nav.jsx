import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

const links = [
  { to: '/research', label: 'Research' },
  { to: '/labs', label: 'Labs' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <Logo size={26} />
          <span>OpenSuperLab</span>
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <a className="btn btn-small nav-cta" href="https://github.com/opensuperlab" target="_blank" rel="noreferrer">
            Get involved
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
