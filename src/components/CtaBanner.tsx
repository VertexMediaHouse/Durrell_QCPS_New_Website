import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ctaBanner, navCta } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { Accent, Badge, h2Class } from './ui'

export default function CtaBanner() {
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  function submit(e: FormEvent) {
    e.preventDefault()
    const q = address.trim()
    navigate(q ? `${navCta.href}?address=${encodeURIComponent(q)}` : navCta.href)
  }

  return (
    <section className="p-4 md:p-5">
      <div className="group relative mx-auto max-w-[1400px] overflow-hidden rounded-[14px] px-5 py-20 md:px-8">
        <img
          src={images.ctaBanner.src}
          alt={images.ctaBanner.alt}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <Reveal className="relative mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center text-white">
          <Badge>{ctaBanner.badge}</Badge>
          <h2 className={h2Class}>
            <Accent text={ctaBanner.heading} />
          </h2>
          <p className="text-lg leading-[22px] font-semibold">{ctaBanner.subtitle}</p>
          <form onSubmit={submit} className="mt-4 flex w-full max-w-[500px] items-center gap-2 rounded-[10px] bg-white p-1.5 pl-4">
            <label htmlFor="cta-address" className="sr-only">
              {ctaBanner.inputLabel}
            </label>
            <input
              id="cta-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={ctaBanner.placeholder}
              autoComplete="street-address"
              className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink/50"
            />
            <button
              type="submit"
              className="shrink-0 rounded-[8px] bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink md:px-6"
            >
              {ctaBanner.button}
            </button>
          </form>
          <Link to={ctaBanner.footnote.href} className="mt-8 text-lg leading-[22px] font-semibold underline underline-offset-4 hover:opacity-80">
            {ctaBanner.footnote.label}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
