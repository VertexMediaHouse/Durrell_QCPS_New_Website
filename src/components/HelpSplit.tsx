import { faqPage, footer } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import { Icon, PrimaryButton, Section, SectionHeading } from './ui'

export default function HelpSplit() {
  const d = faqPage.help
  return (
    <Section className="bg-light">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
        <Reveal className="group overflow-hidden rounded-[20px] lg:order-2">
          <img
            src={images.faqHelp.src}
            alt={images.faqHelp.alt}
            className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
          />
        </Reveal>
        <div className="flex flex-col items-start gap-8">
          <SectionHeading badge={d.badge} heading={d.heading} subtitle={d.text} align="left" />
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a href={`tel:${footer.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-xl font-semibold text-ink hover:text-primary">
              <Icon.Phone className="size-6 text-primary" />
              {footer.phone}
            </a>
            <a href={`mailto:${footer.email}`} className="flex items-center gap-3 text-xl font-semibold text-ink hover:text-primary">
              <Icon.Mail className="size-6 text-primary" />
              {footer.email}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <PrimaryButton to={d.cta.href}>{d.cta.label}</PrimaryButton>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
