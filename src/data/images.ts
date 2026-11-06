// Photos and icons from the Housify asset pack (src/assets/images), matched by what each photo shows.
// TODO: replace image — every photo below is Housify stock; swap in QCPS's own photos before launch.

// Page heroes
import heroHome from '../assets/images/image-71c88014.jpg'
import heroHowItWorks from '../assets/images/image-7316c5a3.jpg'
import heroAbout from '../assets/images/image-1ddc8a12.jpg'
import heroWhoWeHelp from '../assets/images/image-0dd0a549.jpg'
import heroCashVsAgent from '../assets/images/image-4ecc9414.jpg'
import heroAreas from '../assets/images/image-a5b32f80.jpg'
import heroWhySellers from '../assets/images/image-59af05fd.jpg'
import heroFaq from '../assets/images/image-2e83c15a.jpg'
import heroGetOffer from '../assets/images/image-6be2174c.jpg'
import heroPrivacy from '../assets/images/image-630f1981.jpg'

// Section images
import servicesImg from '../assets/images/image-3c2b2072.jpg'
import ctaBannerImg from '../assets/images/image-6be2174c.jpg'
import aboutIntroImg from '../assets/images/image-e09927cf.jpg'
import aboutProcessImg from '../assets/images/image-40326beb.jpg'
import processSplitImg from '../assets/images/image-267e8df0.jpg'
import faqHelpImg from '../assets/images/image-19dcd4e8.jpg'

import featured1 from '../assets/images/image-16fd15da.jpg'
import featured2 from '../assets/images/image-905331d2.jpg'
import featured3 from '../assets/images/image-9150cdda.jpg'
import featured4 from '../assets/images/image-0390fb4e.jpg'
import compare1 from '../assets/images/image-8e274712.jpg'
import compare2 from '../assets/images/image-af782b6b.jpg'
import compare3 from '../assets/images/image-7fbd9561.jpg'
import compare4 from '../assets/images/image-8118a6ae.jpg'

import step1 from '../assets/images/image-95d06957.jpg'
import step2 from '../assets/images/image-10b7b9e3.jpg'
import step3 from '../assets/images/image-5d5546d7.jpg'

import area1 from '../assets/images/property-0a54b247.jpg'
import area2 from '../assets/images/property-2caeb502.jpg'
import area3 from '../assets/images/property-145dc024.jpg'
import area4 from '../assets/images/property-21183d53.jpg'
import area5 from '../assets/images/property-1d953a2a.jpg'
import area6 from '../assets/images/property-4ca27375.jpg'

import foreclosureImg from '../assets/images/image-58b7c62b.jpg'
import inheritedImg from '../assets/images/image-2be876a6.jpg'
import repairsImg from '../assets/images/image-3909860e.png'
import divorceImg from '../assets/images/image-45ea243c.jpg'
import relocatingImg from '../assets/images/image-729aaae8.jpg'
import landlordImg from '../assets/images/image-8faf121e.jpg'

import story1 from '../assets/images/image-dd8d7ef7.jpg'
import story2 from '../assets/images/image-a49f8489.jpg'
import story3 from '../assets/images/image-59d082f1.jpg'
import story4 from '../assets/images/image-564f5262.jpg'
import story5 from '../assets/images/image-efc56d18.jpg'
import story6 from '../assets/images/image-624adc1b.jpg'

import ticker1 from '../assets/images/image-0dd0a549.jpg'
import ticker2 from '../assets/images/image-dd8d7ef7.jpg'
import ticker3 from '../assets/images/image-1ddc8a12.jpg'
import ticker4 from '../assets/images/image-af649c22.jpg'
import ticker5 from '../assets/images/image-a411a34b.jpg'
import ticker6 from '../assets/images/image-2be876a6.jpg'
import ticker7 from '../assets/images/image-fa1ea11d.jpg'
import ticker8 from '../assets/images/image-1524bcf8.jpg'


import team1 from '../assets/images/image-49357535.jpg'
import team2 from '../assets/images/image-fe6a5d94.png'
import team3 from '../assets/images/image-055a0ba4.png'

// Icons
import logoMark from '../assets/images/icon-e97ee0c3-navy.svg' // TODO: replace with the real QCPS logo file
import footerMark from '../assets/images/image-e97ee0c3.svg'
import arrowWhite from '../assets/images/image-149e754e.svg'
import chevronLeft from '../assets/images/image-2e3af917.svg'
import chevronRight from '../assets/images/image-a174e8af.svg'
import tileSales from '../assets/images/image-d1030cfd.svg'
import tileHandshake from '../assets/images/image-f30c1707.svg'
import tileKeys from '../assets/images/image-a3484425.svg'
import tileConsult from '../assets/images/image-00c0ee72.svg'
import tileValuation from '../assets/images/image-e5b00d57.svg'
import tileTailored from '../assets/images/image-fb0354ad.svg'
import featureHomeStar from '../assets/images/icon-4aa54ee9-navy.svg'
import featureMoney from '../assets/images/icon-6858e8b4-navy.svg'
import featureHomeHeart from '../assets/images/icon-fb57b37a-navy.svg'
import featureHouse from '../assets/images/icon-e97ee0c3-navy.svg'
import socialFacebook from '../assets/images/image-0d41df1c.svg'
import socialInstagram from '../assets/images/image-ab356d55.svg'
import socialTwitter from '../assets/images/image-e56c3f27.svg'
import socialYoutube from '../assets/images/image-f73629b2.svg'

