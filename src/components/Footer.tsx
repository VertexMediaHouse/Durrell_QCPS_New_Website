import { Link } from 'react-router-dom'
import { brand, footer, navCta } from '../data/siteContent'
import { icons } from '../data/images'

export default function Footer() {
  return (
    <footer className="p-4 md:p-5">
      <div className="mx-auto max-w-[1400px] rounded-[14px] bg-ink px-5 text-white">
        <div className="flex flex-col gap-12 py-[60px] lg:flex-row lg:justify-between">
          <div className="flex max-w-[600px] flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-4xl leading-10 font-medium">
              <img src={icons.footerMark} alt="" className="size-9 brightness-0 invert" />
              {brand.name}
            </Link>
            <p className="text-lg leading-6 tracking-[-0.1px]">{footer.tagline}</p>
            <ul className="flex gap-6 pt-2">
              {footer.socials.map((s, i) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block transition-transform duration-300 hover:-translate-y-1">
                    <img src={icons.socials[i]} alt="" className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to={navCta.href}
              className="mt-4 inline-flex w-fit rounded-[10px] bg-primary px-6 py-3 text-base leading-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(23,50,77,0.3)]"
            >
              {navCta.label}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-[60px]">
            {footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h3 className="text-xl leading-7 font-semibold tracking-[-0.1px]">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-sm leading-[18px] transition-opacity hover:opacity-70">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <h3 className="text-xl leading-7 font-semibold tracking-[-0.1px]">{footer.contactTitle}</h3>
              <p className="max-w-[200px] text-lg leading-[22px]">{footer.address}</p>
              <a href={`tel:${footer.phone.replace(/\s/g, '')}`} className="text-lg leading-[22px] hover:opacity-70">
                {footer.phone}
              </a>
              <a href={`mailto:${footer.email}`} className="text-lg leading-[22px] hover:opacity-70">
                {footer.email}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/25 px-2.5 py-4 text-sm leading-[18px] tracking-[-0.1px] md:flex-row md:justify-between">
          <p>{footer.copyright}</p>
          <p>
            {footer.designedByLabel} {footer.designedBy}
          </p>
        </div>
      </div>
    </footer>
  )
}
