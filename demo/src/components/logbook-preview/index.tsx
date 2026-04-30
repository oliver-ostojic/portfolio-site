'use client';

import React from 'react';
import { aiGlassLightBorderStyle, aiGlassLightContentStyle } from '@/components/ui/ai-glass';
import { NavStatsCard, NavDivider } from './NavStatsCard';
import Stats from './Stats';
import LogTable from './LogTable';
import type { LogbookMetadata, PreferenceMetadata } from './types';

const metadata: LogbookMetadata = {
  solver: { status: 'OPTIMAL', runtimeMs: 33687, numCrew: 81, numAssignments: 773 },
  schedule: { totalAssignments: 773, crewScheduled: 81, totalHours: 642 },
  violations: [],
};

const preferenceMetadata: PreferenceMetadata = {
  eligiblePreferences: 307,
  preferencesMet: 245,
  percentMet: 79.80,
  avgSatisfaction: 79.80,
  eligibleCrew: 71,
  avgSatisfactionPerCrew: 80.86,
  fairnessIndex: 87.68,
  fairnessGrade: 'A-',
};

// 6 crew starting at 11 AM (shift 11:00–19:00), full-day assignments
const assignments = [
  { id: 'a01', crewId: '1283498', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a02', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T11:30:00.000Z' },
  { id: 'a03', crewId: '1347636', roleId: 35, roleCode: 'SL',     startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a04', crewId: '1299316', roleId: 29, roleCode: 'P_HELM', startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T11:30:00.000Z' },
  { id: 'a05', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a06', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:00:00.000Z', endTime: '2026-05-28T11:30:00.000Z' },
  { id: 'a07', crewId: '1364668', roleId: 29, roleCode: 'P_HELM', startTime: '2026-05-28T11:30:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a08', crewId: '1299316', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:30:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a09', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T11:30:00.000Z', endTime: '2026-05-28T12:00:00.000Z' },
  { id: 'a10', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a11', crewId: '1299316', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a12', crewId: '1283498', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T12:30:00.000Z' },
  { id: 'a13', crewId: '1269090', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a14', crewId: '1347636', roleId: 29, roleCode: 'P_HELM', startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T12:30:00.000Z' },
  { id: 'a15', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T12:00:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a16', crewId: '1283498', roleId: 29, roleCode: 'P_HELM', startTime: '2026-05-28T12:30:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a17', crewId: '1347636', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T12:30:00.000Z', endTime: '2026-05-28T13:00:00.000Z' },
  { id: 'a18', crewId: '1347636', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a19', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a20', crewId: '1299316', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a21', crewId: '1283498', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a22', crewId: '1364668', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a23', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T13:00:00.000Z', endTime: '2026-05-28T14:00:00.000Z' },
  { id: 'a24', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a25', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a26', crewId: '1364668', roleId: 38, roleCode: 'DEMO',   startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a27', crewId: '1283498', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a28', crewId: '1299316', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a29', crewId: '1347636', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T14:00:00.000Z', endTime: '2026-05-28T14:30:00.000Z' },
  { id: 'a30', crewId: '1347636', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T14:30:00.000Z', endTime: '2026-05-28T15:00:00.000Z' },
  { id: 'a31', crewId: '1364668', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T15:30:00.000Z' },
  { id: 'a32', crewId: '1269089', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T15:30:00.000Z' },
  { id: 'a33', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T15:30:00.000Z' },
  { id: 'a34', crewId: '1283498', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T15:30:00.000Z' },
  { id: 'a35', crewId: '1299316', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T15:30:00.000Z' },
  { id: 'a36', crewId: '1347636', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T15:00:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a37', crewId: '1283498', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T15:30:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a38', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T15:30:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a39', crewId: '1299316', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T15:30:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a40', crewId: '1269090', roleId: 36, roleCode: 'BRK',    startTime: '2026-05-28T15:30:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a41', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T15:30:00.000Z', endTime: '2026-05-28T16:00:00.000Z' },
  { id: 'a42', crewId: '1299316', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a43', crewId: '1269089', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a44', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a45', crewId: '1347636', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a46', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a47', crewId: '1283498', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T16:00:00.000Z', endTime: '2026-05-28T17:00:00.000Z' },
  { id: 'a48', crewId: '1347636', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a49', crewId: '1299316', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a50', crewId: '1283498', roleId: 35, roleCode: 'SL',     startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T17:30:00.000Z' },
  { id: 'a51', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a52', crewId: '1269090', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a53', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T17:00:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a54', crewId: '1283498', roleId: 35, roleCode: 'SL',     startTime: '2026-05-28T17:30:00.000Z', endTime: '2026-05-28T18:00:00.000Z' },
  { id: 'a55', crewId: '1299316', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
  { id: 'a56', crewId: '1283498', roleId: 35, roleCode: 'SL',     startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T18:30:00.000Z' },
  { id: 'a57', crewId: '1364668', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
  { id: 'a58', crewId: '1347636', roleId: 30, roleCode: 'REG',    startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
  { id: 'a59', crewId: '1269090', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T18:30:00.000Z' },
  { id: 'a60', crewId: '1269089', roleId: 33, roleCode: 'PROD',   startTime: '2026-05-28T18:00:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
  { id: 'a61', crewId: '1283498', roleId: 35, roleCode: 'SL',     startTime: '2026-05-28T18:30:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
  { id: 'a62', crewId: '1269090', roleId: 29, roleCode: 'P_HELM', startTime: '2026-05-28T18:30:00.000Z', endTime: '2026-05-28T19:00:00.000Z' },
];

const crew = [
  { id: '1283498', name: 'Adam Levi' },
  { id: '1364668', name: 'Smith Jean Jacques' },
  { id: '1347636', name: 'Ofelia Aguirre' },
  { id: '1299316', name: 'Tori Borrowdale' },
  { id: '1269089', name: 'Adrian Pena' },
  { id: '1269090', name: 'Oliver Ostojic' },
];

const shifts = [
  { id: 's1', crewId: '1283498', startMinutes: 660, endMinutes: 1140 },
  { id: 's2', crewId: '1364668', startMinutes: 660, endMinutes: 1140 },
  { id: 's3', crewId: '1347636', startMinutes: 660, endMinutes: 1140 },
  { id: 's4', crewId: '1299316', startMinutes: 660, endMinutes: 1140 },
  { id: 's5', crewId: '1269089', startMinutes: 660, endMinutes: 1140 },
  { id: 's6', crewId: '1269090', startMinutes: 660, endMinutes: 1140 },
];

const roles = [
  { id: 30, code: 'REG',    displayName: 'Register',       blockSize: 2 },
  { id: 33, code: 'PROD',   displayName: 'Product',        blockSize: 1 },
  { id: 35, code: 'SL',     displayName: 'Section Leader', blockSize: 2 },
  { id: 38, code: 'DEMO',   displayName: 'Food Demo',      blockSize: 2 },
  { id: 37, code: 'W_DMO',  displayName: 'Wine Demo',      blockSize: 2 },
  { id: 29, code: 'P_HELM', displayName: 'Parking Helms',  blockSize: 1 },
  { id: 36, code: 'BRK',    displayName: 'Break',          blockSize: 1 },
];

const BRAND_COLOR = 'hsl(0, 84%, 60%)';
const BRAND_COLOR_LIGHT = 'hsla(0, 84%, 60%, 0.12)';


const NAV_ITEMS = ['Home', 'System Health', 'Settings', 'Account'];

const PROGRESS_STEPS = [
  { id: '01', name: 'Crew',        description: "Choose who's working.", status: 'complete' as const },
  { id: '02', name: 'Constraints', description: 'Define rules and limits.',  status: 'complete' as const },
  { id: '03', name: 'Preview',     description: 'Inspect drafted schedules.', status: 'current' as const },
  { id: '04', name: 'Publish',     description: 'Download logbook.',         status: 'upcoming' as const },
];

function CheckSVG() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ width: 20, height: 20 }}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export function LogbookPreviewCard() {
  return (
    <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
      <div className="ai-glass-border rounded-[1.5rem]" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
        <div className="rounded-[1.5rem] flex flex-col gap-6" style={{ ...aiGlassLightContentStyle('1.5rem', 0.6), padding: '24px' }}>

          {/* Top nav - embedded header */}
          <div style={{ margin: '-24px -24px 0 -24px', width: 'calc(100% + 48px)' }}>
            <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem 1.5rem 0 0', '0, 0, 0', 0.08)}>
              <div style={{ ...aiGlassLightContentStyle('1.5rem 1.5rem 0 0', 0.6), padding: '8px' }}>
                <nav style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '100%' }}>
                  {NAV_ITEMS.map((label, i) => (
                    <NavStatsCard
                      key={label}
                      label={label}
                      textOnly
                      isFirst={i === 0}
                      isLast={i === NAV_ITEMS.length - 1}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
            <div style={{ ...aiGlassLightContentStyle('1.5rem', 0.6), padding: '34px 48px', position: 'relative' }}>
              <nav aria-label="Progress">
                <ol className="flex items-center justify-between">
                  {PROGRESS_STEPS.map((step, idx) => (
                    <React.Fragment key={step.id}>
                      <li className="flex items-center" style={{ position: 'relative', zIndex: 1 }}>
                        {/* Red pill overlay for current step */}
                        {step.status === 'current' && (
                          <div
                            className="ai-glass-border"
                            style={{
                              ...aiGlassLightBorderStyle('1.5rem', '220, 38, 38', 0.25),
                              position: 'absolute',
                              top: -16, bottom: -16,
                              left: idx === 0 ? -32 : -20,
                              right: idx === PROGRESS_STEPS.length - 1 ? -32 : -20,
                              zIndex: -1,
                            }}
                          >
                            <div style={{ width: '100%', height: '100%', borderRadius: '1.5rem', background: BRAND_COLOR_LIGHT }} />
                          </div>
                        )}

                        {/* Step circle */}
                        <div
                          className="ai-glass-border shrink-0"
                          style={{
                            ...aiGlassLightBorderStyle('9999px', '0, 0, 0', step.status === 'upcoming' ? 0.08 : 0),
                            width: 40, height: 40,
                          }}
                        >
                          <div style={{
                            ...aiGlassLightContentStyle('9999px', step.status === 'upcoming' ? 0.6 : 1),
                            width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            ...(step.status !== 'upcoming' && { backdropFilter: 'none', WebkitBackdropFilter: 'none' }),
                          }}>
                            {step.status === 'complete' ? (
                              <span style={{ color: BRAND_COLOR }}><CheckSVG /></span>
                            ) : (
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: step.status === 'current' ? BRAND_COLOR : '#6B6B6B' }}>
                                {step.id}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Step label */}
                        <div className="ml-3 flex flex-col min-w-0">
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500, color: step.status === 'current' ? BRAND_COLOR : step.status === 'complete' ? '#2C2C2C' : '#6B6B6B' }}>
                            {step.name}
                          </span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 400, color: '#6B6B6B' }}>
                            {step.description}
                          </span>
                        </div>
                      </li>

                      {idx < PROGRESS_STEPS.length - 1 && <NavDivider />}
                    </React.Fragment>
                  ))}
                </ol>
              </nav>
            </div>
          </div>

          {/* Stats card */}
          <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
            <div className="w-full rounded-[1.5rem]" style={aiGlassLightContentStyle('1.5rem', 0.8)}>
              <Stats metadata={metadata} preferenceMetadata={preferenceMetadata} />
            </div>
          </div>

          {/* LogTable card with embedded header */}
          <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
            <div className="w-full flex flex-col rounded-[1.5rem] overflow-hidden" style={aiGlassLightContentStyle('1.5rem', 0.5)}>
              {/* Embedded header */}
              <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem 1.5rem 0 0', '0, 0, 0', 0.08)}>
                <div className="flex items-center justify-between gap-4" style={{ ...aiGlassLightContentStyle('1.5rem 1.5rem 0 0', 0.85), padding: '16px 20px' }}>
                  <div className="ai-glass-border" style={{ ...aiGlassLightBorderStyle('9999px'), width: 'fit-content' }}>
                    <div style={{ ...aiGlassLightContentStyle('9999px', 0.6), padding: '6px 16px' }}>
                      <span className="text-sm font-medium text-gray-700 font-sans">Logbook Preview</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="ai-glass-border" style={{ ...aiGlassLightBorderStyle('9999px'), width: 'fit-content' }}>
                      <div className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-gray-700 font-sans" style={{ ...aiGlassLightContentStyle('9999px', 0.6), padding: '6px 14px' }}>
                        Show all
                        <svg aria-hidden="true" className="size-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="ai-glass-border" style={{ ...aiGlassLightBorderStyle('9999px', '220, 38, 38', 0.4), width: 'fit-content' }}>
                      <div className="inline-flex items-center rounded-full text-sm font-semibold font-sans" style={{ ...aiGlassLightContentStyle('9999px', 0.6), backgroundColor: 'rgba(220, 38, 38, 0.08)', color: 'rgb(185, 28, 28)', padding: '6px 16px' }}>
                        Publish
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LogTable assignments={assignments} crew={crew} shifts={shifts} roles={roles} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
