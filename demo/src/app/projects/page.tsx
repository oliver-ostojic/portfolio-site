'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { clsx } from 'clsx/lite'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { Wallpaper } from '@/components/elements/wallpaper'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { LogbookWriterOverlay } from '@/components/logbook-writer-overlay'
import { LogbookArchitectureDiagram } from '@/components/logbook-architecture-diagram'
import { LogbookTimeline } from '@/components/logbook-timeline'
import { TutorialChoicePopup } from '@/components/tutorial-choice-popup'

type UseCase = {
  id: string
  text: string
}

type ProjectSection = {
  headline: string
  body: string[]
  diagramColor: 'green' | 'blue' | 'purple' | 'brown'
  diagramLabel: string
  diagramImage?: string
  useCases?: UseCase[]
}

type Project = {
  id: string
  name: string
  type: string
  year: string
  badge?: string
  color: 'green' | 'blue' | 'purple' | 'brown'
  oneliner: string
  overview: string
  tech: string[]
  highlights: string[]
  sections: ProjectSection[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    id: 'logbook-writer',
    name: 'Logbook Writer',
    type: 'Full-Stack App',
    year: '2026',
    badge: 'Featured',
    color: 'green',
    oneliner: 'Crew scheduling for retail stores — fair, coverage-complete schedules generated in seconds.',
    overview:
      'Retail managers spend hours each week manually constructing shift schedules, balancing coverage requirements against available crew, sudden call outs, and more. The Logbook Writer automates that entirely. It takes a store\'s crew, their often forgotten preferences, and your coverage targets, and hands back a complete weekly schedule — optimized for fairness and business needs simultaneously.',
    link: 'https://github.com/oliver-ostojic/logbook-writer',
    tech: ['Next.js', 'Fastify', 'Python', 'PostgreSQL', 'MILP Solver', 'Turborepo', 'TypeScript'],
    highlights: [
      'Generates full daily schedules in seconds',
      'MILP solver guarantees coverage constraints are met',
      'Crew preference and fairness system',
      'Monorepo: web + API + solver microservice',
      'Real-time logbook with shift grid UI',
      'Analytics dashboard: preference fulfillment, role distribution, hours worked'
    ],
    sections: [
      {
        headline: 'The Problem',
        body: [
          'Every week, retail managers sit down and build a schedule by hand — placing meal breaks, switching crew off tasks, cross-referencing role exemptions, and ensuring peak-hour coverage. It takes hours. And when a different manager takes over, all that institutional knowledge walks out the door: who was assigned what role, why certain decisions were made, what worked last week. There\'s no record, no handoff, and no way to learn from the past.',
          'Employees notice when their preferences are consistently ignored. Scheduling friction is one of the top drivers of retail turnover, yet most scheduling tools just give you a blank grid and wish you luck.',
          'Logbook Writer starts from the other direction: tell it your constraints, your crew, and your coverage goals — and it builds the schedule for you.',
        ],
        diagramColor: 'green',
        diagramLabel: 'Constraint input flow',
      },
      {
        headline: 'The Architecture',
        body: [
          'The system is a Turborepo monorepo with three distinct services that each do one job well. The Next.js frontend handles all crew and schedule management UI. The Fastify API owns the data layer — crew profiles, availability windows, and published schedules stored in PostgreSQL.',
          'The Python solver runs as a separate microservice and communicates with the API over stdin/stdout. Keeping it isolated means it can be swapped, upgraded, or scaled independently. The API never touches the solver logic; it just hands off a JSON payload and waits for a solution.',
          'Once the solver returns, the Logbook Manager takes over. It persists the full assignment set to PostgreSQL, then updates the fairness history — recording how many minutes each crew member was assigned to each tracked role. That history feeds directly into the next solve: the solver reads it, computes a Gini coefficient per role, and boosts the objective weight for crew who have been underrepresented over the lookback window.',
        ],
        diagramColor: 'blue',
        diagramLabel: 'System architecture diagram',
      },
      {
        headline: 'The Solver',
        body: [
          'The core of the system is a CP-SAT constraint programming model built with Google OR-Tools. Each decision variable represents a task assignment — whether a given crew member works a given slot. The model then encodes every constraint: minimum coverage per hour, employee availability, max consecutive task blocks, required hours, and more.',
          'The fairness component is the interesting part. Rather than optimizing purely for coverage, the solver minimizes the variance in preference-satisfaction across the crew. Everyone gets closer to their ideal schedule, not just whoever asked loudest.',
          'For a typical 60-person crew with 8-hour shifts, the solver produces a provably optimal schedule in under 5 seconds.',
        ],
        diagramColor: 'purple',
        diagramLabel: 'MILP objective function breakdown',
      },
    ],
  },
  {
    id: 'find-doc',
    name: 'Find Doc',
    type: 'Group Project',
    year: '2024',
    color: 'blue',
    oneliner: 'A healthcare appointment platform built on a microservice architecture — I designed the system and built the user-facing backend.',
    overview:
      'Find Doc was my senior capstone project: a web app for finding and booking doctors by location, insurance, and specialty. My role was system architect — I defined the microservice architecture, authored the System Requirements Specification and System Design Document, and built the user-service backend end-to-end. Teammates handled a separate provider service and the frontend.',
    link: 'https://github.com/oliver-ostojic/user-service',
    tech: ['Python', 'MongoDB', 'JWT', 'Docker', 'Heroku', 'React', 'Microservices'],
    highlights: [
      'Designed full microservice architecture for the team',
      'Authored SRS and System Design Document',
      'Built user-service: auth, profiles, and appointment booking',
      'JWT-based stateless authentication',
      'Conflict detection for overlapping appointment bookings',
      'Containerized with Docker, deployed to Heroku',
    ],
    sections: [
      {
        headline: 'My Role: System Architect',
        body: [
          'Before a line of code was written, I defined how the system would be structured. I produced a System Requirements Specification that captured every functional and non-functional requirement, and a System Design Document that laid out the microservice boundaries, inter-service contracts, and data ownership.',
        ],
        diagramColor: 'blue',
        diagramLabel: 'Use case diagram',
        diagramImage: '/img/find-doc-use-case-diagram.png',
        useCases: [
          { id: 'UC-001', text: 'Users can search for providers based on a specialty.' },
          { id: 'UC-002', text: 'Users can search for providers within a specified radius around their location.' },
          { id: 'UC-003', text: 'Users can search for providers covered by their insurance network.' },
          { id: 'UC-004', text: 'Users can create, read, update, and delete appointments with providers.' },
          { id: 'UC-005', text: 'Users can submit and view a provider\'s overall rating and reviews.' },
          { id: 'UC-006', text: 'Users can interact with a chatbot to help find a specialist based on their symptoms or needs.' },
        ],
      },
      {
        headline: 'The User Service',
        body: [
          'I built the user-service in Python with MongoDB as the persistence layer. It owns three domains: authentication (registration, login, JWT issuance and validation), user profiles (CRUD with encrypted password storage), and appointment operations (booking, cancellation, and conflict resolution for overlapping slots).',
          'Keeping auth and booking inside one service was a deliberate choice — user identity and appointment ownership are tightly coupled, and separating them would have introduced cross-service joins with no real benefit at this scale.',
        ],
        diagramColor: 'green',
        diagramLabel: 'User service module breakdown',
        diagramImage: '/img/find-doc-classes-diagram.png',
      },
      {
        headline: 'Auth and Deployment',
        body: [
          'Authentication is stateless via JWT — the token carries enough context that any service can validate a request without calling back to the user-service. That keeps the provider service decoupled and makes the system easier to scale horizontally.',
          'Both services are containerized with Docker and deployed independently to Heroku. The containerization boundary enforces the architecture: each service owns its own database, its own dependencies, and its own deploy lifecycle.',
        ],
        diagramColor: 'purple',
        diagramLabel: 'Auth flow and deployment topology',
        diagramImage: '/img/find-doc-interfaces-diagram.png',
      },
    ],
  },
  {
    id: 'fitness-trainer',
    name: 'Fitness Trainer',
    type: 'iOS App Prototype',
    year: '2024',
    color: 'purple',
    oneliner: 'An iOS workout app prototype grounded in sports science — personalized training loads calculated from your actual strength.',
    overview:
      'An iOS app prototype built in Swift and SwiftUI that applies research-backed principles of muscle hypertrophy and progressive overload to generate personalized workout recommendations. The app calculates a user\'s one-rep max from their logged performance history and uses it to prescribe optimal training loads — adjusted for whether they\'re a novice, intermediate, or advanced lifter.',
    link: 'https://github.com/oliver-ostojic/ai-trainer',
    tech: ['Swift', 'SwiftUI', 'CoreData', 'CloudKit', 'CoreML', 'Xcode'],
    highlights: [
      '1RM calculation from logged performance history',
      'Load recommendations calibrated to novice / intermediate / advanced',
      'Science-backed 6–12 rep hypertrophy range with progressive overload',
      'CoreML-driven personalized session suggestions',
      'CoreData persistence with CloudKit cross-device sync',
      'Workout planning with structured muscle-group days and reminders',
    ],
    sections: [
      {
        headline: 'Behind the Science',
        body: [
          'The app is built around two well-established principles from resistance training research. First, muscle hypertrophy is most efficiently driven in the 6–12 rep range — this is where mechanical tension and metabolic stress peak simultaneously. Second, progressive overload: the body only adapts when the training stimulus increases over time.',
          'Rather than hard-coding a generic program, the app operationalizes these principles dynamically. Every recommendation is derived from the user\'s own data, not a one-size-fits-all template.',
        ],
        diagramColor: 'purple',
        diagramLabel: 'Rep range and hypertrophy research',
        diagramImage: '/img/fitness-trainer-home-page.png',
      },
      {
        headline: 'The 1RM Engine',
        body: [
          'The core of the personalization is the one-rep max — the maximum weight a user can lift for a single rep. The app estimates this continuously from logged sets using established formulas, so users never need to perform an actual max-effort test.',
          'Training loads are then prescribed as percentages of that 1RM, scaled to experience level. A novice gets 60–70% 1RM with 1–3 sets of 8–12 reps. As the user progresses, the targets shift. Because the 1RM updates with each session, recommendations stay calibrated to current strength rather than drifting stale.',
        ],
        diagramColor: 'blue',
        diagramLabel: '1RM calculation and load prescription',
        diagramImage: '/img/fitness-trainer-data-entry-page.png',
      },
      {
        headline: 'The Stack',
        body: [
          'The app is built entirely with Apple\'s native frameworks. SwiftUI handles the UI, CoreData persists workout history locally, and CloudKit syncs that data across devices without a custom backend. CoreML powers the intelligent session suggestions, analyzing logged performance to surface what to train next and at what load.',
        ],
        diagramColor: 'brown',
        diagramLabel: 'App architecture and data flow',
        diagramImage: '/img/fitness-trainer-class-diagram.png',
      },
    ],
  },
  {
    id: 'animal-match',
    name: 'Animal Match',
    type: 'First Web App',
    year: '2024',
    color: 'brown',
    oneliner: 'My first web app — an educational animal quiz that matches you to a species based on your location, diet, and lifestyle.',
    overview:
      'Animal Match was my introduction to web development. Users answer questions about where they live, what they eat, and how they go about their day — the app matches them to an animal and surfaces fun, educational facts about their result. Built on a client-server architecture with a Python backend and an HTML/CSS frontend.',
    link: 'https://github.com/oliver-ostojic/animal-match',
    tech: ['Python', 'HTML', 'CSS'],
    highlights: [
      'Quiz driven by location, diet, and lifestyle questions',
      'Server-side matching logic in Python',
      'Client-server architecture: Quiz-service + API request handler',
      'Educational animal facts on the results screen',
      'Pure HTML/CSS frontend — no framework',
    ],
    sections: [
      {
        headline: 'Where It Started',
        body: [
          'Animal Match was the project that taught me how the web works. I wanted to build something that felt like a real product — interactive, with a result that felt personal — so I landed on a quiz that tells you which animal you are.',
          'The concept was simple enough to finish, interesting enough to care about, and just complex enough to force me to learn routing, request handling, and server-side logic from scratch.',
        ],
        diagramColor: 'brown',
        diagramLabel: 'Quiz flow diagram',
      },
      {
        headline: 'The Architecture',
        body: [
          'The app follows a client-server split. The frontend is plain HTML and CSS — no framework, no build step. The backend is Python, organized into a Quiz-service that owns the matching logic and an API request handler that connects the two sides.',
          'Building without a framework meant I had to understand what frameworks actually do: routing, parsing request data, sending responses — each wired up manually.',
        ],
        diagramColor: 'green',
        diagramLabel: 'Client-server architecture',
        diagramImage: '/img/animal-match-classes-diagram.png',
      },
      {
        headline: 'The Matching',
        body: [
          'Users answer questions across three categories: location (where you live and what habitat feels like home), diet (what you eat and how you source food), and lifestyle (activity level, social habits, daily rhythms). The quiz-service maps those answers to an animal and returns a result with facts about the match.',
          'It\'s not a complex algorithm — but designing the question set to produce results that feel accurate and surprising was the most interesting part of the project.',
        ],
        diagramColor: 'purple',
        diagramLabel: 'Question categories and matching',
      },
    ],
  },
]

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full bg-olive-950/10 px-3 py-0.5 text-xs/6 font-medium text-olive-950 dark:bg-white/10 dark:text-white">
      {label}
    </span>
  )
}

