const base =
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-ink text-cream hover:bg-ink/85 active:bg-ink/95',
  secondary:
    'bg-white text-ink border border-line hover:border-ink/30 hover:bg-cream active:bg-line/60',
  ghost: 'text-muted hover:text-ink hover:bg-line/60',
};

export default function Button({
  children,
  variant = 'secondary',
  icon,
  className = '',
  ...props
}) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}
