import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import AboutIntro from '../components/AboutIntro'
import Principles from '../components/Principles'
import ProcessSplit from '../components/ProcessSplit'
import Team from '../components/Team'
import CtaBanner from '../components/CtaBanner'
import { pageHeroes } from '../data/siteContent'
import { heroes, images } from '../data/images'

export default function About() {
  return (
    <>
      <PageHero {...pageHeroes.about} image={heroes.about} />
      <StatsBar />
      <AboutIntro />
      <Principles />
      <ProcessSplit image={images.aboutProcess} />
      <Team />
      <CtaBanner />
    </>
  )
}
