'use client';

import React, { useState, useEffect } from 'react';
import { GlassPillCard } from '@/components/ui/ai-glass';

interface GlassConfig {
  backgroundOpacity: number;
  borderOpacity: number;
  blur: number;
  borderWidth: number;
  borderBrightness: number;
  borderFade: number;
}

// Favorite config values
const defaultConfig: GlassConfig = {
  backgroundOpacity: 0.1,
  borderOpacity: 0,
  blur: 7,
  borderWidth: 1,
  borderBrightness: 1.25,
  borderFade: 40,
};

export function GlassDevPanel() {
  const [config, setConfig] = useState<GlassConfig>(defaultConfig);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply CSS variables to root - forces all glass elements to update
  useEffect(() => {
    if (!mounted) return;

    // Set CSS variables on root
    document.documentElement.style.setProperty('--glass-bg-opacity', String(config.backgroundOpacity));
    document.documentElement.style.setProperty('--glass-border-opacity', String(config.borderOpacity));
    document.documentElement.style.setProperty('--glass-blur', `${config.blur}px`);

    // Force a repaint on glass elements by toggling a class
    const glassElements = document.querySelectorAll('.ai-glass-content');
    glassElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      // Force style recalculation
      htmlEl.style.background = `rgba(255, 255, 255, ${config.backgroundOpacity})`;
      htmlEl.style.backdropFilter = `blur(${config.blur}px)`;
      htmlEl.style.setProperty('-webkit-backdrop-filter', `blur(${config.blur}px)`);
    });

    document.querySelectorAll('.ai-glass-border').forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.setProperty('--border-opacity', String(config.borderOpacity));
      htmlEl.style.setProperty('--border-width', `${config.borderWidth}px`);
      htmlEl.style.setProperty('--border-brightness', String(config.borderBrightness));
      htmlEl.style.setProperty('--border-fade', `${config.borderFade}%`);
    });
  }, [config, mounted]);

  if (!mounted || process.env.NODE_ENV !== 'development') {
    return null;
  }

  const handleCopyConfig = () => {
    const configStr = JSON.stringify(config, null, 2);
    navigator.clipboard.writeText(configStr);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-olive-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-olive-800 transition-colors text-sm font-medium"
      >
        {isOpen ? 'Close' : 'Glass Config'}
      </button>

      {isOpen && (
        <div className="absolute bottom-12 right-0 flex gap-6 items-end">
          {/* Stacked cards demo */}
          <div className="relative" style={{ width: 200, height: 340 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: i * 30,
                  left: i * 30,
                  width: 140,
                  height: 180,
                }}
              >
                <GlassPillCard
                  padding="16px"
                  borderRadius="0.75rem"
                  contentStyle={{
                    background: `rgba(255, 255, 255, ${config.backgroundOpacity})`,
                    backdropFilter: `blur(${config.blur}px)`,
                    WebkitBackdropFilter: `blur(${config.blur}px)`,
                  }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <span className="text-olive-700 text-xs font-medium">Card {i + 1}</span>
                </GlassPillCard>
              </div>
            ))}
          </div>

          {/* Controls panel */}
          <GlassPillCard
            padding="20px"
            borderRadius="0.75rem"
            contentStyle={{
              background: `rgba(255, 255, 255, ${config.backgroundOpacity})`,
              backdropFilter: `blur(${config.blur}px)`,
              WebkitBackdropFilter: `blur(${config.blur}px)`,
            }}
          >
            <div className="min-w-[280px]">
              <h3 className="font-semibold text-olive-950 mb-4 text-sm">
                Glass Effect Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Background Opacity</span>
                    <span className="font-mono">{config.backgroundOpacity.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={config.backgroundOpacity}
                    onChange={(e) =>
                      setConfig({ ...config, backgroundOpacity: parseFloat(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Border Opacity</span>
                    <span className="font-mono">{config.borderOpacity.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.3"
                    step="0.01"
                    value={config.borderOpacity}
                    onChange={(e) =>
                      setConfig({ ...config, borderOpacity: parseFloat(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Blur (px)</span>
                    <span className="font-mono">{config.blur}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={config.blur}
                    onChange={(e) =>
                      setConfig({ ...config, blur: parseInt(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Border Width (px)</span>
                    <span className="font-mono">{config.borderWidth.toFixed(1)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.5"
                    value={config.borderWidth}
                    onChange={(e) =>
                      setConfig({ ...config, borderWidth: parseFloat(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Border Brightness</span>
                    <span className="font-mono">{config.borderBrightness.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="2"
                    step="0.05"
                    value={config.borderBrightness}
                    onChange={(e) =>
                      setConfig({ ...config, borderBrightness: parseFloat(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
                <div>
                  <label className="flex justify-between text-xs text-olive-700 mb-1">
                    <span>Corner Fade (%)</span>
                    <span className="font-mono">{config.borderFade}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={config.borderFade}
                    onChange={(e) =>
                      setConfig({ ...config, borderFade: parseInt(e.target.value) })
                    }
                    className="w-full h-2 bg-olive-200 rounded-lg appearance-none cursor-pointer accent-olive-600"
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-olive-300 flex gap-2">
                <button
                  onClick={handleCopyConfig}
                  className="flex-1 bg-olive-200 text-olive-700 px-3 py-2 rounded-lg text-xs font-medium hover:bg-olive-300 transition-colors"
                >
                  Copy Config
                </button>
                <button
                  onClick={() => setConfig(defaultConfig)}
                  className="flex-1 bg-olive-200 text-olive-700 px-3 py-2 rounded-lg text-xs font-medium hover:bg-olive-300 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </GlassPillCard>
        </div>
      )}
    </div>
  );
}
