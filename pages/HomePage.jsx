
import { Footer } from '@/Components/Global/Footer'
import { Navbar } from '@/Components/Global/Navbar'
import { HeroSection } from '@/Components/HomePage/HeroSection'
export const HomePage = () => {
  return (
    <div className='bg-[#011627] text-[#607B96] text-[16px]'>
        <Navbar />
        <HeroSection />
      <Footer />
    </div>
  )
}
export default HomePage
