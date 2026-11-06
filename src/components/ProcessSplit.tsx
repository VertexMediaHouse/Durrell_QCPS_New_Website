import { useEffect, useState } from 'react'
import { about } from '../data/siteContent'
import type { Img } from '../data/images'
import Reveal from './Reveal'
import { PrimaryButton, Section, SectionHeading } from './ui'

export default function ProcessSplit({ image }: { image: Img }) {
  const d = about.process
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % d.steps.length), 3000)
    return () => clearInterval(id)
  }, [d.steps.length])

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading badge={d.badge} heading={d.heading} subtitle={d.intro} align="left" />
          <ol className="flex w-full flex-col gap-2">
            {d.steps.map((s, i) => (
              <li key={s.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex w-full gap-5 rounded-[12px] p-3 text-left transition duration-500 ${active === i ? 'bg-light opacity-100' : 'opacity-50 hover:opacity-80'}`}
                >
                  <span className="font-mono text-[28px] leading-9 font-light text-primary">{String(i + 1).padStart(2, '0')}.</span>
                  <span className="flex flex-col gap-2 border-l border-ink pl-5">
                    <span className="text-2xl leading-8 font-medium tracking-[-0.5px] text-ink">{s.title}</span>
                    <span className="text-lg leading-[22px] text-ink">{s.description}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <PrimaryButton to={d.cta.href} className="rounded-full">
            {d.cta.label}
          </PrimaryButton>
        </div>
        <Reveal delay={0.1} className="group overflow-hidden rounded-[12px]">
          <img src={image.src} alt={image.alt} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[600px]" />
        </Reveal>
      </div>
    </Section>
  )
}
