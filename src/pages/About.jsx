const REPO = 'https://github.com/vamsikrishna787/OpenSuperLab';
const CONTACT = 'https://vamsicloud.com';

export default function About() {
  return (
    <section className="section page">
      <div className="container narrow">
        <p className="eyebrow">About</p>
        <h1>About OpenSuperLab</h1>
        <p className="lead">
          OpenSuperLab is an open source research collective. Everything we build is public — the code, the notes and
          the roadmap — so anyone can check the work, reuse it and help shape what comes next.
        </p>

        <h2>Open source, from day one</h2>
        <p>
          Every lab works in a public GitHub repository. There are no private forks or delayed releases: what you see on
          GitHub is the current state of the work, including the experiments that didn't pan out.
        </p>

        <h2>Looking for contributors</h2>
        <p>We're early, and every contribution makes a visible difference. Ways to help:</p>
        <ul className="list">
          <li><strong>Contribute code</strong> — pick up an open issue, fix a bug or add a feature.</li>
          <li><strong>Test and report</strong> — try the tools on your own projects and open issues for what breaks.</li>
          <li><strong>Improve the docs</strong> — guides, examples and clearer READMEs help the next contributor.</li>
          <li><strong>Join or propose a lab</strong> — open an issue describing the research question and who's in.</li>
        </ul>

        <h2>Adopt our tools</h2>
        <p>
          Using an OpenSuperLab project at work or in your own research? We'd love to hear about it. Adopters shape the
          roadmap, and we're happy to help you get set up — reach out and tell us what you're building.
        </p>
        <div className="hero-cta">
          <a className="btn" href={REPO} target="_blank" rel="noreferrer">Contribute on GitHub</a>
          <a className="btn btn-ghost" href={CONTACT} target="_blank" rel="noreferrer">Talk about adoption ›</a>
        </div>

        <h2 id="licensing">Licensing</h2>
        <p>
          OpenSuperLab code is released under the MIT license, and written content under CC BY 4.0, unless noted
          otherwise. Each lab's repository states its own license.
        </p>
        <p>
          For licensing questions, commercial use or adoption support, contact Vamsi Bol at{' '}
          <a className="text-link" href={CONTACT} target="_blank" rel="noreferrer">vamsicloud.com</a>.
        </p>
      </div>
    </section>
  );
}
