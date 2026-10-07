import { useEffect, useState } from 'react';

// Live GitHub star and fork counts for a repo URL. Requests are shared per repo so a
// page showing the same repo twice fetches once. Renders nothing until (or unless) the
// public GitHub API answers; it allows 60 unauthenticated requests per hour per visitor.
const cache = new Map();

function fetchStats(repoUrl) {
  const path = new URL(repoUrl).pathname.replace(/^\/|\/$/g, '');
  if (!cache.has(path)) {
    cache.set(
      path,
      fetch(`https://api.github.com/repos/${path}`)
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((j) => ({ stars: j.stargazers_count, forks: j.forks_count }))
        .catch(() => {
          cache.delete(path); // allow a retry on the next mount
          return null;
        })
    );
  }
  return cache.get(path);
}

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
  </svg>
);

const ForkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
  </svg>
);

// Card view: plain counts (the card is already a link). Lab page (`actions`): GitHub-style
// Star and Fork buttons. Starring needs the visitor signed in to GitHub, so Star opens the
// repo where the button is one click away; Fork goes straight to GitHub's fork page.
export default function RepoStats({ repo, actions = false }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let live = true;
    fetchStats(repo).then((s) => live && setStats(s));
    return () => {
      live = false;
    };
  }, [repo]);

  if (actions) {
    return (
      <span className="repo-actions">
        <a className="gh-btn" href={repo} target="_blank" rel="noreferrer" title="Star this repository on GitHub">
          <StarIcon /> Star
          {stats && <span className="gh-count">{stats.stars.toLocaleString()}</span>}
        </a>
        <a className="gh-btn" href={`${repo}/fork`} target="_blank" rel="noreferrer" title="Fork this repository on GitHub">
          <ForkIcon /> Fork
          {stats && <span className="gh-count">{stats.forks.toLocaleString()}</span>}
        </a>
      </span>
    );
  }

  if (!stats) return null;
  return (
    <span className="repo-stats">
      <span aria-label={`${stats.stars} stars`}><StarIcon /> {stats.stars.toLocaleString()}</span>
      <span aria-label={`${stats.forks} forks`}><ForkIcon /> {stats.forks.toLocaleString()}</span>
    </span>
  );
}
