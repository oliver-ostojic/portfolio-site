'use client'

type TimelinePhase = {
  phase: number
  title: string
  dates: string
  summary: string
}

const PHASES: TimelinePhase[] = [
  {
    phase: 0,
    title: 'Requirements Engineering',
    dates: 'Oct 2025',
    summary: 'Interviewed Trader Joe\'s managers to understand scheduling pain points and processes, then produced formal requirements documentation. Conducted interviews among retail crew to understand schedule preferences.',
  },
  {
    phase: 1,
    title: 'Solver 1.0: My Trader Joe\'s ',
    dates: 'Nov 6–13, 2025',
    summary: 'Designed the Prisma schema and implemented the first working solver with store-specific constants — slot sizes, shift types, and role enums baked in.',
  },
  {
    phase: 2,
    title: 'Solver 2.0: Any Trader Joe\'s Store',
    dates: 'Nov 15–16, 2025',
    summary: 'Generalized the schema to any TJ location with a multi-role junction table. The solver gained store-awareness through variable slot sizes, and store hours. The previously monolithic solver was modularized. CI pipeline was added with GitHub Actions running integration tests.',
  },
  {
    phase: 3,
    title: 'Solver 3.0: Any Store, Metadata-Driven',
    dates: 'Nov 18 – Dec 2025',
    summary: 'Rewrote the solver as metadata-driven: roles became DB records, and a dynamic TimeGrid split the workday into slots — enabling variable-length task blocks as decision variables. Extracted role constraints from role columns into a standalone RoleRule table, with 18 constraint appliers, each attached to any role at runtime.',
  },
  {
    phase: 4,
    title: 'Preference-Fairness Weight Tuning',
    dates: 'Dec 2025',
    summary: 'Tested how to balance high preference satisfaction against high fairness in the solver objective. Found an optimal fairness boost weight of 740 — too high collapsed satisfaction, too low broke fairness convergence.',
  },
  {
    phase: 5,
    title: 'Training Data Collector',
    dates: 'Dec 2025',
    summary: 'Every successful solve writes a full input/output record — shifts, roles, preferences, and assignments — to a JSONL file as a foundation for future ML-based schedule learning.',
  },
  {
    phase: 6,
    title: 'Preference Evaluator',
    dates: 'Jan 2026',
    summary: 'After each logbook save, scores every crew member\'s rules as binary met/not-met, aggregating to eligiblePreferences, preferencesMet, and avgSatisfaction stored as a LogPreferenceMetadata row.',
  },
  {
    phase: 7,
    title: 'Re-run Change Detector',
    dates: 'Jan 2026',
    summary: 'A SHA-256 hash over shifts, coverage windows, and crew quotas is stored on each logbook — on re-run, if the hash matches the existing DRAFT it\'s reused in-place.',
  },
  {
    phase: 8,
    title: 'Role-Fairness Service',
    dates: 'Jan 2026',
    summary: 'Tracks daily minutes per crew per role, computing a Gini coefficient normalized by days worked so part-time crew aren\'t penalized — mapping to a 0–100 fairness index and letter grade per role.',
  },
  {
    phase: 9,
    title: 'Fairness Dashboard v1',
    dates: 'Jan 2026',
    summary: 'Shipped a live fairness dashboard with role heatmaps, box plots, and sparklines wired to logbook data, alongside the glass design system applied across all list views and the constraints wizard.',
  },
  {
    phase: 10,
    title: 'Auth & Settings',
    dates: 'Jan 2026',
    summary: 'Added authentication, RBAC, and a settings UI where managers can generate invite codes for multi-user access.',
  },
  {
    phase: 11,
    title: 'Dashboard Overhaul',
    dates: 'Feb 2026',
    summary: 'Rebuilt all three fairness charts as custom SVG components.',
  },
  {
    phase: 12,
    title: 'Tutorial Mode',
    dates: 'Apr 2026',
    summary: 'Built a React portal-based tutorial system that overlays step-by-step guidance on the live UI, highlighting active elements.',
  },
]

const DOT_SIZE = 14
const BORDER_WIDTH = 4
const GAP = 20

export function LogbookTimeline() {
  return (
    <>
      <style>{`
        .tl-outer {
          padding: 12px 0;
        }
        .tl-card {
          position: relative;
          max-width: 100%;
        }
        .tl-card:nth-child(odd) {
          padding: ${GAP}px 0 ${GAP}px ${GAP + BORDER_WIDTH}px;
        }
        .tl-card:nth-child(even) {
          padding: ${GAP}px ${GAP + BORDER_WIDTH}px ${GAP}px 0;
        }
        .tl-card::before {
          content: "";
          position: absolute;
          width: 50%;
          border: solid rgba(255,255,255,0.4);
        }
        .tl-card:nth-child(odd)::before {
          left: 0;
          top: -4.5px;
          bottom: -4.5px;
          border-width: ${BORDER_WIDTH}px 0 ${BORDER_WIDTH}px ${BORDER_WIDTH}px;
          border-radius: 40px 0 0 40px;
        }
        .tl-card:nth-child(even)::before {
          right: 0;
          top: 0;
          bottom: 0;
          border-width: ${BORDER_WIDTH}px ${BORDER_WIDTH}px ${BORDER_WIDTH}px 0;
          border-radius: 0 40px 40px 0;
        }
        .tl-card:first-child::before {
          border-top: 0;
          border-top-left-radius: 0;
        }
        .tl-card:last-child:nth-child(odd)::before {
          border-bottom: 0;
          border-bottom-left-radius: 0;
        }
        .tl-card:last-child:nth-child(even)::before {
          border-bottom: 0;
          border-bottom-right-radius: 0;
        }
        .tl-card:nth-child(even) .tl-title {
          text-align: right;
        }
        .tl-card:nth-child(even) .tl-summary {
          text-align: right;
        }
      `}</style>

      <div className="tl-outer">
        {PHASES.map((item, index) => {
          const isOdd = index % 2 === 0
          return (
            <div key={item.phase} className="tl-card">
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: isOdd ? 'translate(-50%, -50%)' : 'translate(50%, -50%)',
                  [isOdd ? 'left' : 'right']: `${BORDER_WIDTH / 2}px`,
                  width: `${DOT_SIZE}px`,
                  height: `${DOT_SIZE}px`,
                  borderRadius: '999px',
                  background: 'white',
                  border: '2.5px solid rgba(255,255,255,0.45)',
                  zIndex: 1,
                }}
              />

              {/* Outer translucent card */}
              <div
                className="rounded-2xl p-2"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                {/* Date pill */}
                <div style={{ display: 'flex', justifyContent: isOdd ? 'flex-start' : 'flex-end', marginBottom: '8px' }}>
                  <span style={{
                    background: 'rgba(0,0,0,0.45)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}>{item.dates}</span>
                </div>

                {/* Inner white card */}
                <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.88)' }}>
                  <p className="tl-title" style={{ color: 'rgba(0,0,0,0.85)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2px' }}>
                    {item.title}
                  </p>
                  <p className="tl-summary" style={{ color: 'rgba(0,0,0,0.45)', fontSize: '0.8rem', lineHeight: '1.4' }}>
                    {item.summary}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
