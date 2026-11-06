import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedSplit from '../components/FeaturedSplit'
import WhyChooseUs from '../components/WhyChooseUs'
import AreaCards from '../components/AreaCards'
import HowItWorks from '../components/HowItWorks'
import WhoWeHelpSection from '../components/WhoWeHelpSection'
import CtaBanner from '../components/CtaBanner'
import Faq from '../components/Faq'
import { images } from '../data/images'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedSplit slides={images.featured} />
      <WhyChooseUs />
      <AreaCards />
      <HowItWorks />
      <WhoWeHelpSection preview />
      <CtaBanner />
      <Faq />
    </>
  )
}
