import Image1 from 'assets/masters/1.jpeg';
import Image2 from 'assets/masters/2.jpeg';
import Image3 from 'assets/masters/3.jpeg';
import Image4 from 'assets/masters/4.jpeg';

const data = [
  {
    id: 0,
    name: 'Anastasia',
    surname: 'Malyar',
    image: Image1,
    address: 'Oleina street, Kyiv',
    rate: '4.8',
    reviews: 122,
    price: '$',
    category: 'cosmetology',
    services: [
      {
        name: 'cleanse',
        duration: '1,5 hour',
        price: '700',
      },
      {
        name: 'piling',
        duration: '0.5 hour',
        price: '900',
      },
      {
        name: 'consultation',
        duration: '1 hour',
        price: '500',
      },
    ],
  },
  {
    id: 1,
    name: 'Maria',
    surname: 'Avramenko',
    image: Image2,
    address: 'Kreschatyk street, Kyiv',
    rate: '5.0',
    reviews: 171,
    price: '$$',
    category: 'nails',
    services: [
      {
        name: 'manicure',
        duration: '1,5 hour',
        price: '120',
      },
      {
        name: 'manicure',
        duration: '1,5 hour',
        price: '120',
      },
      {
        name: 'manicure',
        duration: '1,5 hour',
        price: '120',
      },
    ],
  },
  {
    id: 2,
    name: 'Maria',
    surname: 'Avramenko',
    image: Image3,
    address: 'Bazhana street, Kyiv',
    rate: '4.5',
    reviews: 3,
    price: '$$$',
    category: 'cosmetology',
    services: [
      {
        name: 'consultation',
        duration: '1 hour',
        price: '1500',
      },
      {
        name: 'cleanse',
        duration: '1,5 hour',
        price: '1700',
      },
      {
        name: 'piling',
        duration: '0.5 hour',
        price: '1900',
      },
    ],
  },
  {
    id: 3,
    name: 'Maria',
    surname: 'Avramenko',
    image: Image4,
    address: 'Druzby street, Ternopil',
    rate: '5.0',
    reviews: 30,
    price: '$',
    category: 'laser',
    services: [
      {
        name: 'legs',
        duration: '1 hour',
        price: '900',
      },
      {
        name: 'bikini',
        duration: '0.5 hour',
        price: '1200',
      },
      {
        name: 'arms',
        duration: '0.5 hour',
        price: '300',
      },
    ],
  },
];

export default data;
