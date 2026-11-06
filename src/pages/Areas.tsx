import PageHero from '../components/PageHero'
import ChipMarquee from '../components/ChipMarquee'
import AreaCards from '../components/AreaCards'
import FeaturedSplit from '../components/FeaturedSplit'
import CtaBanner from '../components/CtaBanner'
import Faq from '../components/Faq'
import { pageHeroes } from '../data/siteContent'
import { heroes, images } from '../data/images'

export default function Areas() {
  return (
    <>
      <PageHero {...pageHeroes.areas} image={heroes.areas} />
      <div className="px-4 pt-12 md:px-8">
        <ChipMarquee />
      </div>
      <AreaCards showHeading={false} showCta={false} />
      <FeaturedSplit slides={images.featured} />
      <CtaBanner />
      <Faq />
    </>
  )
}