function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: Project
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex flex-col gap-5 rounded-xl p-6 text-left transition-all duration-200',
        isActive
          ? 'bg-olive-950 dark:bg-white/15 ring-1 ring-olive-950/20 dark:ring-white/20'
          : 'bg-olive-950/2.5 hover:bg-olive-950/5 dark:bg-white/5 dark:hover:bg-white/10',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className={clsx(
              'text-xs/6 font-medium',
              isActive ? 'text-white/60 dark:text-white/60' : 'text-olive-500 dark:text-olive-500',
            )}
          >
            {project.type} · {project.year}
          </p>
          <h3
            className={clsx(
              'text-xl/8 tracking-tight',
              isActive ? 'text-white' : 'text-olive-950 dark:text-white',
            )}
          >
            {project.name}
          </h3>
        </div>
        {project.badge && (
          <span
            className={clsx(
              'shrink-0 rounded-full px-2 text-xs/6 font-medium',
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-olive-950/10 text-olive-950 dark:bg-white/10 dark:text-white',
            )}
          >
            {project.badge}
          </span>
        )}
      </div>

      <p
        className={clsx(
          'text-sm/6',
          isActive ? 'text-white/75' : 'text-olive-700 dark:text-olive-400',
        )}
      >
        {project.oneliner}
      </p>

      <p
        className={clsx(
          'mt-auto flex items-center gap-1 text-sm/7 font-medium',
          isActive ? 'text-white' : 'text-olive-950 dark:text-white',
        )}
      >
        {isActive ? 'Collapse' : 'Explore'}
        <ChevronIcon
          className={clsx('transition-transform duration-200', isActive && 'rotate-90')}
        />
      </p>
    </button>
  )
}

