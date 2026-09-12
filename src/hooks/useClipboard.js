import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Copies text to the clipboard and exposes a transient `copied` flag
 * so a button can show "Copied!" feedback for a couple of seconds.
 *
 * @param {number} resetDelay - ms before `copied` flips back to false
 */
export function useClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const timeoutRef = useRef(null);

  const copy = useCallback(
    async (text) => {
      setError(null);
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-secure contexts / older browsers
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        setCopied(true);
      } catch (err) {
        setError(err);
        setCopied(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!copied) return undefined;
    timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
    return () => clearTimeout(timeoutRef.current);
  }, [copied, resetDelay]);

  return { copy, copied, error };
}
