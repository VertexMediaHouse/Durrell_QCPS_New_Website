import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Img } from '../data/images'
import { Badge } from './ui'

const ease = [0.22, 1, 0.36, 1] as const

type Props = {
  badge: string
  title: string
  subtitle: string
  image: Img
  children?: ReactNode
}

export default function PageHero({ badge, title, subtitle, image, children }: Props) {
  return (
    <section className="p-4 md:p-5">
      <div
        className={`relative flex flex-col items-center overflow-hidden rounded-[14px] px-5 pt-[150px] text-center md:px-10 md:pt-[160px] ${
          children ? 'pb-10 md:pb-16' : 'min-h-[520px] justify-center pb-20 md:min-h-[600px]'
        }`}
      >
        <motion.img
          src={image.src}
          alt={image.alt}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative flex max-w-[900px] flex-col items-center gap-5 text-white"
        >
          <Badge>{badge}</Badge>
          <h1 className="text-balance text-[40px] leading-[44px] font-semibold tracking-[-2px] md:text-[64px] md:leading-[68px] md:tracking-[-3px] lg:text-[80px] lg:leading-[84px] lg:tracking-[-4px]">
            {title}
          </h1>
          <p className="max-w-[620px] text-lg leading-[26px] font-semibold tracking-[-0.1px] md:text-xl md:leading-7">
            {subtitle}
          </p>
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative mt-8 w-full max-w-[520px] text-left"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
