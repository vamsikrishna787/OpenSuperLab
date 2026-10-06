// Edit this file to add research outputs. `lab` must match a lab slug in labs.js.
// type: 'Paper' | 'Report' | 'Dataset' | 'Software' | 'Blog'
export const research = [
  {
    id: 'tiny-open-lm',
    title: 'TinyOpen: A Fully Reproducible 1B Parameter Language Model',
    authors: ['Open Models Lab'],
    date: '2026-08-14',
    type: 'Paper',
    lab: 'open-models',
    abstract:
      'We release weights, data, training code and logs for a 1B parameter model trained on openly licensed text, and report results on standard benchmarks.',
    tags: ['LLM', 'Open data', 'Reproducibility'],
    link: '#',
  },
  {
    id: 'agent-trace',
    title: 'AgentTrace: Replayable Execution Logs for Tool-Using Agents',
    authors: ['Agents Lab'],
    date: '2026-07-02',
    type: 'Software',
    lab: 'agents',
    abstract:
      'An open format and viewer for recording every step, tool call and decision an agent makes, making failures easy to debug and share.',
    tags: ['Agents', 'Observability'],
    link: '#',
  },
  {
    id: 'open-evals',
    title: 'OpenEvals: A Community Benchmark Suite',
    authors: ['Safety & Alignment Lab'],
    date: '2026-06-18',
    type: 'Dataset',
    lab: 'safety',
    abstract:
      'A living collection of evaluation tasks contributed and reviewed by the community, with versioned results for open models.',
    tags: ['Evals', 'Benchmarks'],
    link: '#',
  },
  {
    id: 'repro-notebooks',
    title: 'Reproducible Notebooks at Scale',
    authors: ['Open Science Lab'],
    date: '2026-05-09',
    type: 'Report',
    lab: 'science',
    abstract:
      'Lessons from re-running published computational notebooks, and a toolkit to make notebooks reproducible by default.',
    tags: ['Reproducibility', 'Science'],
    link: '#',
  },
  {
    id: 'spot-training',
    title: 'Training on Spot Instances Without Losing Your Mind',
    authors: ['Infrastructure Lab'],
    date: '2026-04-21',
    type: 'Blog',
    lab: 'infra',
    abstract:
      'Practical checkpointing and scheduling strategies for running distributed training jobs on interruptible cloud capacity.',
    tags: ['Infra', 'Cost efficiency'],
    link: '#',
  },
  {
    id: 'planning-memory',
    title: 'Long-Horizon Planning with Structured Memory',
    authors: ['Agents Lab'],
    date: '2026-03-11',
    type: 'Paper',
    lab: 'agents',
    abstract:
      'We study how explicit, structured memory affects agent success on multi-day tasks, and release the evaluation harness.',
    tags: ['Agents', 'Planning'],
    link: '#',
  },
];
