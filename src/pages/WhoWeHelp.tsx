import PageHero from '../components/PageHero'
import WhoWeHelpSection from '../components/WhoWeHelpSection'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes } from '../data/images'

export default function WhoWeHelp() {
  return (
    <>
      <PageHero {...pageHeroes.whoWeHelp} image={heroes.whoWeHelp} />
      <WhoWeHelpSection />
      <Services />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
