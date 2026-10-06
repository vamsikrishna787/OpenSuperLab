// OpenSuperLab mark: a lab flask circled by an open (dashed) orbit.
// Monochrome; inherits the surrounding text colour. Keep in sync with public/favicon.svg.
export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor">
      <path
        d="M25 9h14M28 9v15L16 45a5.5 5.5 0 0 0 4.8 8.2h22.4A5.5 5.5 0 0 0 48 45L36 24V9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.6 41.5h22.8l2.4 4.3a2.6 2.6 0 0 1-2.3 3.9H20.5a2.6 2.6 0 0 1-2.3-3.9z" fill="currentColor" stroke="none" />
      <ellipse
        cx="32"
        cy="36"
        rx="27"
        ry="8.5"
        strokeWidth="3"
        strokeDasharray="34 9"
        strokeLinecap="round"
        transform="rotate(-20 32 36)"
      />
    </svg>
  );
}
