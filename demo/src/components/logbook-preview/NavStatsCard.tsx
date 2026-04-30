'use client';

import React, { useState } from 'react';
import { aiGlassLightBorderStyle, aiGlassLightContentStyle } from '@/components/ui/ai-glass';

interface NavStatsCardProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  textOnly?: boolean;
}

export const NavStatsCard: React.FC<NavStatsCardProps> = ({
  label,
  isActive = false,
  onClick,
  isFirst = false,
  isLast = false,
  textOnly = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const showHighlight = isActive || isHovered;

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      style={{ position: 'relative', zIndex: 1, flex: 1, padding: textOnly ? '8px 0' : undefined }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showHighlight && (
        <div
          className="ai-glass-border"
          style={{
            ...aiGlassLightBorderStyle('20px', '0, 0, 0', 0.08),
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: isFirst ? 0 : 4,
            right: isLast ? 0 : 4,
            zIndex: -1,
          }}
        >
          <div
            style={{
              ...aiGlassLightContentStyle('20px', 1),
              width: '100%',
              height: '100%',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              background: isHovered && !isActive
                ? `rgba(255, 255, 255, calc(var(--glass-bg-opacity, 0.6) * 0.8333))`
                : `rgba(255, 255, 255, calc(var(--glass-bg-opacity, 0.6) * 1.4167))`,
            }}
          />
        </div>
      )}
      <span
        style={{
          fontFamily: 'var(--font-open-sans)',
          fontSize: isActive ? '15px' : '14px',
          fontWeight: isActive ? 600 : 400,
          color: isActive ? '#2C2C2C' : '#9A999E',
          transition: 'all 0.15s ease',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const NavDivider: React.FC = () => (
  <div
    style={{
      width: 1,
      height: 40,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)',
      margin: '0 20px',
      alignSelf: 'center',
      flexShrink: 0,
    }}
  />
);
