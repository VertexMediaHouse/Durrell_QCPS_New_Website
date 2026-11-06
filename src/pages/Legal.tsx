import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { pageHeroes, privacyPolicy } from '../data/siteContent'
import { heroes } from '../data/images'

export default function Legal() {
  return (
    <>
      <PageHero {...pageHeroes.privacy} image={heroes.privacy} />
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-[1024px] flex-col gap-10">
          {privacyPolicy.sections.map((s) => (
            <Reveal key={s.heading} className="rounded-[16px] bg-light p-6">
              <h2 className="text-[26px] leading-9 font-semibold tracking-[-0.5px] text-ink">{s.heading}</h2>
              {s.body && <p className="mt-4 text-lg leading-[26px] text-ink">{s.body}</p>}
              {s.list && (
                <ul className="mt-4 list-disc space-y-1 pl-6 text-lg leading-[26px] text-ink">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
