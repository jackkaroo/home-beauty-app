// eslint-disable-next-line no-shadow
export const enum DayPeriod {
  'Morning',
  'Afternoon',
  'Evening',
}

const slots = [
  {
    id: 1,
    date: '..',
    slotStart: '9:00',
    slotEnd: '10:00',
    period: DayPeriod.Morning,
  },
  {
    id: 2,
    slotStart: '10:00',
    slotEnd: '11:00',
    period: DayPeriod.Morning,
  },
  {
    id: 3,
    slotStart: '11:00',
    slotEnd: '12:00',
    period: DayPeriod.Morning,
  },
  {
    id: 4,
    slotStart: '12:00',
    slotEnd: '13:00',
    period: DayPeriod.Morning,
  },
  {
    id: 44,
    slotStart: '13:00',
    slotEnd: '14:00',
    period: DayPeriod.Afternoon,
  },
  {
    id: 45,
    slotStart: '14:00',
    slotEnd: '15:00',
    period: DayPeriod.Afternoon,
  },
  {
    id: 5,
    slotStart: '15:00',
    slotEnd: '16:00',
    period: DayPeriod.Afternoon,
  },
  {
    id: 6,
    slotStart: '16:00',
    slotEnd: '17:00',
    period: DayPeriod.Afternoon,
  },
  {
    id: 7,
    slotStart: '17:00',
    slotEnd: '18:00',
    period: DayPeriod.Afternoon,
  },
  {
    id: 8,
    slotStart: '18:00',
    slotEnd: '19:00',
    period: DayPeriod.Evening,
  },
  {
    id: 9,
    slotStart: '19:00',
    slotEnd: '20:00',
    period: DayPeriod.Evening,
  },
  {
    id: 10,
    slotStart: '20:00',
    slotEnd: '21:00',
    period: DayPeriod.Evening,
  },
];

export default slots;