export type Img = { src: string; alt: string }

export const heroes = {
  home: { src: heroHome, alt: 'Two-story family house at sunset' },
  howItWorks: { src: heroHowItWorks, alt: 'Modern two-story house with a front lawn' },
  about: { src: heroAbout, alt: 'Large family home lit up at night' },
  whoWeHelp: { src: heroWhoWeHelp, alt: 'House with a balcony at sunset' },
  cashVsAgent: { src: heroCashVsAgent, alt: 'Modern home with a swimming pool' },
  areas: { src: heroAreas, alt: 'Row of suburban family homes' },
  whySellers: { src: heroWhySellers, alt: 'Homeowner meeting a buyer at their front door' },
  faq: { src: heroFaq, alt: 'Contemporary house overlooking the water' },
  getOffer: { src: heroGetOffer, alt: 'Suburban house at dusk' },
  privacy: { src: heroPrivacy, alt: 'Modern house beside a reflecting pool' },
}

export const images = {
  services: { src: servicesImg, alt: 'Handshake over a contract next to a model house' },
  ctaBanner: { src: ctaBannerImg, alt: 'Suburban house at dusk' },
  aboutIntro: { src: aboutIntroImg, alt: 'Handshake over an architectural model' },
  aboutProcess: { src: aboutProcessImg, alt: 'Family embracing in their home' },
  processSplit: { src: processSplitImg, alt: 'Signing paperwork next to a model house' },
  faqHelp: { src: faqHelpImg, alt: 'Reviewing property paperwork with a homeowner' },
  featured: [
    { src: featured1, alt: 'Modern multi-story home' },
    { src: featured2, alt: 'Contemporary home at dusk' },
    { src: featured3, alt: 'Modern house with landscaped garden' },
    { src: featured4, alt: 'Two-story home with a large lawn' },
  ],
  compare: [
    { src: compare1, alt: 'White modern house by a lake' },
    { src: compare2, alt: 'House with a pool and terrace' },
    { src: compare3, alt: 'Modern house with hedges' },
    { src: compare4, alt: 'House with a large patio' },
  ],
  steps: [
    { src: step1, alt: 'Homeowner holding a model house at her laptop' },
    { src: step2, alt: 'Reviewing a home offer together on a laptop' },
    { src: step3, alt: 'House keys handed over at closing' },
  ],
  areas: [
    { src: area1, alt: 'Modern home with a pool' },
    { src: area2, alt: 'Two-story house with a garden' },
    { src: area3, alt: 'Contemporary home beside a pool' },
    { src: area4, alt: 'Modern home with a reflecting pool' },
    { src: area5, alt: 'Family home at dusk' },
    { src: area6, alt: 'House with a large front lawn' },
  ],
  whoWeHelp: [
    { src: foreclosureImg, alt: 'Model house and cash on a table' },
    { src: inheritedImg, alt: 'Large inherited family home' },
    { src: repairsImg, alt: 'Repairman fixing a sink' },
    { src: divorceImg, alt: 'Couple discussing a model house' },
    { src: relocatingImg, alt: 'Couple packing moving boxes' },
    { src: landlordImg, alt: 'Wooden blocks spelling rent beside a model house' },
  ],
  stories: [
    { src: story1, alt: 'Modern home at sunset' },
    { src: story2, alt: 'House beside a pool' },
    { src: story3, alt: 'Single-story house with a lawn' },
    { src: story4, alt: 'House with a pool' },
    { src: story5, alt: 'Modern house with a garden' },
    { src: story6, alt: 'Contemporary family home' },
  ],
  ticker: [
    { src: ticker1, alt: 'House at sunset' },
    { src: ticker2, alt: 'Home with an infinity pool' },
    { src: ticker3, alt: 'Large home lit up at night' },
    { src: ticker4, alt: 'Modern house at night' },
    { src: ticker5, alt: 'Courtyard with palm trees' },
    { src: ticker6, alt: 'White family home' },
    { src: ticker7, alt: 'Pool surrounded by palms' },
    { src: ticker8, alt: 'House exterior at dusk' },
  ],
  // TODO: replace image — stock portraits; use real QCPS team photos
  team: [
    { src: team1, alt: 'Team member portrait' },
    { src: team2, alt: 'Team member portrait' },
    { src: team3, alt: 'Team member portrait' },
  ],
}

export const icons = {
  logoMark,
  footerMark,
  arrowWhite,
  chevronLeft,
  chevronRight,
  tiles: [tileSales, tileHandshake, tileKeys, tileConsult, tileValuation, tileTailored],
  features: [featureHomeStar, featureMoney, featureHomeHeart, featureHouse],
  socials: [socialFacebook, socialInstagram, socialTwitter, socialYoutube],
}
