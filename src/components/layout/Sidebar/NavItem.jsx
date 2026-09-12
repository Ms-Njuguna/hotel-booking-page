import Icon from '../../ui/Icon.jsx';

export default function NavItem({ label, icon, active, badge, onClick }) {
  return (
    <li>
      <a
        href="#"
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400 ${
          active
            ? 'bg-white text-ink shadow-sm font-medium'
            : 'text-muted hover:bg-white/70 hover:text-ink'
        }`}
      >
        <Icon
          name={icon}
          className={`w-4.5 h-4.5 ${active ? 'text-clay-400' : 'text-muted group-hover:text-ink'}`}
        />
        <span>{label}</span>
        {badge ? (
          <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-clay-400 text-[10px] font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </a>
    </li>
  );
}
