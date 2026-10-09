// Edit this file to add or update labs. `slug` is used in the URL (/labs/:slug).
// `overview` is optional: a list of highlights shown on the lab's page.
// `demo` is optional: a live demo URL, opened in a new tab.
// `repo` is optional (omit it for labs not started yet); `comingSoon` adds a "Coming soon" callout.
// `npm` and `install` are optional: a package page and the install command shown on the lab page.
// `diagram` is optional: a static page under public/ embedded on the lab page (with `diagramNote`).
// Files in public/ are cached for a year on deploy, so give an updated diagram a new filename.
// Keep slugs clear of /labs/browserautomationlab*: CloudFront serves the live demo app there.
export const labs = [
  {
    slug: 'browser-automation-testing',
    name: 'Browser Automation Testing Lab',
    status: 'Active',
    tagline: 'Plain-English end-to-end tests, written by agents and run with Playwright.',
    description:
      'We build an open Playwright test platform: describe a test as data and steps in plain English, let an agent write the spec, then run it headless and watch it advance step by step — with an accessibility scan and a Lighthouse audit on every run.',
    focus: ['Playwright', 'AI test generation', 'Accessibility', 'Performance'],
    repo: 'https://github.com/vamsikrishna787/playwright',
    demo: 'https://opensuperlab.com/labs/browserautomationlab/',
    demoNote:
      'The platform is running live. Sign in with your email to get your own workspace — each person only sees the suites and tests they create. Create a suite for a site, add test data and plain-English steps, generate the Playwright spec, then run it and watch each step pass or fail.',
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
  {
    slug: 'coderelay',
    name: 'CodeRelay Lab',
    status: 'Active',
    tagline: 'Make GitHub Copilot plan first, ask you, then build and test your code.',
    description:
      'CodeRelay turns GitHub Copilot into an orchestrator. Every request becomes goal → plan → your approval → specialist agents implement → tests verify, with automatic retries, session memory that survives restarts, and cost and risk reports. No MCP server, no API keys, no config.',
    focus: ['GitHub Copilot', 'Multi-agent orchestration', 'Guardrails', 'Cost tracking'],
    repo: 'https://github.com/vamsikrishna787/CodeRelay',
    npm: 'https://www.npmjs.com/package/@opensuperlab/coderelay',
    install: 'npm install --save-dev @opensuperlab/coderelay',
    installNote:
      'Needs VS Code, the GitHub Copilot extension and Node.js 20.3 or newer. Install it in your project, reload VS Code, and set Copilot Chat to Agent mode — then ask Copilot for anything as usual. If your setup skipped the automatic step (for example with pnpm), run npx coderelay init once.',
    color: '#7c5cff',
    gradient: ['#e6defe', '#a993ff', '#4f35c2'],
    overview: [
      {
        title: 'Plan before code',
        body: 'Copilot writes down the goal and how to check it is done, makes a plan, asks its questions, then asks "Shall I implement this plan?" — nothing gets built until you say yes.',
      },
      {
        title: 'Specialist agents',
        body: 'An Orchestrator hands the work to an Architect, Researcher, Coder, Tester, Reviewer and Verifier, each defined as a Copilot custom agent you can edit.',
      },
      {
        title: 'Verified, with retries',
        body: 'Tests check that the goal is really reached. If something is still broken, Copilot fixes it and tries again, up to 5 attempts, then reports the result.',
      },
      {
        title: 'Long-running memory',
        body: 'Copilot keeps notes in .coderelay/SESSION.md. Close VS Code, come back tomorrow, type "continue" and it picks up where it left off.',
      },
      {
        title: 'Cost and safety reports',
        body: 'Each request is estimated in premium requests against a budget. Dangerous commands like rm -rf or force-pushes are blocked, and changed files are scanned for leaked secrets.',
      },
      {
        title: 'Shared with your team',
        body: 'Rules, agents and settings live in your repo (.github/ and .coderelay/), so committing them gives everyone the same behavior. Retries and budget are set in config.json.',
      },
    ],
  },
  {
    slug: 'rogue-agent-detection',
    name: 'Rogue Agent Detection Lab',
    status: 'Active',
    tagline: 'Predict and stop harmful AI agent actions before they happen.',
    description:
      'As AI agents get access to shells, cloud accounts and production data, one bad action can cause damage that cannot be undone. We are building a safety layer that sits between an agent and its tools, predicts whether each action is one the agent should not take, and stops the agent before it acts — not after.',
    focus: ['AI safety', 'Agent guardrails', 'Risk scoring', 'Human in the loop'],
    repo: 'https://github.com/vamsikrishna787/AgentGaurd',
    diagram: '/diagrams/agent-guard-architecture-v2.html',
    diagramNote:
      'Watch tool calls flow through Agent Guard: the denylist, conditional rules and allowlist decide allow, block or ask, and blocked reasons are fed back to the agent. Below it are the results of a reproducible evaluation run with and without the guard: it stopped every anticipated harmful action and 4 of 10 held-out evasions, at about 0.07 ms per decision.',
    color: '#e5484d',
    gradient: ['#ffe0dc', '#ff8f7a', '#b4232f'],
    overview: [
      {
        title: 'Predict before acting',
        body: 'Every action an agent proposes — a shell command, an API call, a file change, a payment — is checked before it runs, so harmful actions are caught in advance instead of cleaned up afterwards.',
      },
      {
        title: 'A rogue score for every action',
        body: 'Each action gets a rogue score based on how destructive or irreversible it is, whether it goes beyond the task it was given, and whether it reaches for access or data it should not need.',
      },
      {
        title: 'Hard stop at the threshold',
        body: 'When an action’s rogue score crosses the threshold, it is blocked immediately and the agent is paused. Nothing runs until a person decides what happens next.',
      },
      {
        title: 'Notify the human',
        body: 'The user is alerted straight away with the blocked action, its score and the reasons behind it, and can approve it, deny it or shut the agent down.',
      },
      {
        title: 'Built for worst-case damage',
        body: 'The focus is on catastrophic, hard-to-reverse actions: deleting data or infrastructure, leaking secrets, escalating privileges, or spreading changes far beyond the task.',
      },
      {
        title: 'Open and auditable',
        body: 'Every score and decision is logged, so you can see why an action was stopped and tune the threshold. The detection rules and models will be fully open source.',
      },
    ],
  },
];

export const getLab = (slug) => labs.find((l) => l.slug === slug);
