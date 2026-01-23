'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface GlassConfig {
  backgroundOpacity: number;
  borderOpacity: number;
  blur: number;
}

const defaultConfig: GlassConfig = {
  backgroundOpacity: 0.6,
  borderOpacity: 0.08,
  blur: 8,
};

interface GlassConfigContextType {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
}

const GlassConfigContext = createContext<GlassConfigContextType | null>(null);

export function GlassConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GlassConfig>(defaultConfig);

  return (
    <GlassConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </GlassConfigContext.Provider>
  );
}

export function useGlassConfig(): GlassConfigContextType {
  const context = useContext(GlassConfigContext);
  if (!context) {
    return { config: defaultConfig, setConfig: () => {} };
  }
  return context;
}
