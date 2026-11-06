import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faq } from '../data/siteContent'
import Reveal from './Reveal'
import { Icon, Section, SectionHeading } from './ui'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_786px] lg:gap-8">
        <div>
          <SectionHeading badge={faq.badge} heading={faq.heading} align="left" className="lg:sticky lg:top-36" />
        </div>
        <ul className="flex flex-col gap-5">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal
                as="li"
                key={item.question}
                delay={i * 0.05}
                className={`rounded-[12px] transition-colors duration-500 ${isOpen ? 'bg-light' : 'bg-light'}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-lg leading-7 font-semibold tracking-[-0.1px] text-ink md:text-xl">{item.question}</span>
                  <span
                    className={`flex size-[46px] shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
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
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[560px] px-5 pb-6 text-lg leading-[26px] tracking-[-0.1px] text-ink">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
