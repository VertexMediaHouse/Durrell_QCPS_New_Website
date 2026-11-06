import { Link } from 'react-router-dom'
import { navCta, ui, whoWeHelp } from '../data/siteContent'
import { images } from '../data/images'
import Reveal from './Reveal'
import StoryCards from './StoryCards'
import { Icon, Section, SectionHeading } from './ui'

const stories = whoWeHelp.items.map((item, i) => ({
  image: images.whoWeHelp[i % images.whoWeHelp.length],
  tag: item.tag,
  title: item.title,
  text: item.description,
}))

export default function WhoWeHelpSection({ preview = false }: { preview?: boolean }) {
  return (
    <Section>
      <SectionHeading
        badge={whoWeHelp.badge}
        heading={whoWeHelp.heading}
        subtitle={preview ? undefined : whoWeHelp.intro}
        className="mx-auto mb-[60px] max-w-[820px]"
      />
      {preview ? (
        <>
          <StoryCards items={stories.slice(0, 4)} featuredTag={whoWeHelp.featuredTag} link={{ label: ui.readMore, href: whoWeHelp.cta.href }} />
          <Reveal className="mt-12 flex justify-center">
            <Link to={whoWeHelp.cta.href} className="group inline-flex items-center gap-2 text-2xl leading-7 font-medium tracking-[-0.5px] text-primary">
              {whoWeHelp.cta.label}
              <Icon.ArrowUpRight className="size-6 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Reveal>
        </>
      ) : (
        <StoryCards items={stories} link={navCta} />
      )}
    </Section>
  )
}
