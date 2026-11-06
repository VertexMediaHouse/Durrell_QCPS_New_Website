import PageHero from '../components/PageHero'
import OfferForm from '../components/OfferForm'
import ContactCards from '../components/ContactCards'
import Faq from '../components/Faq'
import { pageHeroes } from '../data/siteContent'
import { heroes } from '../data/images'

export default function GetOffer() {
  return (
    <>
      <PageHero {...pageHeroes.getOffer} image={heroes.getOffer}>
        <OfferForm />
      </PageHero>
      <ContactCards />
      <Faq />
    </>
  )
}
