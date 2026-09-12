import { useClipboard } from '../../../hooks/useClipboard.js';
import Icon from '../../ui/Icon.jsx';

export default function WifiPasswordField({ network, password }) {
  const { copy, copied } = useClipboard();

  return (
    <div className="mt-3 space-y-2 rounded-xl bg-cream/60 p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">Network</span>
        <span className="font-medium text-ink">{network}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">Password</span>
        <div className="flex items-center gap-2">
          <span className="font-mono font-medium text-ink">{password}</span>
          <button
            type="button"
            onClick={() => copy(password)}
            className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2 py-1 text-[11px] font-medium text-ink/80 transition-colors duration-150 hover:border-clay-400 hover:text-clay-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-400"
            aria-live="polite"
          >
            <Icon name={copied ? 'check' : 'copy'} className="h-3.5 w-3.5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
