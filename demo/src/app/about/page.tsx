import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Wallpaper } from '@/components/elements/wallpaper'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Feature, FeaturesStackedAlternatingWithDemos } from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { Stat, StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'

export default function Page() {
  return (
    <>
      {/* Intro */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Who even am I...?"
        subheadline={
          <>
            <p>
              Hi! I&apos;m Oliver Ostojić, a recent graduate from NYU&apos;s Tandon School of Engineering. 
               <span className='font-semibold'> I love to learn.</span> Whether I am in a class or on my own, I find opportunities to learn wherever I go and in what ever I do.
              <span className='font-semibold'> I'm creative</span>. Thinking of new ways to do things is a crucial part of who I am. 
              I am never content with doing something the conventional way if a better way is possible. 
               <span className='font-semibold'> I'm also very curious.</span> I'll take an interest in an experience for its own sake. I find subjects and topics fascinating. I love exploring and discovering.
            <p className='mt-4'>
              I&apos;ve been fascinated by technology since I was a kid. My mind naturally gravitates
              toward <span className='font-semibold'> understanding</span> systems, <span className='font-semibold'> analyzing</span> problems, and <span className='font-semibold'> engineering</span> solutions. My passion is turning complex problems into elegant, simple software solutions.
            </p>
            </p>
          </>
        }
      />

      {/* Pull quote */}
      <section className="px-4 sm:px-6 lg:px-8">
        <Wallpaper color="blue" className="rounded-2xl pt-24 pb-24">
          <Container>
            <blockquote className="mx-auto text-center font-display tracking-tight text-white text-[clamp(4rem,18vw,14rem)]/[1.05]">
              I'm curious, creative, and I love to learn.
            </blockquote>
          </Container>
        </Wallpaper>
      </section>

      {/* Craft */}
      <FeaturesStackedAlternatingWithDemos
        id="craft"
        eyebrow="The craft"
        headline="How I build."
        features={
          <>
            <Feature
              headline="Architect by nature"
              subheadline={
                <>
                  <p>
                    I specialize in <span className='font-semibold'> backend development</span>, where my greatest strength lies in software
                    architecture. I love taking a use case and designing the system that brings it to
                    life — starting simple, then iteratively making it more <span className='font-semibold'> reusable</span>, more <span className='font-semibold'> efficient</span>,
                    and cleaner.
                  </p>
                  <p>
                    The software I write is <span className='font-semibold'> modular</span>, <span className='font-semibold'> scalable</span>, and <span className='font-semibold'> intentional</span>. That same
                    deliberateness carries into my frontend work. Every element in an interface I
                    build is placed with intention and purpose. My goal is a cohesive design, every interface tied together, nothing feeling out of place.
                  </p>
                </>
              }
              cta={null}
              demo={<Wallpaper color="brown" className="h-full min-h-64" />}
            />
            <Feature
              headline="Always thinking bigger"
              subheadline={
                <p>
                  I&apos;m drawn to <span className='font-semibold'> big</span> ideas. I&apos;m always seeing where a project can go next
                  and how <span className='font-semibold'> far</span> I can push it. I see a problem and my first instinct is to ask:
                  &ldquo;how can I solve this?&rdquo; I love building software that makes people
                  happier, and their lives easier.
                </p>
              }
              cta={null}
              demo={<Wallpaper color="purple" className="h-full min-h-64" />}
            />
          </>
        }
      />

      {/* Teammate */}
      <StatsThreeColumnWithDescription
        id="teammate"
        heading="As a teammate"
        description={
          <p>
            I bring strong interpersonal skills alongside my technical ones. I believe the best
            solutions come from collaboration and compromise — and the best teams are built on
            diversity, trust, good communication, and not taking themselves too seriously.
          </p>
        }
      >
        <Stat
          stat="Direct"
          text="Authentic and confident in my ideas, but always open to being challenged."
        />
        <Stat
          stat="Collaborative"
          text="The best solutions come from many different perspectives, not any one person's vision."
        />
        <Stat
          stat="Leader"
          text="A natural communicator who values genuine relationships, connects with people, and gets things moving."
        />
      </StatsThreeColumnWithDescription>

      {/* CTA */}
      <CallToActionSimpleCentered
        id="cta"
        headline="I'm the engineer for you."
        subheadline={<p>If that sounds like someone you want building with you, let&apos;s talk.</p>}
        cta={
          <ButtonLink href="mailto:ollieostojic@gmail.com" size="lg">
            Get in touch
          </ButtonLink>
        }
      />
    </>
  )
}
