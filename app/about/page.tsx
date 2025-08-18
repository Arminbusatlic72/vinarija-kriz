import AboutLayout from '@/layouts/AboutLayout'

const aboutContent = {
  title: 'About Our Company',
  description:
    'We are passionate about delivering exceptional service and creating memorable experiences. Our team is dedicated to ensuring every detail is perfect.',
  images: [
    '/static/images/Kriz-portreti-vinarija-2022-19.jpg',
    '/static/images/Vinarija-Kriz-68.jpg',
  ],
}

export default function AboutPage() {
  return <AboutLayout content={aboutContent} />
}
