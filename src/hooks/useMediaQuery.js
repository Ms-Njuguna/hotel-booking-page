import { useState, useEffect } from 'react';

/**
 * Tracks whether a CSS media query currently matches.
 * Usage: const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
export function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    setMatches(mediaQueryList.matches);

    // addEventListener is preferred but Safari <14 needs the legacy API
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
}

// Matches Tailwind's default `lg` breakpoint used to switch sidebar <-> drawer
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
