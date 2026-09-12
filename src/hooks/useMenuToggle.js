import { useState, useCallback, useEffect } from 'react';

/**
 * Open/close state for the mobile nav drawer, plus the small a11y niceties
 * that a real drawer needs: closing on Escape and locking body scroll
 * while it's open.
 */
export function useMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
