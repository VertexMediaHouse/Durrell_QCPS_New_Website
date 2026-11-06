import { Link } from 'react-router-dom'
import type { ReactNode, SVGProps } from 'react'
import { icons } from '../data/images'
import { brand } from '../data/siteContent'
import Reveal from './Reveal'

export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 ? (
          <span key={i} className="text-primary">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src={icons.logoMark} alt="" width={54} height={60} className="h-[60px] w-[54px] shrink-0 rounded-[8px] object-cover" />
      <span className={`flex flex-col leading-[1.1] ${light ? 'text-white' : 'text-ink'}`}>
        <span className="text-[19px] font-bold tracking-[0.04em] uppercase">{brand.wordmarkTitle}</span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.22em] uppercase">{brand.wordmarkSub}</span>
      </span>
    </span>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-ink bg-white px-5 py-1 text-base leading-[22px] font-semibold tracking-[-0.1px] text-ink">
      {children}
    </span>
  )
}

export const h2Class =
  'text-[32px] leading-[42px] font-medium tracking-[-1px] md:text-[40px] md:leading-[52px] md:tracking-[-1.5px] lg:text-[48px] lg:leading-[62px] lg:tracking-[-2px]'

export function SectionHeading({
  badge,
  heading,
  subtitle,
  align = 'center',
  className = '',
}: {
  badge: string
  heading: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}) {
  const center = align === 'center'
  return (
    <Reveal className={`flex flex-col gap-5 ${center ? 'items-center text-center' : 'items-start'} ${className}`}>
      <Badge>{badge}</Badge>
      <h2 className={`${h2Class} text-ink`}>
        <Accent text={heading} />
      </h2>
      {subtitle && (
        <p className="max-w-[640px] text-lg leading-[26px] font-semibold tracking-[-0.1px] text-ink md:text-xl md:leading-7">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

export function PrimaryButton({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-base leading-4 font-semibold tracking-[-0.1px] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_8px_20px_-6px_rgba(37,138,130,0.6)] active:translate-y-0 ${className}`}
    >
      {children}
    </Link>
  )
}

export function PillButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full bg-white py-[5px] pr-[5px] pl-6 text-base leading-5 text-ink transition duration-300 hover:shadow-[0_10px_30px_-10px_rgba(23,50,77,0.5)]"
    >
      {children}
      <span className="flex size-[38px] items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45">
        <img src={icons.arrowWhite} alt="" className="size-4" />
      </span>
    </Link>
  )
}

export function OutlineButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-full border border-white px-6 py-[13px] text-base leading-5 text-white transition duration-300 hover:bg-white hover:text-ink"
    >
      {children}
    </Link>
  )
}

export function IconTile({ src, className = '' }: { src: string; className?: string }) {
  return (
    <span
      className={`flex size-[60px] shrink-0 items-center justify-center rounded-[8px] bg-ink ${className}`}
    >
      <img src={src} alt="" className="size-9" />
    </span>
  )
}

export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-4 py-16 md:px-8 md:py-20 ${className}`}>
      <div className="mx-auto max-w-[1376px]">{children}</div>
    </section>
  )
}

type IconProps = SVGProps<SVGSVGElement>
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const Icon = {
  ChevronDown: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  ),
  ArrowRight: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  ),
  ArrowUpRight: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  CheckCircle: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M21 11.1V12a9 9 0 1 1-5.3-8.2" />
      <path d="m8.5 11.5 3 3L21 5" />
    </svg>
  ),
  MapPin: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  Phone: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Menu: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (p: IconProps) => (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  Star: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2l-5.9 3.2 1.3-6.5L2.5 9.3l6.6-.8z" />
    </svg>
  ),
}
