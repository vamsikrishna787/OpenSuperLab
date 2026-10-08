import { useState } from 'react';

// A shell command with a copy button, e.g. a package install line.
export default function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the command stays selectable.
    }
  };

  return (
    <div className="copy-cmd">
      <code>{command}</code>
      <button type="button" onClick={copy} aria-label="Copy command">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
