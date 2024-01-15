import prc_1 from '../images/prc-1.jpg';
import prc_2 from '../images/prc-2.webp';
import prc_3 from '../images/prc-3.jpeg';
import prc_4 from '../images/prc-4.webp';
import prc_5 from '../images/prc-5.jpg';

const PriceCard = [
  {
    imgSrc: prc_1,
    title: "Hair Cut & Treatment",
    service: [
      { name: 'Haircut', price: 25 },
      { name: 'Hair Coloring', price: 50 },
      { name: 'Blow Dry', price: 20 },
      { name: 'Hair Spa', price: 30 },
      { name: 'Deep Conditioning', price: 25 },
      { name: 'Bridal Hair Styling', price: 70 },
    ],
  },
  {
    imgSrc: prc_2,
    title: "Facial & Skin Care",
    service: [
      { name: 'Facial', price: 40 },
      { name: 'Skin Cleaning', price: 30 },
      {name: 'Facial Treatment',price:40},
      { name: 'Exfoliation', price: 25}
      // Add more services as needed

    ],
  },
  {
    imgSrc: prc_3,
    title: "Nail Art & Polish",
    service: [
      { name: 'Basic Nail Art', price: 15 },
      { name: 'Gel Polish', price: 25 },
      {  name: 'Nail Extensions',price:30}
      // Add more services as needed
    ],
  },
  {
    imgSrc: prc_4,
    title: "Massage & Body Treatment ",
    service: [
        { name: 'Swedish Massage', price: 60 },
        { name: 'Deep Tissue Massage', price: 75 },
        { name: 'Hot Stone Massage', price: 90 },
      // Add more services as needed
    ],
  },
  {
    imgSrc: prc_5,
    title: "Aromatheraphy Spa ",
    service: [
        { name: 'Aromatherapy Massage', price: 70 },
        { name: 'Aromatherapy Facial', price: 50 },
        { name: 'Aromatherapy Scrub', price: 45 },
      // Add more services as needed
    ],
  },
];

export default PriceCard;
