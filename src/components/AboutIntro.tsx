import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { about } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { Accent, Badge, Icon, Section, h2Class } from './ui'

export default function AboutIntro() {
  const d = about.intro
  const [tab, setTab] = useState(0)

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-[500px_1fr] lg:gap-8">
        <Reveal className="group rounded-[20px] bg-light p-1.5">
          <div className="overflow-hidden rounded-[16px]">
            <img
              src={images.aboutIntro.src}
              alt={images.aboutIntro.alt}
              className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[470px]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-5">
            <Badge>{d.badge}</Badge>
            <h2 className={`${h2Class} text-ink`}>
              <Accent text={d.heading} />
            </h2>
          </div>
          <div role="tablist" className="flex flex-wrap gap-1 rounded-[10px] bg-light p-1.5">
            {d.tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`rounded-[8px] px-4 py-2 text-lg leading-6 font-semibold transition-colors md:text-xl ${
                  tab === i ? 'bg-ink text-white' : 'text-ink hover:bg-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={tab}
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg leading-[26px] tracking-[-0.1px] text-ink"
            >
              {d.tabs[tab].text}
            </motion.p>
          </AnimatePresence>
          <ul className="grid w-full gap-x-14 gap-y-4 md:grid-cols-2">
            {d.checklist.map((c) => (
              <li key={c} className="flex items-start gap-2 text-lg leading-[22px] text-ink">
                <Icon.CheckCircle className="mt-0.5 size-6 shrink-0 text-primary" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
