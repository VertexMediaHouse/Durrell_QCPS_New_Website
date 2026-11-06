import { areas } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { Icon, PrimaryButton, Section, SectionHeading } from './ui'

export default function AreaCards({ showHeading = true, showCta = true }: { showHeading?: boolean; showCta?: boolean }) {
  return (
    <Section>
      {showHeading && <SectionHeading badge={areas.badge} heading={areas.heading} subtitle={areas.intro} className="mb-[60px]" />}
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {areas.cities.map((city, i) => {
          const img = images.areas[i % images.areas.length]
          return (
            <Reveal
              as="li"
              key={city.name}
              delay={(i % 3) * 0.08}
              className="group overflow-hidden rounded-[16px] border border-light bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(23,50,77,0.25)]"
            >
              <div className="h-[260px] overflow-hidden md:h-[280px]">
                <img src={img.src} alt={img.alt} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl leading-7 font-semibold tracking-[-0.1px] text-ink">{city.name}</h3>
                    <p className="text-lg leading-[22px] text-ink">{city.region}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-light px-5 py-2 text-lg leading-[22px] text-ink">{areas.cardPill}</span>
                </div>
                <ul className="grid grid-cols-3 divide-x divide-light">
                  {city.neighborhoods.map((n) => (
                    <li key={n} className="flex flex-col gap-2 px-3 first:pl-0">
                      <Icon.MapPin className="size-5 text-ink" />
                      <span className="text-sm leading-[18px] tracking-[-0.1px] text-ink">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </ul>
      {showCta && (
        <Reveal className="mt-[60px] flex justify-center">
          <PrimaryButton to={areas.cta.href}>{areas.cta.label}</PrimaryButton>
        </Reveal>
      )}
    </Section>
  )
}
