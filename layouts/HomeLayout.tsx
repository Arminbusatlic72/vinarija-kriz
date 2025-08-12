export default function HomeLayout() {
  return (
    <section
      className="relative flex items-start justify-start bg-[url('/static/images/pozadina-crtezF.png')] bg-cover bg-center p-10 dark:bg-[url('/static/images/pozadina-crtezF-modified.png')]"
      style={{ height: 'calc(100vh)' }}
    >
      <div className="relative z-10 text-left text-black">
        <h1 className="font-strangelove mb-4 text-5xl font-bold tracking-wide dark:text-white">
          Welcome to Our Website
        </h1>
        <p className="max-w-xl text-xl font-light dark:text-gray-300">
          A short description or tagline <br />
          can go here to describe your site or business.
        </p>
      </div>
    </section>
  )
}
