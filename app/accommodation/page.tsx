import AccommodationLayout from '@/layouts/AccommodationLayout'

export default function Page() {
  const hardcodedAccommodation = {
    title: 'Cozy Beach House',
    description:
      'Enjoy a luxurious stay with stunning sea views and modern amenities. Perfect for families or friends, just a few steps away from the beach.',
    amenities: ['2 Bedrooms', 'Private Pool', 'Wi-Fi', 'Air Conditioning', 'Kitchen', 'Sea View'],
    images: [
      '/static/images/vinarijaKrizAcomodation.png',
      '/static/images/vinarijaKrizAcomodation.png',
      '/static/images/vinarijaKrizAcomodation.png',
    ],
    airbnbUrl:
      'https://hr.airbnb.com/rooms/44259461?check_in=2022-07-01&check_out=2022-07-08&federated_search_id=4a52d68f-8099-44fc-a5e6-1d98ffa7de28&source_impression_id=p3_1655063146_FKNZr2cEqfIUGWL6',
  }

  return <AccommodationLayout content={hardcodedAccommodation} />
}
