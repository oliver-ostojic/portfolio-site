'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { AnnouncementBadge } from '@/components/elements/announcement-badge';
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button';

import { Link } from '@/components/elements/link';
import { Logo, LogoGrid } from '@/components/elements/logo-grid';
import { Screenshot } from '@/components/elements/screenshot';
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon';
import { ChevronIcon } from '@/components/icons/chevron-icon';
import { CallToActionSimple } from '@/components/sections/call-to-action-simple';
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion';
import { FeatureThreeColumnWithDemos, Features } from '@/components/sections/features-three-column-with-demos';
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background';
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier';
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph';
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote';
import { LogbookWriterOverlay } from '@/components/logbook-writer-overlay';
import { TutorialChoicePopup } from '@/components/tutorial-choice-popup';
import { LogbookPreviewCard } from '@/components/logbook-preview';

export default function Page() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showTutorialChoice, setShowTutorialChoice] = useState(false);
  const [overlayRoute, setOverlayRoute] = useState<'tutorial' | 'login'>('login');

  // Listen for close message from logbook writer iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CLOSE_LOGBOOK_OVERLAY') {
        setShowOverlay(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        eyebrow={
          <AnnouncementBadge
            href="#"
            text="Check Out My Latest Project"
            cta="Learn more"
            variant="overlay"
            onClick={(e) => { e.preventDefault(); setOverlayRoute('tutorial'); setShowOverlay(true); }}
          />
        }
        headline={<>The Scheduling App That Actually Keeps Your Crew Happy

</>}
        subheadline={
          <p>
            Built for retail stores — ensure full coverage, empower your crew, and generate daily schedules in seconds.
          </p>
        }
        cta={
          <div
            className="flex items-center rounded-full p-1 bg-white/15 inset-ring-1 inset-ring-white/10 cursor-pointer w-fit"
            onClick={() => setShowTutorialChoice(true)}
          >
            <span className="px-3 text-sm/7 text-white font-medium">The Logbook Writer</span>
            <span className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-3 py-1 text-sm/7 font-medium bg-white text-olive-950 hover:bg-olive-100">
              Open
            </span>
          </div>
        }
        demo={<LogbookPreviewCard />}
      />

      {/* Features */}
      <Features
        className="-mt-16"
        id="features"
        headline="Built by Oliver."
        subheadline={
          <p>
            Hi! I'm a recent C.S. graduate working towards a career in full-stack engineering. Here are three more projects I've created along the way.
          </p>
        }
        cta={
          <Link href="#">
            View All <ArrowNarrowRightIcon />
          </Link>
        }
        features={
          <>
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="blue" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1200-top-736.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1200-top-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-736.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1800-top-736.webp"
                    alt=""
                    width={1800}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-left-1200-top-736.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1200-top-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                  />
                </Screenshot>
              }
              headline="Shared Inbox"
              subheadline={<p>Manage support emails together in real time — no more support email hot potato.</p>}
            />
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="purple" placement="top-left">
                  <Image
                    src="/img/screenshots/1-right-1200-bottom-736.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1200-bottom-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-bottom-736.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1800-bottom-736.webp"
                    alt=""
                    width={1800}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-right-1200-bottom-736.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1200-bottom-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                  />
                </Screenshot>
              }
              headline="Collision Detection"
              subheadline={<p>See when a teammate is replying before you hit send. Goodbye duplicate replies.</p>}
            />
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="brown" placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1200-top-736.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1200-top-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-736.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1800-top-736.webp"
                    alt=""
                    width={1800}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                  />
                  <Image
                    src="/img/screenshots/1-right-1200-top-736.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1200-top-736.webp"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                  />
                </Screenshot>
              }
              headline="Inbox Agent"
              subheadline={<p>Get valuable context without having to read through your customer's angry emails.</p>}
            />
          </>
        }
      />
      {/* Tutorial Choice Popup */}
      {showTutorialChoice && (
        <TutorialChoicePopup
          onViewTutorial={() => {
            setOverlayRoute('tutorial');
            setShowTutorialChoice(false);
            setShowOverlay(true);
          }}
          onSkipToSignIn={() => {
            setOverlayRoute('login');
            setShowTutorialChoice(false);
            setShowOverlay(true);
          }}
          onClose={() => setShowTutorialChoice(false)}
        />
      )}

      {/* Logbook Writer Overlay */}
      {showOverlay && <LogbookWriterOverlay onClose={() => setShowOverlay(false)} initialRoute={overlayRoute} />}
    </>
  );
}
