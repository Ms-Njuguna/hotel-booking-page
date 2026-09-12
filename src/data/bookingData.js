export const property = {
  name: 'Maison Soleil',
};

export const guest = {
  firstName: 'Lucia',
};

export const nav = [
  { label: 'Your stay', icon: 'stay', active: true },
  { label: 'The house', icon: 'house' },
  { label: 'Around town', icon: 'around-town' },
  { label: 'Breakfast', icon: 'breakfast' },
  { label: 'Messages', icon: 'messages' },
];

export const stay = {
  checkIn: { date: '2026-04-25', label: '25 Apr', day: 'Saturday', time: '15:00' },
  checkOut: { date: '2026-04-29', label: '29 Apr', day: 'Wednesday', time: '11:00' },
  room: 'La Garrigue',
  nights: 4,
  guests: 2,
  lineItems: [
    { label: 'Room · La Garrigue · 4 nights', amount: 620.0 },
    { label: 'Breakfast · 2 guests', amount: 96.0 },
    { label: 'Tourist tax', amount: 14.4 },
  ],
  totalPaid: 730.4,
  currency: '€',
  receiptId: 'MS-1636',
  bookedAt: '2026-04-16 09:41 AM',
};

export const hostNote = {
  host: 'Margaux',
  room: 'La Garrigue',
  message:
    "We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat — Poivre — pretending not to notice you.",
};

export const infoCards = [
  {
    id: 'arrival',
    icon: 'arrival',
    label: 'Arrival',
    title: 'Check-in from 15:00',
    subtitle: 'Sat, 25 April',
    body: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
  },
  {
    id: 'wifi',
    icon: 'wifi',
    label: 'Wifi',
    title: 'Le Soleil · Guest',
    subtitle: 'Password below',
    network: 'Le Soleil · Guest',
    password: 'soleil-2026',
  },
  {
    id: 'breakfast',
    icon: 'breakfast',
    label: 'Breakfast',
    title: 'Served 8 – 10:30',
    subtitle: 'On the terrace',
    body: 'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
  },
];

export const weather = {
  town: 'Cassis',
  temp: 27,
  unit: 'C',
  condition: 'Sunny · light breeze',
};

export const footerMeta = {
  est: 1897,
  address: 'Maison Soleil · 12 Rue des Oliviers · 13260 Cassis',
};
