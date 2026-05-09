'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnnouncementBadge } from '@/components/elements/announcement-badge';
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button';

import NextLink from 'next/link'
import { Link } from '@/components/elements/link';
import { Logo, LogoGrid } from '@/components/elements/logo-grid';
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
import { Wallpaper } from '@/components/elements/wallpaper';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMount = useRef(true);

  const [showOverlay, setShowOverlay] = useState(
    searchParams.get('overlay') === 'true',
  );
  const [showTutorialChoice, setShowTutorialChoice] = useState(false);
  const [overlayRoute, setOverlayRoute] = useState<'tutorial' | 'login'>(
    (searchParams.get('route') as 'tutorial' | 'login') ?? 'login',
  );
  const [iframePath, setIframePath] = useState<string | null>(
    searchParams.get('iframePath'),
  );

  // Sync overlay state → URL params (skip initial mount to avoid redundant navigation)
  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const params = new URLSearchParams(window.location.search);
    if (showOverlay) {
      params.set('overlay', 'true');
      params.set('route', overlayRoute);
      if (iframePath) params.set('iframePath', iframePath);
      else params.delete('iframePath');
    } else {
      params.delete('overlay');
      params.delete('route');
      params.delete('iframePath');
    }
    const search = params.toString();
    router.replace(search ? `?${search}` : '/', { scroll: false });
  }, [showOverlay, overlayRoute, iframePath]);

  // Listen for messages from logbook writer iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CLOSE_LOGBOOK_OVERLAY') {
        setShowOverlay(false);
        setIframePath(null);
      } else if (event.data?.type === 'LOGBOOK_ROUTE_CHANGE') {
        setIframePath(event.data.route as string);
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
          <Link href="/projects">
            View All <ArrowNarrowRightIcon />
          </Link>
        }
        features={
          <>
            <NextLink href="/projects?project=find-doc" className="block">
              <FeatureThreeColumnWithDemos
                demo={<Wallpaper color="blue" className="h-16" />}
                headline="Find Doc"
                subheadline={<p>A doctor-finder that matches you by location, insurance, and specialty. Book in seconds.</p>}
              />
            </NextLink>
            <NextLink href="/projects?project=fitness-trainer" className="block">
              <FeatureThreeColumnWithDemos
                reverse
                demo={<Wallpaper color="purple" className="h-16" />}
                headline="Fitness Trainer"
                subheadline={<p>A workout tracker that logs your lifts, analyzes your progress, and recommends what to do next.</p>}
              />
            </NextLink>
            <NextLink href="/projects?project=animal-match" className="block">
              <FeatureThreeColumnWithDemos
                demo={<Wallpaper color="brown" className="h-16" />}
                headline="Animal Match"
                subheadline={<p>A personality quiz that matches you to an animal based on your lifestyle, diet, and location.</p>}
              />
            </NextLink>
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
      {showOverlay && (
        <LogbookWriterOverlay
          onClose={() => { setShowOverlay(false); setIframePath(null); }}
          initialRoute={overlayRoute}
          iframePath={iframePath}
        />
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
