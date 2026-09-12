export default function WeatherWidget({ weather }) {
  return (
    <div className="relative overflow-hidden rounded-card bg-sunshine p-5 text-ink">
      <p className="text-xs font-medium uppercase tracking-wide text-ink/60">
        Today in {weather.town}
      </p>
      <p className="mt-2 font-serif text-4xl">
        {weather.temp}°{weather.unit}
      </p>
      <p className="mt-1 text-xs text-ink/70">{weather.condition}</p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/30 blur-sm"
      />
    </div>
  );
}
