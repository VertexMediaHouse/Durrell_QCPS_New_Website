import { Fragment } from 'react'
import { about } from '../data/siteContent'
import Reveal from './Reveal'
import { Section } from './ui'

function split(value: string) {
  const m = value.match(/^([\d.,$]+)(.*)$/)
  return m ? [m[1], m[2]] : [value, '']
}

export default function StatsBar() {
  return (
    <Section>
      <Reveal className="flex flex-col items-center gap-8 rounded-[30px] bg-light px-6 py-10 md:flex-row md:justify-between md:gap-4 md:px-10">
        {about.stats.map((s, i) => {
          const [num, suffix] = split(s.value)
          return (
            <Fragment key={s.label}>
              {i > 0 && <span className="hidden size-2 shrink-0 rounded-full bg-ink md:block" />}
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-mono text-[44px] leading-[52px] text-ink lg:text-[52px] lg:leading-[60px]">
                  {num}
                  <span className="text-primary">{suffix}</span>
                </p>
                <p className="text-lg leading-6 font-semibold tracking-[-0.1px] text-ink md:text-xl">{s.label}</p>
              </div>
            </Fragment>
          )
        })}
      </Reveal>
    </Section>
  )
}
