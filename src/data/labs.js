// Edit this file to add or update labs. `slug` is used in the URL (/labs/:slug).
export const labs = [
  {
    slug: 'open-models',
    name: 'Open Models Lab',
    status: 'Active',
    tagline: 'Training and evaluating fully open language models.',
    description:
      'We build small, efficient language models with open weights, open data and open training code, so anyone can reproduce, audit and improve them.',
    focus: ['Efficient training', 'Open datasets', 'Evaluation'],
    repo: 'https://github.com/opensuperlab/open-models',
    color: '#10a37f',
    gradient: ['#b8f2dc', '#5fc9a8', '#1d6b5a'],
  },
  {
    slug: 'agents',
    name: 'Agents Lab',
    status: 'Active',
    tagline: 'Reliable, inspectable autonomous agents.',
    description:
      'Research into tool-using agents, planning and memory, with a focus on transparency: every agent run should be explainable and replayable.',
    focus: ['Tool use', 'Planning', 'Observability'],
    repo: 'https://github.com/opensuperlab/agents',
    color: '#5b6cff',
    gradient: ['#d7dcff', '#8a96ff', '#3b3fb8'],
  },
  {
    slug: 'science',
    name: 'Open Science Lab',
    status: 'Active',
    tagline: 'Computational tools for reproducible science.',
    description:
      'Open pipelines and notebooks that help researchers in biology, climate and materials science share reproducible results.',
    focus: ['Reproducibility', 'Notebooks', 'Data pipelines'],
    repo: 'https://github.com/opensuperlab/science',
    color: '#e07a1f',
    gradient: ['#ffe2bf', '#ffab5c', '#c4531c'],
  },
  {
    slug: 'infra',
    name: 'Infrastructure Lab',
    status: 'Incubating',
    tagline: 'Commodity compute for open research.',
    description:
      'Tooling to run distributed experiments on low-cost and donated hardware, from laptops to cloud spot instances.',
    focus: ['Distributed compute', 'Scheduling', 'Cost efficiency'],
    repo: 'https://github.com/opensuperlab/infra',
    color: '#d6407f',
    gradient: ['#ffd3e6', '#ff86b5', '#a52a63'],
  },
  {
    slug: 'safety',
    name: 'Safety & Alignment Lab',
    status: 'Incubating',
    tagline: 'Open methods for evaluating and steering AI systems.',
    description:
      'Public benchmarks, red-teaming toolkits and interpretability experiments that everyone can run and extend.',
    focus: ['Evals', 'Interpretability', 'Red-teaming'],
    repo: 'https://github.com/opensuperlab/safety',
    color: '#8b5cf6',
    gradient: ['#ece0ff', '#b493ff', '#5b33b8'],
  },
  {
    slug: 'learning',
    name: 'Learning Lab',
    status: 'Active',
    tagline: 'Open courses and guides from our research.',
    description:
      'Turning lab work into free tutorials, workshops and courses so new contributors can get up to speed fast.',
    focus: ['Tutorials', 'Workshops', 'Mentorship'],
    repo: 'https://github.com/opensuperlab/learn',
    color: '#0e8fb3',
    gradient: ['#cdf3ff', '#6fd0ef', '#16708f'],
  },
];

export const getLab = (slug) => labs.find((l) => l.slug === slug);
