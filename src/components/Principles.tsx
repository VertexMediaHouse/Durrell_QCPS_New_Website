import { about } from '../data/siteContent'
import { icons, images, type Img } from '../data/images'
import Reveal from './Reveal'
import { Section, SectionHeading } from './ui'

function Column({ items, reverse }: { items: Img[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <ul className={`flex flex-col ${reverse ? 'animate-ticker-y-reverse' : 'animate-ticker-y'}`}>
        {[...items, ...items].map((img, i) => (
          <li key={i} className="pb-2.5">
            <img src={img.src} alt={i < items.length ? img.alt : ''} className="h-[240px] w-full rounded-[12px] object-cover" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Principles() {
  const d = about.principles
  const half = Math.ceil(images.ticker.length / 2)

  return (
    <Section className="bg-light">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-12">
          <SectionHeading badge={d.badge} heading={d.heading} align="left" />
          <ul className="flex flex-col gap-10">
            {d.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08} className="flex gap-6">
                <img src={icons.features[i % icons.features.length]} alt="" className="size-[52px] shrink-0" />
                <div className="flex max-w-[400px] flex-col gap-3">
                  <h3 className="text-2xl leading-7 font-medium tracking-[-0.5px] text-ink">{item.title}</h3>
                  <p className="text-lg leading-[22px] text-ink">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="mask-fade-y grid h-[520px] grid-cols-2 gap-6 md:h-[700px] lg:gap-[100px] lg:px-10">
          <Column items={images.ticker.slice(0, half)} />
          <Column items={images.ticker.slice(half)} reverse />
        </Reveal>
      </div>
    </Section>
  )
}
