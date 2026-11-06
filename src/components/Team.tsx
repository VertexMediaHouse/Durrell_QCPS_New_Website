import { about } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { SectionHeading } from './ui'

export default function Team() {
  const d = about.team
  return (
    <section className="p-4 md:px-5">
      <div className="mx-auto max-w-[1400px] bg-light px-4 py-16 md:px-8 md:py-20">
        <SectionHeading badge={d.badge} heading={d.heading} className="mx-auto max-w-[700px]" />
        <ul className="mt-[60px] grid gap-4 md:grid-cols-3">
          {d.members.map((m, i) => {
            const img = images.team[i % images.team.length]
            return (
              <Reveal as="li" key={i} delay={i * 0.08} className="group relative h-[380px] overflow-hidden rounded-[20px] md:h-[355px]">
                <img src={img.src} alt={img.alt} className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl leading-7 font-semibold tracking-[-0.5px]">{m.name}</p>
                  <p className="mt-1 text-lg leading-[22px] text-white/80">{m.role}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
