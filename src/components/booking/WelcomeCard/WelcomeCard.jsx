export default function WelcomeCard({ hostNote }) {
  return (
    <div className="relative overflow-hidden rounded-card bg-clay-500 p-7 text-cream shadow-card">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-cream/70">
        <span>Welcome card</span>
        <span aria-hidden="true">☀️</span>
      </div>

      <p className="mt-6 text-sm text-cream/80">A note from your host,</p>
      <h2 className="mt-1 font-serif text-3xl italic">{hostNote.host}.</h2>

      <p className="mt-4 text-sm leading-relaxed text-cream/90">{hostNote.message}</p>

      <div className="mt-8 border-t border-cream/20 pt-4">
        <p className="text-[11px] uppercase tracking-wide text-cream/60">Room</p>
        <p className="mt-1 font-serif text-lg">{hostNote.room}</p>
      </div>
    </div>
  );
}
