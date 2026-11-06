import { footer, offerPage } from '../data/siteContent'
import Reveal from './Reveal'
import { Icon, Section } from './ui'

const items = [
  { icon: Icon.Phone, label: offerPage.contactLabels.phone, value: footer.phone, href: `tel:${footer.phone.replace(/\s/g, '')}` },
  { icon: Icon.Mail, label: offerPage.contactLabels.email, value: footer.email, href: `mailto:${footer.email}` },
  { icon: Icon.MapPin, label: offerPage.contactLabels.address, value: footer.address },
]

export default function ContactCards() {
  return (
    <Section className="pb-0 md:pb-0">
      <Reveal>
        <h2 className="text-center text-[32px] leading-[42px] font-medium tracking-[-1px] text-ink md:text-[40px] md:leading-[52px]">
          {offerPage.contactTitle}
        </h2>
      </Reveal>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map(({ icon: I, label, value, href }, i) => {
          const body = (
            <>
              <span className="flex size-[60px] items-center justify-center rounded-[8px] bg-ink text-white">
                <I className="size-7" />
              </span>
              <span className="text-lg leading-[22px] text-ink">{label}</span>
              <span className="text-xl leading-7 font-semibold tracking-[-0.1px] text-ink">{value}</span>
            </>
          )
          return (
            <Reveal as="li" key={label} delay={i * 0.08}>
              {href ? (
                <a href={href} className="flex h-full flex-col items-start gap-3 rounded-[16px] bg-light p-8 transition duration-500 hover:-translate-y-1">
                  {body}
                </a>
              ) : (
                <div className="flex h-full flex-col items-start gap-3 rounded-[16px] bg-light p-8">{body}</div>
              )}
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
