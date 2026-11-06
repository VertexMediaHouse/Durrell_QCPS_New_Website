import { Link } from 'react-router-dom'
import type { Img } from '../data/images'
import Reveal from './Reveal'
import { Icon } from './ui'

export type Story = { image: Img; tag: string; title: string; text: string; meta?: string }
type LinkData = { label: string; href: string }

function ReadMore({ link }: { link: LinkData }) {
  return (
    <Link to={link.href} className="group/link inline-flex items-center gap-2 text-lg leading-[22px] text-primary">
      {link.label}
      <Icon.ArrowRight className="size-5 transition-transform duration-300 group-hover/link:translate-x-1" />
    </Link>
  )
}

export default function StoryCards({
  items,
  link,
  featuredTag,
}: {
  items: Story[]
  link: LinkData
  featuredTag?: string
}) {
  const [first, ...rest] = items
  const grid = featuredTag ? rest : items

  return (
    <div className="flex flex-col gap-5">
      {featuredTag && first && (
        <Reveal className="group grid items-center gap-8 rounded-[20px] border border-light p-4 md:p-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src={first.image.src}
              alt={first.image.alt}
              className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[440px]"
            />
            <span className="absolute top-3 right-3 rounded-[4px] bg-white px-3 py-1 text-lg leading-6 text-ink">{first.tag}</span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-[4px] bg-ink px-2 py-1 text-lg leading-[26px] tracking-[-0.1px] text-white">{featuredTag}</span>
            <h3 className="text-[32px] leading-10 font-medium tracking-[-2px] text-ink md:text-[40px] md:leading-[48px]">{first.title}</h3>
            <p className="text-base leading-5 text-ink">{first.text}</p>
            {first.meta && <p className="text-sm leading-[18px] text-ink">{first.meta}</p>}
            <ReadMore link={link} />
          </div>
        </Reveal>
      )}
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {grid.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 0.08}
            className="group flex flex-col gap-4 rounded-[16px] border border-light p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(23,50,77,0.2)]"
          >
            <div className="relative overflow-hidden rounded-[8px]">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[276px]"
              />
              <span className="absolute top-3 right-3 rounded-[4px] bg-white px-3 py-1 text-base leading-6 text-ink">{item.tag}</span>
            </div>
            <h3 className="text-xl leading-7 font-semibold tracking-[-0.1px] text-ink">{item.title}</h3>
            <p className="text-lg leading-[22px] text-ink">{item.text}</p>
            {item.meta && <p className="text-sm leading-[18px] text-ink">{item.meta}</p>}
            <div className="mt-auto">
              <ReadMore link={link} />
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
