export function formatDateParts(isoDate) {
  const date = new Date(isoDate);
  return {
    day: date.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: date.toLocaleDateString('en-GB', { month: 'short' }),
    weekday: date.toLocaleDateString('en-GB', { weekday: 'long' }),
  };
}
