import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { servicesSection } from '../data/siteContent'
import { icons, images } from '../data/images'
import Reveal from './Reveal'
import { Section, SectionHeading } from './ui'

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <Section className="md:pt-[72px]">
      <SectionHeading badge={servicesSection.badge} heading={servicesSection.heading} className="mx-auto max-w-[650px]" />
      <div className="mt-[60px] grid gap-8 lg:grid-cols-2">
        <ul className="flex flex-col gap-5">
          {servicesSection.items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                className={`rounded-[20px] transition-colors duration-500 ${isOpen ? 'bg-light' : 'bg-light hover:bg-light'}`}
              >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-7 text-left"
                  >
                    <span className="text-xl leading-7 font-medium tracking-[-0.5px] text-ink md:text-2xl">{item.title}</span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-ink transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}
                    >
                      <img src={icons.arrowWhite} alt="" className="size-3.5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-7 text-lg leading-[22px] text-ink">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </Reveal>
            )
          })}
        </ul>
        <Reveal delay={0.15} className="group overflow-hidden rounded-[20px]">
          <img
            src={images.services.src}
            alt={images.services.alt}
            className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[560px] lg:h-full lg:min-h-[600px]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
