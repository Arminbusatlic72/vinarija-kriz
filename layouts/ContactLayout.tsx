'use client'
import React from 'react'

const ContactLayout = () => {
  return (
    <section
      className="px-6 py-12 md:flex md:items-center md:justify-center md:gap-16"
      style={{ minHeight: 'calc(100vh - var(--header-height) - var(--footer-height))' }}
    >
      {/* Left Side – Text */}
      <div className="mb-10 max-w-md text-left md:mb-0">
        <h2 className="font-strangelove mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          As we're busy growing grapes, making wine, and raising our kid, short tastings and sales
          are available by appointment only. Feel free to reach out for anything else!
        </p>
      </div>

      {/* Right Side – Contact Form */}
      <form
        className="w-full max-w-md space-y-4 bg-white p-6 shadow-md dark:bg-gray-800"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full border border-gray-900 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full border border-gray-900 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full border border-gray-900 p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactLayout
