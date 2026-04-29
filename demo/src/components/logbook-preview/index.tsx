'use client';

import { aiGlassLightBorderStyle, aiGlassLightContentStyle } from '@/components/ui/ai-glass';
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

export function LogbookPreviewCard() {
  return (
    <div className="ai-glass-border rounded-[1.5rem]" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.06)}>
      <div className="w-full rounded-[1.5rem] flex flex-col gap-6" style={{ ...aiGlassLightContentStyle('1.5rem', 0.5), padding: '24px 24px', height: 'fit-content' }}>

        <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
          <div className="w-full rounded-[1.5rem]" style={aiGlassLightContentStyle('1.5rem', 0.8)}>
            <Stats metadata={metadata} preferenceMetadata={preferenceMetadata} />
          </div>
        </div>

        <div className="ai-glass-border" style={aiGlassLightBorderStyle('1.5rem', '0, 0, 0', 0.08)}>
          <div className="w-full rounded-[1.5rem] overflow-hidden" style={aiGlassLightContentStyle('1.5rem', 0.8)}>
            <LogTable assignments={assignments} crew={crew} shifts={shifts} roles={roles} />
          </div>
        </div>

      </div>
    </div>
  );
}
