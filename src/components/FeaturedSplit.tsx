import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { featuredOffer, ui } from '../data/siteContent'
import { icons, type Img } from '../data/images'
import Reveal from './Reveal'
import { Accent, Badge, Icon, PrimaryButton, Section, h2Class } from './ui'

function Carousel({ slides }: { slides: Img[] }) {
  const [index, setIndex] = useState(0)
  const go = (n: number) => setIndex((n + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(id)
  }, [slides.length, index])

  return (
    <div className="rounded-[16px] bg-light p-3">
      <div className="relative h-[360px] overflow-hidden rounded-[12px] md:h-[480px] lg:h-[530px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>
        <button
          type="button"
          aria-label={ui.prevImage}
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 transition hover:bg-ink lg:opacity-0 lg:group-hover:opacity-100"
        >
          <img src={icons.chevronLeft} alt="" className="size-5" />
        </button>
        <button
          type="button"
          aria-label={ui.nextImage}
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 transition hover:bg-ink lg:opacity-0 lg:group-hover:opacity-100"
        >
          <img src={icons.chevronRight} alt="" className="size-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-ink/50 px-3 py-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`${ui.goToImage} ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`size-2.5 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FeaturedSplit({ slides, reverse = false }: { slides: Img[]; reverse?: boolean }) {
  const d = featuredOffer
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className={`group ${reverse ? 'lg:order-2' : ''}`}>
          <Carousel slides={slides} />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col items-start gap-6">
          <Badge>{d.badge}</Badge>
          <h2 className={`${h2Class} text-ink`}>
            <Accent text={d.title} />
          </h2>
          <p className="flex items-center gap-2 text-lg leading-6 tracking-[-0.1px] text-ink">
            <Icon.MapPin className="size-6 text-primary" />
            {d.location}
          </p>
          <p className="text-lg leading-[22px] text-ink">{d.description}</p>
          <ul className="grid w-full gap-x-6 gap-y-4 rounded-[12px] bg-light p-4 md:grid-cols-2 md:gap-y-10">
            {d.features.map((f, i) => (
              <li key={f} className="flex items-center gap-4 text-lg leading-6 tracking-[-0.1px] text-ink">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[6px] bg-white">
                  <img src={icons.features[i]} alt="" className="size-8" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-10 pt-2">
            <PrimaryButton to={d.cta.href}>{d.cta.label}</PrimaryButton>
            <div>
              <p className="text-[28px] leading-9 font-medium tracking-[-1px] text-ink">{d.priceValue}</p>
              <p className="text-sm leading-[18px] tracking-[-0.1px] text-ink">{d.priceCaption}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
