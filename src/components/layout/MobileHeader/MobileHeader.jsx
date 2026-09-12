import Icon from '../../ui/Icon.jsx';
import IconButton from '../../ui/IconButton.jsx';
import { property } from '../../../data/bookingData.js';

export default function MobileHeader({ onOpenMenu }) {
  return (
    <header className="flex items-center justify-between border-b border-line bg-cream px-4 py-3 lg:hidden">
      <div className="flex items-center gap-2">
        <span className="text-base">☀️</span>
        <span className="font-serif text-base italic text-clay-500">{property.name}</span>
      </div>
      <IconButton label="Open menu" onClick={onOpenMenu}>
        <Icon name="menu" className="h-5 w-5" />
      </IconButton>
    </header>
  );
}
