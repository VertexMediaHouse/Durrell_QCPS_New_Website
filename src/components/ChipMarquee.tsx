import { chips } from '../data/siteContent'
import { Icon } from './ui'

export default function ChipMarquee() {
  const loop = [...chips, ...chips]
  return (
    <div className="mask-fade-x pause-on-hover mx-auto max-w-[720px] overflow-hidden">
      <ul className="flex w-max animate-ticker-x py-1">
        {loop.map((c, i) => (
          <li
            key={i}
            aria-hidden={i >= chips.length}
            className="mr-3 flex items-center gap-2 rounded-full border border-light bg-white py-1.5 pr-4 pl-2 text-base leading-5 text-ink"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white">
              <Icon.CheckCircle className="size-4" />
            </span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}
