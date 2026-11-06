import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { howItWorks } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { Icon, Section, SectionHeading } from './ui'

export default function HowItWorks() {
  const [open, setOpen] = useState(0)

  return (
    <Section className="bg-light">
      <SectionHeading badge={howItWorks.badge} heading={howItWorks.heading} className="mx-auto max-w-[1000px]" />
      <ol className="mt-[60px] border-t border-light">
        {howItWorks.steps.map((step, i) => {
          const isOpen = open === i
          const img = images.steps[i % images.steps.length]
          return (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.08}
              className={`border-b border-light transition-colors duration-500 ${isOpen ? 'bg-white' : 'hover:bg-white'}`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-4 px-4 py-5 text-left md:gap-5 md:px-6"
              >
                <span
                  className={`flex size-[46px] shrink-0 items-center justify-center rounded-full border text-base transition-colors ${
                    isOpen ? 'border-ink bg-ink text-white' : 'border-ink text-ink'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-2xl leading-8 font-medium tracking-[-1px] text-ink md:text-[32px] md:leading-[44px] md:tracking-[-2px]">
                  {step.title}
                </span>
                <span
                  className={`flex size-[46px] shrink-0 items-center justify-center rounded-full text-ink transition duration-500 ${isOpen ? 'rotate-180 bg-light' : ''}`}
                >
                  <Icon.ChevronDown className="size-6" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 px-4 pb-6 md:flex-row md:items-end md:justify-between md:px-6">
                      <p className="border-l border-light pl-[42px] text-lg leading-7 font-semibold tracking-[-0.1px] text-ink md:ml-[22px] md:max-w-[520px] md:text-xl">
                        {step.description}
                      </p>
                      <div className="overflow-hidden rounded-[12px] md:mr-[66px]">
                        <img src={img.src} alt={img.alt} className="h-[220px] w-full object-cover md:h-[176px] md:w-[240px]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
