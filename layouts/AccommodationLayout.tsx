'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

interface Accommodation {
  title: string
  description: string
  amenities: string[]
  images: string[]
  airbnbUrl: string
}

interface Props {
  children?: ReactNode
  content: Accommodation
}

export default function AccommodationLayout({ content, children }: Props) {
  const { title, description, amenities, images, airbnbUrl } = content

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h2 className="font-strangelove text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          {title}
        </h2>
      </div>

      {/* Main Content */}
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* Left - Images */}
        <div className="flex flex-col items-center space-x-2 pt-8">
          {images.map((src, idx) => (
            <div key={idx} className="relative mb-4 h-48 w-full overflow-hidden shadow-md">
              <Image src={src} alt={`Accommodation ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Right - Details */}
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">{description}</p>

          {amenities.length > 0 && (
            <>
              <h3 className="mb-2 text-2xl font-semibold">Amenities</h3>
              <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-gray-300">
                {amenities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="important inline-block bg-red-500 px-6 py-3 text-white! no-underline shadow-md hover:bg-red-600"
          >
            Book on Airbnb
          </a>

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </div>
  )
}
