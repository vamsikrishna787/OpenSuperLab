export default function About() {
  return (
    <section className="section page">
      <div className="container narrow">
        <p className="eyebrow">About</p>
        <h1>About OpenSuperLab</h1>
        <p className="lead">
          OpenSuperLab is an open source research collective. We believe the most important research of the coming
          decade should be done in public, where anyone can check the work, reuse it and contribute.
        </p>

        <h2>Mission</h2>
        <p>
          Make cutting-edge research in AI and computational science accessible to everyone by sharing code, data,
          models and lab notes openly — and by lowering the barrier for new researchers to take part.
        </p>

        <h2>How to get involved</h2>
        <ul className="list">
          <li><strong>Contribute code</strong> — every lab has a public repo with “good first issue” labels.</li>
          <li><strong>Join a lab</strong> — lab meetings and notes are open; just show up.</li>
          <li><strong>Propose a lab</strong> — open a proposal issue describing the research question and who's in.</li>
          <li><strong>Share compute or data</strong> — donated resources go straight into open experiments.</li>
        </ul>

        <h2>Licensing</h2>
        <p>Code is released under MIT, and written content and datasets under CC BY 4.0 unless noted otherwise.</p>
      </div>
    </section>
  );
}
