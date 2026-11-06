import { motion } from 'framer-motion'
import { hero } from '../data/siteContent'
import { heroes } from '../data/images'
import { OutlineButton, PillButton } from './ui'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export function StatValue({ value }: { value: string }) {
  const plus = value.endsWith('+')
  return (
    <>
      {plus ? value.slice(0, -1) : value}
      {plus && <sup className="ml-0.5 align-super text-[0.6em]">+</sup>}
    </>
  )
}

export default function Hero() {
  return (
    <section className="p-4 md:p-5">
      <div className="relative flex min-h-[calc(100svh-32px)] flex-col justify-center overflow-hidden rounded-[14px] px-5 pt-[140px] pb-12 md:min-h-[calc(100svh-40px)] md:px-10 md:pt-[200px] md:pb-20 lg:px-20">
        <motion.img
          src={heroes.home.src}
          alt={heroes.home.alt}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />

        <div className="relative flex max-w-[800px] flex-col gap-6 text-white">
          <motion.h1
            {...rise(0.1)}
            className="text-[44px] leading-[46px] font-semibold text-balance tracking-[-2px] md:text-[64px] md:leading-[66px] md:tracking-[-3px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-4px]"
          >
            {hero.title}
          </motion.h1>
          <motion.p {...rise(0.25)} className="max-w-[680px] text-lg leading-[26px] font-semibold tracking-[-0.1px] md:text-xl md:leading-7">
            {hero.subtitle}
          </motion.p>
          <motion.div {...rise(0.4)} className="flex flex-wrap items-center gap-3 pt-2">
            <PillButton to={hero.cta.href}>{hero.cta.label}</PillButton>
            <OutlineButton to={hero.secondaryCta.href}>{hero.secondaryCta.label}</OutlineButton>
          </motion.div>
          <motion.ul {...rise(0.55)} className="flex flex-wrap gap-x-10 gap-y-5 pt-2">
            {hero.stats.map((s) => (
              <li key={s.label} className="flex flex-col gap-1">
                <span className="text-[36px] leading-[44px] font-medium tracking-[-2px] md:text-[40px] md:leading-[48px]">
                  <StatValue value={s.value} />
                </span>
                <span className="text-lg leading-[22px] text-white">{s.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
