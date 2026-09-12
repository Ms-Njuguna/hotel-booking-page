import NavItem from './NavItem.jsx';
import Icon from '../../ui/Icon.jsx';
import { property, nav } from '../../../data/bookingData.js';

/**
 * Renders the nav list. On desktop it sits statically in a fixed-width
 * column (rendered by PageLayout). On mobile it's rendered inside a
 * slide-in drawer that PageLayout controls via `isOpen`/`onClose`.
 */
export default function Sidebar({ isOpen, onClose, isMobile = false }) {
  const content = (
    <div className="flex h-full flex-col bg-sidebar px-5 py-6">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">☀️</span>
          <span className="font-serif text-lg italic text-clay-500">{property.name}</span>
        </div>
        {isMobile && (
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 text-ink/60 hover:bg-line/60 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        )}
      </div>

      <ul className="space-y-1">
        {nav.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={item.active}
            badge={item.active ? 1 : undefined}
            onClick={(e) => {
              e.preventDefault();
              onClose?.();
            }}
          />
        ))}
      </ul>
    </div>
  );

  if (!isMobile) {
    // Desktop: static column, always visible
    return <nav className="h-full w-64 shrink-0 border-r border-line">{content}</nav>;
  }

  // Mobile: overlay + slide-in drawer
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-ink/30 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] transform shadow-xl transition-transform duration-200 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </nav>
    </>
  );
}
