import PageLayout from './components/layout/PageLayout.jsx';
import BookingHeader from './components/booking/BookingHeader/BookingHeader.jsx';
import ReceiptCard from './components/booking/ReceiptCard/ReceiptCard.jsx';
import WelcomeCard from './components/booking/WelcomeCard/WelcomeCard.jsx';
import InfoCard from './components/booking/InfoCard/InfoCard.jsx';
import WeatherWidget from './components/booking/WeatherWidget/WeatherWidget.jsx';

import { guest, stay, hostNote, infoCards, weather, property } from './data/bookingData.js';
import { generateStayICS, downloadICS } from './utils/generateICS.js';

export default function App() {
  const handlePrint = () => window.print();

  const handleAddToCalendar = () => {
    const ics = generateStayICS({ stay, property, hostNote });
    downloadICS(ics, `${property.name.replace(/\s+/g, '-').toLowerCase()}-stay.ics`);
  };

  return (
    <PageLayout>
      <BookingHeader
        guestFirstName={guest.firstName}
        onPrint={handlePrint}
        onAddToCalendar={handleAddToCalendar}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ReceiptCard stay={stay} />
        <WelcomeCard hostNote={hostNote} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {infoCards.map((card, index) => (
          <InfoCard key={card.id} card={card} index={index} />
        ))}
      </div>

      <div className="mt-6 max-w-xs">
        <WeatherWidget weather={weather} />
      </div>
    </PageLayout>
  );
}
