import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'

export default function Page() {
  return (
    <>
      <PricingMultiTier
        id="skills"
        eyebrow="Skills & Tools"
        headline="What I bring to the table."
        subheadline={
          <p>
            Built through real projects, not just coursework. Here&apos;s where I&apos;m strongest
            and what I reach for when building.
          </p>
        }
        plans={
          <>
            <Plan
              name="Backend"
              price="Expert"
              period="/ 4+ years"
              badge="Primary focus"
              subheadline={
                <p>
                  Where I&apos;m most at home. I design and build server-side systems that are
                  clean, scalable, and easy to reason about.
                </p>
              }
              features={[
                'Python',
                'C/C++',
                'SQL',
                'REST APIs & auth systems',
                'PostgreSQL & database design',
                'Mathematical optimization (MILP)',
                'Monorepo architecture (Turborepo)'
              ]}
              cta={
                <SoftButtonLink href="mailto:ollieostojic@gmail.com" size="lg">
                  Let&apos;s build something
                </SoftButtonLink>
              }
            />
            <Plan
              name="Frontend"
              price="Beginner"
              period="/ 2 years"
              subheadline={
                <p>
                  I&apos;m not a React or TypeScript expert — but I use Claude Code as a precision
                  tool to design interfaces. Every layout decision,
                  interaction, and visual detail is mine. The implementation is assisted; the taste
                  isn&apos;t.
                </p>
              }
              features={[
                'HTML',
                'CSS',
                'Claude Code',
                'Component architecture',
                'Responsive design',
              ]}
              cta={
                <SoftButtonLink href="/" size="lg">
                  See my work
                </SoftButtonLink>
              }
            />
            <Plan
              name="Infrastructure"
              price="Capable"
              period="/ daily use"
              subheadline={
                <p>
                  I know my tools well. From local dev to deployment, I move fast without cutting
                  corners or skipping steps.
                </p>
              }
              features={[
                'Git & GitHub',
                'Docker & containerization',
                'Vercel & cloud deployment',
                'pnpm & Turborepo',
                'CI/CD pipelines',
              ]}
              cta={
                <SoftButtonLink href="https://github.com/oliverosto" size="lg">
                  View my GitHub
                </SoftButtonLink>
              }
            />
          </>
        }
      />

      <CallToActionSimpleCentered
        id="cta"
        headline="Want to see these skills in action?"
        subheadline={
          <p>Check out the projects I&apos;ve built, or get in touch.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="mailto:ollieostojic@gmail.com" size="lg">
              Get in touch
            </ButtonLink>
            <PlainButtonLink href="/" size="lg">
              See my work <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
