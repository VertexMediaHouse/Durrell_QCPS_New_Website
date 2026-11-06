import { cashVsAgent } from '../data/siteContent'
import Reveal from './Reveal'
import ChipMarquee from './ChipMarquee'
import { Icon, Section, SectionHeading } from './ui'

export default function ComparisonTable() {
  const { columns, rows } = cashVsAgent
  return (
    <Section>
      <SectionHeading badge={cashVsAgent.badge} heading={cashVsAgent.heading} subtitle={cashVsAgent.intro} className="mx-auto max-w-[760px]" />
      <div className="mt-8">
        <ChipMarquee />
      </div>
      <Reveal className="mx-auto mt-[60px] max-w-[1100px] overflow-hidden rounded-[16px] border border-light">
        <div className="hidden grid-cols-[1.1fr_1fr_1fr] md:grid">
          <div className="bg-light px-6 py-5 text-xl leading-7 font-semibold text-ink">{columns.label}</div>
          <div className="bg-ink px-6 py-5 text-xl leading-7 font-semibold text-white">{columns.qcps}</div>
          <div className="bg-light px-6 py-5 text-xl leading-7 font-semibold text-ink">{columns.agent}</div>
        </div>
        <ul>
          {rows.map((row) => (
            <li
              key={row.label}
              className="grid gap-3 border-t border-light px-5 py-5 transition-colors first:border-t-0 hover:bg-light md:grid-cols-[1.1fr_1fr_1fr] md:gap-0 md:px-0 md:py-0 md:first:border-t"
            >
              <p className="text-lg leading-6 font-semibold text-ink md:px-6 md:py-5">{row.label}</p>
              <p className="flex items-start gap-2 text-lg leading-6 text-ink md:bg-light md:px-6 md:py-5">
                <Icon.CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <span className="text-sm font-semibold text-ink md:hidden">{columns.qcps}: </span>
                  {row.qcps}
                </span>
              </p>
              <p className="flex items-start gap-2 text-lg leading-6 text-ink md:px-6 md:py-5">
                <Icon.Close className="mt-1 size-4 shrink-0 text-ink" />
                <span>
                  <span className="text-sm font-semibold text-ink md:hidden">{columns.agent}: </span>
                  {row.agent}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
