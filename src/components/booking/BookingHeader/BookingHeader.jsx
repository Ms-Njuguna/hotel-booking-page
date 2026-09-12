import Button from '../../ui/Button.jsx';
import Icon from '../../ui/Icon.jsx';

export default function BookingHeader({ guestFirstName, onPrint, onAddToCalendar }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-medium tracking-wide text-muted">
          Booking <span className="mx-1 text-clay-400">·</span> Confirmed
        </p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">
          Bienvenue, <em className="text-clay-400 not-italic font-medium">{guestFirstName}</em>.
        </h1>
      </div>

      <div className="flex shrink-0 gap-2">
        <Button variant="secondary" icon={<Icon name="print" className="h-4 w-4" />} onClick={onPrint}>
          Print receipt
        </Button>
        <Button
          variant="primary"
          icon={<Icon name="calendar" className="h-4 w-4" />}
          onClick={onAddToCalendar}
        >
          Add to calendar
        </Button>
      </div>
    </header>
  );
}
