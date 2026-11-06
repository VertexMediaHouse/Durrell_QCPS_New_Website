import PageHero from '../components/PageHero'
import HowItWorks from '../components/HowItWorks'
import ProcessSplit from '../components/ProcessSplit'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes, images } from '../data/images'

export default function HowItWorksPage() {
  return (
    <>
      <PageHero {...pageHeroes.howItWorks} image={heroes.howItWorks} />
      <HowItWorks />
      <ProcessSplit image={images.processSplit} />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
