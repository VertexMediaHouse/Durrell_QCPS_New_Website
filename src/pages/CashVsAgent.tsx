import PageHero from '../components/PageHero'
import ComparisonTable from '../components/ComparisonTable'
import FeaturedSplit from '../components/FeaturedSplit'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes, images } from '../data/images'

export default function CashVsAgent() {
  return (
    <>
      <PageHero {...pageHeroes.cashVsAgent} image={heroes.cashVsAgent} />
      <ComparisonTable />
      <FeaturedSplit slides={images.compare} reverse />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
