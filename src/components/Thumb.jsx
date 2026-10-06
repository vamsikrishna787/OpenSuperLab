// Soft abstract gradient artwork used as card imagery, generated from a lab's palette.
// `seed` shifts the blob positions so cards from the same lab don't look identical.
export default function Thumb({ gradient, seed = 0, label, className = '' }) {
  const [light, mid, dark] = gradient;
  const n = [...String(seed)].reduce((a, c) => a + c.charCodeAt(0), 0);
  const x1 = 15 + (n % 50);
  const y1 = 20 + ((n * 7) % 50);
  const x2 = 90 - ((n * 3) % 45);
  const y2 = 85 - ((n * 5) % 40);
  const style = {
    background: `
      radial-gradient(circle at ${x1}% ${y1}%, ${mid} 0%, transparent 55%),
      radial-gradient(circle at ${x2}% ${y2}%, ${dark} 0%, transparent 60%),
      linear-gradient(135deg, ${light}, ${mid})`,
  };
  return (
    <div className={`thumb ${className}`} style={style} aria-hidden={!label}>
      {label && <span className="thumb-label">{label}</span>}
    </div>
  );
}