function ProjectDetail({
  project,
  onClose,
  onOpenDemo,
}: {
  project: Project
  onClose: () => void
  onOpenDemo: () => void
}) {
  return (
    <section className="border-t border-olive-950/10 py-16 dark:border-white/10">
      <Container className="flex flex-col gap-16">

        {/* Logbook Writer: two-column layout starting from the title */}
        {project.id === 'logbook-writer' && (() => {
          const [problem, architecture, solver] = project.sections
          return (
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[11fr_9fr]">
              {/* Left: header + sections + diagram + buttons */}
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <Eyebrow>{project.type} · {project.year}</Eyebrow>
                      <h2 className="font-display text-4xl tracking-tight text-olive-950 dark:text-white">
                        {project.name}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full bg-olive-950/5 px-4 py-2 text-sm/7 font-medium text-olive-700 hover:bg-olive-950/10 dark:bg-white/5 dark:text-olive-400 dark:hover:bg-white/10"
                    >
                      Close ↑
                    </button>
                  </div>

                  <Text className="max-w-3xl text-pretty text-base/7">{project.overview}</Text>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <TechChip key={t} label={t} />
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-olive-950/5 px-4 py-1 text-sm/7 font-medium text-olive-700 hover:bg-olive-950/10 dark:bg-white/5 dark:text-olive-400 dark:hover:bg-white/10"
                      >
                        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                        View on GitHub
                      </a>
                    )}
                  </div>

                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm/6 text-olive-700 dark:text-olive-400">
                        <CheckmarkIcon className="mt-0.5 h-4 w-4 shrink-0 stroke-olive-950 dark:stroke-white" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section cards */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 rounded-xl bg-olive-950/5 p-6 dark:bg-white/5">
                    <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">{problem.headline}</h3>
                    <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                      {problem.body.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl bg-olive-950/5 p-6 dark:bg-white/5">
                    <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">{solver.headline}</h3>
                    <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                      {solver.body.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl bg-olive-950/5 p-6 dark:bg-white/5">
                    <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">{architecture.headline}</h3>
                    <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                      {architecture.body.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                  </div>
                  <img src="/img/logbook-writer-arch-diagram.png" alt={architecture.diagramLabel} className="block w-full rounded-xl object-contain" />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center justify-center rounded-full bg-olive-950/5 px-5 py-2.5 text-sm/7 font-medium text-olive-700 hover:bg-olive-950/10 dark:bg-white/5 dark:text-olive-400 dark:hover:bg-white/10"
                  >
                    Open live demo
                  </button>
                  <PlainButtonLink href="https://github.com/oliverosto" size="lg">
                    View on GitHub <ChevronIcon />
                  </PlainButtonLink>
                </div>
              </div>

              {/* Right: timeline, sticky so it tracks alongside all the left-column content */}
              <Wallpaper color="purple" className="rounded-xl p-6 sticky top-8">
                <LogbookTimeline />
              </Wallpaper>
            </div>
          )
        })()}

        {/* Generic header — all projects except logbook-writer */}
        {project.id !== 'logbook-writer' && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-col gap-3">
                <Eyebrow>{project.type} · {project.year}</Eyebrow>
                <h2 className="font-display text-4xl tracking-tight text-olive-950 dark:text-white">
                  {project.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-olive-950/5 px-4 py-2 text-sm/7 font-medium text-olive-700 hover:bg-olive-950/10 dark:bg-white/5 dark:text-olive-400 dark:hover:bg-white/10"
              >
                Close ↑
              </button>
            </div>

            <Text className="max-w-3xl text-pretty text-base/7">{project.overview}</Text>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-olive-950/5 px-4 py-1 text-sm/7 font-medium text-olive-700 hover:bg-olive-950/10 dark:bg-white/5 dark:text-olive-400 dark:hover:bg-white/10"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                  View on GitHub
                </a>
              )}
            </div>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm/6 text-olive-700 dark:text-olive-400">
                  <CheckmarkIcon className="mt-0.5 h-4 w-4 shrink-0 stroke-olive-950 dark:stroke-white" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fitness Trainer custom layout */}
        {project.id === 'fitness-trainer' && (() => {
          const [science, engine, stack] = project.sections
          return (
            <div className="flex flex-col gap-8">
              {/* Row 1: Behind the Science (text) | both iPhones side by side */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">{science.headline}</h3>
                  <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                    {science.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
                <Wallpaper color="purple" className="rounded-xl p-6">
                  <div className="flex flex-row items-center justify-center gap-4">
                    <img src="/img/fitness-trainer-home-page.png" alt="Home screen" className="w-[38%] rounded-lg object-contain" />
                    <img src="/img/fitness-trainer-data-entry-page.png" alt="Data entry screen" className="w-[38%] rounded-lg object-contain" />
                  </div>
                </Wallpaper>
              </div>

              {/* Row 2: two cards side by side */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3 rounded-2xl bg-olive-950/5 p-6 dark:bg-white/5">
                  <h3 className="text-xl/7 tracking-tight text-olive-950 dark:text-white">{engine.headline}</h3>
                  <div className="flex flex-col gap-3 text-sm/7 text-olive-700 dark:text-olive-400">
                    {engine.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl bg-olive-950/5 p-6 dark:bg-white/5">
                  <h3 className="text-xl/7 tracking-tight text-olive-950 dark:text-white">{stack.headline}</h3>
                  <div className="flex flex-col gap-3 text-sm/7 text-olive-700 dark:text-olive-400">
                    {stack.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Animal Match custom layout */}
        {project.id === 'animal-match' && (() => {
          const [started, architecture, matching] = project.sections
          return (
            <div className="flex flex-col gap-8">
              {/* Row 1: two grey cards side by side */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3 rounded-2xl bg-olive-950/5 p-6 dark:bg-white/5">
                  <h3 className="text-xl/7 tracking-tight text-olive-950 dark:text-white">{started.headline}</h3>
                  <div className="flex flex-col gap-3 text-sm/7 text-olive-700 dark:text-olive-400">
                    {started.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl bg-olive-950/5 p-6 dark:bg-white/5">
                  <h3 className="text-xl/7 tracking-tight text-olive-950 dark:text-white">{architecture.headline}</h3>
                  <div className="flex flex-col gap-3 text-sm/7 text-olive-700 dark:text-olive-400">
                    {architecture.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </div>

              {/* Row 2: The Matching text | classes diagram in purple frame */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">{matching.headline}</h3>
                  <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                    {matching.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
                <Wallpaper color="purple" className="rounded-xl p-4">
                  <img src={architecture.diagramImage} alt={architecture.diagramLabel} className="w-full rounded-lg object-contain" />
                </Wallpaper>
              </div>
            </div>
          )
        })()}

        {/* Alternating sections */}
        {project.id !== 'fitness-trainer' && project.id !== 'animal-match' && project.id !== 'logbook-writer' && project.sections.map((section, i) => (
          <div
            key={section.headline}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
          >
            {i % 2 === 0 ? (
              <>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">
                    {section.headline}
                  </h3>
                  <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                    {section.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                  {section.useCases && (
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {section.useCases.map(({ id, text }) => (
                        <li key={id} className="flex flex-col gap-1 rounded-xl bg-olive-950/5 p-3 dark:bg-white/5">
                          <span className="text-xs font-semibold tracking-wide text-olive-500 dark:text-olive-400">{id}</span>
                          <p className="text-sm/6 text-olive-700 dark:text-olive-300">{text}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {section.diagramImage ? (
                  <Wallpaper color={section.diagramColor} className="flex items-center justify-center rounded-xl p-4">
                    <img src={section.diagramImage} alt={section.diagramLabel} className="w-full rounded-lg object-contain" />
                  </Wallpaper>
                ) : (
                  <Wallpaper color={section.diagramColor} className="flex min-h-64 items-end rounded-xl p-6">
                    <span className="text-xs/6 font-medium text-white/60">{section.diagramLabel}</span>
                  </Wallpaper>
                )}
              </>
            ) : (
              <>
                {section.diagramImage ? (
                  <Wallpaper color={section.diagramColor} className="flex items-center justify-center rounded-xl p-4">
                    <img src={section.diagramImage} alt={section.diagramLabel} className="w-full rounded-lg object-contain" />
                  </Wallpaper>
                ) : (
                  <Wallpaper color={section.diagramColor} className="flex min-h-64 items-end rounded-xl p-6">
                    <span className="text-xs/6 font-medium text-white/60">{section.diagramLabel}</span>
                  </Wallpaper>
                )}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl/8 tracking-tight text-olive-950 dark:text-white">
                    {section.headline}
                  </h3>
                  <div className="flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">
                    {section.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </Container>
    </section>
  )
}

function ProjectsContent() {
  const searchParams = useSearchParams()
  const [activeId, setActiveId] = useState<string | null>(
    searchParams.get('project') ?? 'logbook-writer',
  )
  const detailRef = useRef<HTMLDivElement>(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showTutorialChoice, setShowTutorialChoice] = useState(false)
  const [overlayRoute, setOverlayRoute] = useState<'tutorial' | 'login'>('login')

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CLOSE_LOGBOOK_OVERLAY') {
        setShowOverlay(false)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  function selectProject(id: string) {
    if (activeId === id) {
      setActiveId(null)
      return
    }
    setActiveId(id)
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null

  return (
    <>
      <section className="py-16">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-6">
            <Eyebrow>Projects</Eyebrow>
            <Heading>Things I&apos;ve built.</Heading>
            <Text size="lg" className="max-w-xl text-center text-pretty">
              <p>
                Four projects across full-stack engineering, optimization, and data. Click any card
                to read the full breakdown.
              </p>
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onClick={() => selectProject(project.id)}
              />
            ))}
          </div>
        </Container>
      </section>

      <div ref={detailRef}>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={() => setActiveId(null)}
            onOpenDemo={() => setShowTutorialChoice(true)}
          />
        )}
      </div>

      {showTutorialChoice && (
        <TutorialChoicePopup
          onViewTutorial={() => {
            setOverlayRoute('tutorial')
            setShowTutorialChoice(false)
            setShowOverlay(true)
          }}
          onSkipToSignIn={() => {
            setOverlayRoute('login')
            setShowTutorialChoice(false)
            setShowOverlay(true)
          }}
          onClose={() => setShowTutorialChoice(false)}
        />
      )}

      {showOverlay && <LogbookWriterOverlay onClose={() => setShowOverlay(false)} initialRoute={overlayRoute} />}

      <CallToActionSimpleCentered
        id="cta"
        headline="Interested in what I can build?"
        subheadline={<p>These projects are just a sample. Get in touch and let&apos;s talk about yours.</p>}
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="mailto:ollieostojic@gmail.com" size="lg">
              Get in touch
            </ButtonLink>
            <PlainButtonLink href="/about" size="lg">
              About me <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}

export default function Page() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  )
}
