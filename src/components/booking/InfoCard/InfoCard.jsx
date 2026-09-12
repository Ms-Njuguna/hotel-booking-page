import Icon from '../../ui/Icon.jsx';
import WifiPasswordField from '../WifiPasswordField/WifiPasswordField.jsx';

const iconBg = {
  arrival: 'bg-clay-50 text-clay-500',
  wifi: 'bg-[#E7ECF7] text-[#3D5A99]',
  breakfast: 'bg-[#F7E6EC] text-[#A64A6B]',
};

export default function InfoCard({ card, index }) {
  return (
    <div
      tabIndex={0}
      className="group rounded-card border border-line bg-white p-5 shadow-card transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400"
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg[card.icon]}`}
        >
          <Icon name={card.icon} className="h-4 w-4" />
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted">
          {card.label}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-lg text-ink">{card.title}</h3>
      <p className="mt-0.5 text-xs text-muted">{card.subtitle}</p>

      {card.id === 'wifi' ? (
        <WifiPasswordField network={card.network} password={card.password} />
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-ink/75">{card.body}</p>
      )}
    </div>
  );
}
