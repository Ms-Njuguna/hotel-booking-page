export default function IconButton({ children, label, className = '', ...props }) {
  return (
    <button
      aria-label={label}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-ink/70 transition-colors duration-150 hover:bg-line/60 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
