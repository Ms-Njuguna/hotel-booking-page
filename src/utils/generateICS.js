/**
 * Builds a minimal .ics (iCalendar) file for the stay and triggers a download.
 * Works entirely client-side — no backend needed.
 */

function toICSDate(dateString, time) {
  // dateString: '2026-04-25', time: '15:00' -> '20260425T150000'
  const [hours, minutes] = time.split(':');
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}T${hours.padStart(2, '0')}${minutes.padStart(2, '0')}00`;
}

export function generateStayICS({ stay, property, hostNote }) {
  const dtStart = toICSDate(stay.checkIn.date, stay.checkIn.time);
  const dtEnd = toICSDate(stay.checkOut.date, stay.checkOut.time);
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .split('.')[0] + 'Z';

  const description = `Stay at ${property.name}, room ${stay.room}. ${hostNote.message}`.replace(
    /\n/g,
    '\\n'
  );

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Maison Soleil//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${stay.receiptId}@maisonsoleil.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${property.name} · ${stay.room}`,
    `DESCRIPTION:${description}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return icsContent;
}

export function downloadICS(icsContent, filename = 'maison-soleil-stay.ics') {
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
