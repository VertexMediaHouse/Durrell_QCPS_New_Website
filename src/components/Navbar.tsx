import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { brand, nav, navCta, ui } from '../data/siteContent'
import { icons } from '../data/images'
import { Icon } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-7 z-50 px-10 md:top-[30px] md:px-24 lg:top-[34px] lg:px-5">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1320px] rounded-[14px] border-[3px] border-white bg-light px-4 py-2 md:px-[30px] lg:py-[7px]"
      >
        <div className="flex items-center justify-between gap-6">
          <Link to="/" onClick={close} className="flex shrink-0 items-center gap-1.5 text-lg leading-[22px] font-medium text-ink">
            <img src={icons.logoMark} alt="" className="h-[22px] w-auto" />
            {brand.name}
          </Link>

          <ul className="hidden items-center gap-4 xl:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    `text-[15px] leading-[22px] whitespace-nowrap text-ink transition-opacity duration-200 hover:opacity-100 ${isActive ? 'font-semibold' : 'opacity-75'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to={navCta.href}
              onClick={close}
              className="hidden rounded-[10px] bg-primary px-4 py-2 text-base leading-[22px] font-semibold whitespace-nowrap text-white transition duration-300 hover:bg-ink md:inline-flex"
            >
              {navCta.label}
            </Link>
            <button
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-center text-ink xl:hidden"
            >
              {open ? <Icon.Close className="size-6" /> : <Icon.Menu className="size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden xl:hidden"
            >
              <ul className="flex flex-col gap-1 pt-3 pb-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end
                      onClick={close}
                      className={({ isActive }) =>
                        `block rounded-[8px] px-2 py-2 text-lg text-ink transition-colors hover:bg-light ${isActive ? 'bg-light font-semibold' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2 md:hidden">
                  <Link
                    to={navCta.href}
                    onClick={close}
                    className="flex justify-center rounded-[10px] bg-primary px-5 py-3 text-lg leading-[22px] text-white"
                  >
                    {navCta.label}
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
