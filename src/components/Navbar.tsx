import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { brand, nav, navCompany, navCta, processCta, ui } from '../data/siteContent'
import { Icon, Wordmark } from './ui'

const chip = (active: boolean) =>
  `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] whitespace-nowrap transition-all duration-200 ${
    active ? 'bg-ink font-semibold text-white shadow-[0_4px_12px_rgba(23,50,77,0.22)]' : 'font-medium text-ink hover:bg-light'
  }`

const mobileLink = (active: boolean) =>
  `block border-b border-ink/10 py-3.5 text-lg text-ink ${active ? 'font-semibold' : ''}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(() => window.scrollY > 24)
  const { pathname } = useLocation()
  const close = () => setOpen(false)
  const companyActive = navCompany.items.some((i) => i.href === pathname)
  const [home, ...rest] = nav

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock the page behind the open mobile menu
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-light transition-shadow duration-300 ${solid ? 'shadow-[0_1px_0_rgba(23,50,77,0.1)]' : ''}`}
    >
      <div className="flex h-20 items-center gap-5 px-4 md:px-7">
        <Link to="/" onClick={close} aria-label={brand.fullName} className="shrink-0">
          <Wordmark />
        </Link>

        <nav
          aria-label="Main"
          className="mx-auto hidden rounded-full border border-ink/10 bg-white px-1.5 py-1 shadow-[0_2px_10px_rgba(23,50,77,0.03)] min-[1260px]:block"
        >
          <ul className="flex items-center gap-0.5">
            <li>
              <NavLink to={home.href} end className={({ isActive }) => chip(isActive)}>
                {home.label}
              </NavLink>
            </li>
            <li className="group relative">
              <button type="button" aria-haspopup="true" className={chip(companyActive)}>
                {navCompany.label}
                <Icon.ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute top-full left-0 pt-2.5 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="flex min-w-[190px] flex-col rounded-[14px] border border-ink/10 bg-white p-1.5 shadow-[0_10px_24px_rgba(23,50,77,0.08)]">
                  {navCompany.items.map((item) => (
                    <li key={item.href}>
                      <NavLink to={item.href} end className={({ isActive }) => `${chip(isActive)} w-full`}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {rest.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} end className={({ isActive }) => chip(isActive)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 md:flex">
          <Link
            to={processCta.href}
            className="inline-flex h-10 items-center rounded-full border-[1.5px] border-ink px-[18px] text-[13.5px] font-semibold whitespace-nowrap text-ink transition-all duration-200 hover:bg-ink hover:text-white"
          >
            {processCta.label}
          </Link>
          <Link
            to={navCta.href}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-[13.5px] font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-ink"
          >
            <span className="size-2 shrink-0 rounded-full bg-white" />
            {navCta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? ui.closeMenu : ui.openMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex size-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/10 bg-white md:ml-0 min-[1260px]:hidden"
        >
          <span className={`block h-[1.5px] w-4 bg-ink transition-transform duration-200 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-4 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-4 bg-ink transition-transform duration-200 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-light min-[1260px]:hidden"
          >
            <div className="max-h-[calc(100svh-80px)] overflow-y-auto px-[22px] pt-2 pb-7">
              <ul className="mb-5">
                <li>
                  <NavLink to={home.href} end onClick={close} className={({ isActive }) => mobileLink(isActive)}>
                    {home.label}
                  </NavLink>
                </li>
                <li className="pt-[18px] pb-1.5 text-xs font-semibold tracking-[0.08em] text-ink uppercase">{navCompany.label}</li>
                {navCompany.items.map((item) => (
                  <li key={item.href} className="pl-3.5">
                    <NavLink to={item.href} end onClick={close} className={({ isActive }) => mobileLink(isActive)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                {rest.map((item) => (
                  <li key={item.href}>
                    <NavLink to={item.href} end onClick={close} className={({ isActive }) => mobileLink(isActive)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  to={processCta.href}
                  onClick={close}
                  className="flex h-12 items-center justify-center rounded-full border-[1.5px] border-ink text-[15px] font-semibold text-ink"
                >
                  {processCta.label}
                </Link>
                <Link
                  to={navCta.href}
                  onClick={close}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-semibold text-white"
                >
                  <span className="size-2 rounded-full bg-white" />
                  {navCta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
