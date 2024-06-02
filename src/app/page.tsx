import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import MusicSchoolTestimonials from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <main className="main-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]2">
      {/* <h1 className="text-2xl text-center">Chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}
