import PageHero from '../components/PageHero'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedSplit from '../components/FeaturedSplit'
import ProcessSplit from '../components/ProcessSplit'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes, images } from '../data/images'

export default function WhySellers() {
  return (
    <>
      <PageHero {...pageHeroes.whySellers} image={heroes.whySellers} />
      <WhyChooseUs />
      <FeaturedSplit slides={images.compare} reverse />
      <ProcessSplit image={images.processSplit} />
      <CtaBanner />
    </>
  )
}
