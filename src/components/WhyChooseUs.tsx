import { whyChooseUs } from '../data/siteContent'
import { icons } from '../data/images'
import Reveal from './Reveal'
import { IconTile, Section, SectionHeading } from './ui'

export default function WhyChooseUs() {
  return (
    <Section className="bg-light">
      <SectionHeading badge={whyChooseUs.badge} heading={whyChooseUs.heading} className="mx-auto max-w-[760px]" />
      <ul className="mt-[60px] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 0.08}
            className="flex flex-col gap-6 rounded-[16px] bg-white p-8 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(37,138,130,0.35)]"
          >
            <IconTile src={icons.tiles[i % icons.tiles.length]} />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl leading-8 font-medium tracking-[-1px] text-ink md:text-[28px] md:leading-9">{item.title}</h3>
              <p className="text-lg leading-[26px] tracking-[-0.1px] text-ink">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
