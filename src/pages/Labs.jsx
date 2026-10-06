import { labs } from '../data/labs.js';
import LabCard from '../components/LabCard.jsx';

export default function Labs() {
  return (
    <section className="section page">
      <div className="container">
        <div className="page-head">
          <h1>Labs</h1>
          <p className="lead">
            Each lab is a small, self-organizing team with its own repositories, roadmap and meetings — all public.
            Labs start as Incubating and become Active once they have a steady group of contributors.
          </p>
        </div>
        <div className="grid">
          {labs.map((lab) => <LabCard key={lab.slug} lab={lab} />)}
        </div>
      </div>
    </section>
  );
}
