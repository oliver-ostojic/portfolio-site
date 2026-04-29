export type QuotaWarning = {
  crewId: string;
  crewName: string;
  roleId: number;
  roleCode: string;
  requiredMinutes: number;
  actualMinutes: number;
  shortfallMinutes: number;
  message: string;
};

export type LogbookMetadata = {
  solver: {
    status: string;
    runtimeMs: number;
    objectiveScore?: number;
    numCrew?: number;
    numHours?: number;
    numAssignments?: number;
  };
  schedule: {
    totalAssignments: number;
    crewScheduled: number;
    totalHours: number;
  };
  constraints?: {
    hourlyConstraints?: number;
    windowConstraints?: number;
    dailyConstraints?: number;
  };
  preferences?: {
    total: number;
    met: number;
    averageSatisfaction: number;
  };
  quotaWarnings?: QuotaWarning[];
  violations?: string[];
  generatedAt?: string;
};

export type PreferenceMetadata = {
  eligiblePreferences: number;
  preferencesMet: number;
  percentMet: number;
  avgSatisfaction: number;
  eligibleCrew: number;
  avgSatisfactionPerCrew: number;
  fairnessIndex: number;
  fairnessGrade: string;
};
