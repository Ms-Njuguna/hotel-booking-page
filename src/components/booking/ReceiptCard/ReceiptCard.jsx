import { formatDateParts } from '../../../utils/formatDate.js';
import { formatCurrency } from '../../../utils/formatCurrency.js';

export default function ReceiptCard({ stay }) {
  const inDate = formatDateParts(stay.checkIn.date);
  const outDate = formatDateParts(stay.checkOut.date);

  return (
    <div className="relative rounded-ticket bg-white p-6 shadow-card">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-muted">
        <span>Receipt · {stay.receiptId}</span>
        <span>{stay.bookedAt}</span>
      </div>

      <p className="mt-4 text-xs font-medium tracking-wide text-muted">Your stay</p>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-muted">Check in</p>
          <p className="mt-1 font-serif text-2xl text-ink">{stay.checkIn.label}</p>
          <p className="text-xs text-muted">
            {stay.checkIn.day} · {stay.checkIn.time}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-muted">Check out</p>
          <p className="mt-1 font-serif text-2xl text-ink">{stay.checkOut.label}</p>
          <p className="text-xs text-muted">
            {stay.checkOut.day} · {stay.checkOut.time}
          </p>
        </div>
      </div>

      {/* Perforation divider */}
      <div className="relative my-5 border-t border-dashed border-line">
        <span className="absolute -left-6 -top-3 h-6 w-6 rounded-full bg-cream" />
        <span className="absolute -right-6 -top-3 h-6 w-6 rounded-full bg-cream" />
      </div>

      <ul className="space-y-2 text-sm text-ink/80">
        {stay.lineItems.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            <span>{item.label}</span>
            <span>{formatCurrency(item.amount, stay.currency)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm font-medium text-ink">Total paid</span>
        <span className="font-serif text-xl text-ink">
          {formatCurrency(stay.totalPaid, stay.currency)}
        </span>
      </div>

      {/* Simple decorative barcode */}
      <div
        className="mt-5 h-10 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #241C15 0 2px, transparent 2px 5px)',
        }}
        role="img"
        aria-label={`Barcode for receipt ${stay.receiptId}`}
      />
    </div>
  );
}
