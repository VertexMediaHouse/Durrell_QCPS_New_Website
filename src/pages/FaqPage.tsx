import PageHero from '../components/PageHero'
import Faq from '../components/Faq'
import HelpSplit from '../components/HelpSplit'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes } from '../data/images'

export default function FaqPage() {
  return (
    <>
      <PageHero {...pageHeroes.faq} image={heroes.faq} />
      <Faq />
      <HelpSplit />
      <CtaBanner />
    </>
  )
}
