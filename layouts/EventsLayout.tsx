import React from 'react'

interface Event {
  id: number
  title: string
  date: string
  description: string
}

interface EventsLayoutProps {
  heading: string
  events: Event[]
}

export default function EventsLayout({ heading, events }: EventsLayoutProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h2 className="font-strangelove text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          {heading}
        </h2>
      </div>
      <div className="space-y-8 pt-8">
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.id} className="border p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="mb-2 text-sm text-gray-500">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
