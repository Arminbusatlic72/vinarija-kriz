import EventsLayout from '@/layouts/EventsLayout'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: 'Wine Tasting Night',
      date: 'September 15, 2025',
      description: 'Join us for an evening of wine tasting and local delicacies.',
    },
    {
      id: 2,
      title: 'Harvest Festival',
      date: 'October 3, 2025',
      description: 'Celebrate the grape harvest with music, food, and tradition.',
    },
    {
      id: 3,
      title: 'Cooking with Wine Workshop',
      date: 'November 10, 2025',
      description: 'Learn how to cook gourmet dishes using our finest wines.',
    },
  ]

  return <EventsLayout heading="Upcoming Events" events={events} />
}
