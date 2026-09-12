import Sidebar from './Sidebar/Sidebar.jsx';
import MobileHeader from './MobileHeader/MobileHeader.jsx';
import { useMenuToggle } from '../../hooks/useMenuToggle.js';

export default function PageLayout({ children }) {
  const menu = useMenuToggle();

  return (
    <div className="min-h-screen bg-cream lg:flex">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile drawer */}
      <Sidebar isMobile isOpen={menu.isOpen} onClose={menu.close} />

      <div className="flex-1">
        <MobileHeader onOpenMenu={menu.open} />
        <main className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-10">{children}</main>
      </div>
    </div>
  );
}
