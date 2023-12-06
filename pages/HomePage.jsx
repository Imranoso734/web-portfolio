
import { Footer } from '@/components/Global/Footer'
import { Navbar } from '@/components/Global/Navbar'
import { HeroSection } from '@/components/HomePage/HeroSection'
export const HomePage = () => {
  return (
    <div className='bg-[#011627] text-[#607B96]'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
export default HomePage
