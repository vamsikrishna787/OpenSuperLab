// Edit this file to add or update labs. `slug` is used in the URL (/labs/:slug).
// `overview` is optional: a list of highlights shown on the lab's page.
export const labs = [
  {
    slug: 'browserautomationlab',
    name: 'Browser Automation Testing Lab',
    status: 'Active',
    tagline: 'Plain-English end-to-end tests, written by agents and run with Playwright.',
    description:
      'We build an open Playwright test platform: describe a test as data and steps in plain English, let an agent write the spec, then run it headless and watch it advance step by step — with an accessibility scan and a Lighthouse audit on every run.',
    focus: ['Playwright', 'AI test generation', 'Accessibility', 'Performance'],
    repo: 'https://github.com/vamsikrishna787/playwright',
    color: '#2d7ff9',
    gradient: ['#d3e5ff', '#7fb2ff', '#1f57c3'],
    overview: [
      {
        title: 'Tests in plain English',
        body: 'A test is a suite, shared test data and a list of steps. An agent turns them into a complete Playwright spec that reads values from a data object, so changing a login never means regenerating.',
      },
      {
        title: 'Watchable runs',
        body: 'Every authored step becomes a tagged test.step, so a live run lights up step by step and stops visibly where it broke: "passed 3 of 5, failed at step 4".',
      },
      {
        title: 'Accessibility and performance',
        body: 'Each spec carries a WCAG 2.1 A/AA axe scan as its own test, and Lighthouse audits the start URL after the verdict, so quality is graded on every run.',
      },
      {
        title: 'Agents that fix tests',
        body: 'Refine a test in plain English, harden it, deepen its accessibility checks, or hand an agent the real output of a failing run to repair the cause.',
      },
      {
        title: 'Two clean tiers',
        body: 'A Next.js 15 app owns the UI, API, storage and browsers; a FastAPI agent tier owns the prompts and model calls on Amazon Bedrock.',
      },
      {
        title: 'Local disk or S3',
        body: 'One switch stores suites, specs, reports, recordings and audits on local disk or Amazon S3, and can move existing data across safely.',
      },
    ],
  },
];

export const getLab = (slug) => labs.find((l) => l.slug === slug);
