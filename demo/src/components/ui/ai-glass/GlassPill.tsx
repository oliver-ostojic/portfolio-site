'use client';

import React, { useState } from 'react';

export interface GlassPillProps {
  children: React.ReactNode;
  /** Whether this pill is currently selected */
  isSelected?: boolean;
  /** Click handler - if provided, pill becomes interactive */
  onClick?: () => void;
  /** Custom border radius (default: '1rem') */
  borderRadius?: string;
  /** Custom padding (default: '24px') */
  padding?: string;
  /** Brightness filter when selected (default: 0.94) */
  selectedBrightness?: number;
  /** Scale transform when selected (default: 1.02) */
  selectedScale?: number;
  /** Additional className */
  className?: string;
  /** Additional style for outer container */
  style?: React.CSSProperties;
  /** Additional style for inner content */
  contentStyle?: React.CSSProperties;
}

/**
 * GlassPill - A glass-effect pill/card component
 *
 * Uses CSS custom properties (--glass-bg-opacity, --glass-border-opacity, --glass-blur)
 * which can be controlled via the dev panel or set in CSS.
 */
export const GlassPill: React.FC<GlassPillProps> = ({
  children,
  isSelected = false,
  onClick,
  borderRadius = '1rem',
  padding = '24px',
  selectedBrightness = 0.94,
  selectedScale = 1.02,
  className = '',
  style,
  contentStyle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isInteractive = !!onClick;
  const isActive = isSelected || (isInteractive && isHovered);

  return (
    <div
      className={`ai-glass-border ${className}`}
      style={{
        borderRadius,
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        cursor: isInteractive ? 'pointer' : 'default',
        transition: 'filter 0.2s ease, transform 0.2s ease',
        ...(isSelected && {
          filter: `brightness(${selectedBrightness})`,
          transform: `scale(${selectedScale})`,
        }),
        ...(isInteractive && isHovered && !isSelected && {
          filter: `brightness(${selectedBrightness})`,
        }),
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`ai-glass-content flex items-center justify-center h-full`}
        data-active={isActive ? 'true' : 'false'}
        style={{
          borderRadius,
          padding,
          transition: 'background 0.2s ease, backdrop-filter 0.2s ease',
          // TEMP: Hardcoded glass styles for testing
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          ...contentStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export interface GlassPillButtonProps extends Omit<GlassPillProps, 'onClick'> {
  /** Click handler (required for button) */
  onClick: () => void;
}

/**
 * GlassPillButton - An interactive glass pill button
 *
 * Same as GlassPill but with required onClick.
 */
export const GlassPillButton: React.FC<GlassPillButtonProps> = (props) => {
  return <GlassPill {...props} />;
};

export interface GlassPillCardProps extends Omit<GlassPillProps, 'onClick' | 'isSelected'> {}

/**
 * GlassPillCard - A non-interactive glass pill card
 *
 * Same as GlassPill but without click handling or selection state.
 */
export const GlassPillCard: React.FC<GlassPillCardProps> = (props) => {
  return <GlassPill {...props} isSelected={false} onClick={undefined} />;
};
