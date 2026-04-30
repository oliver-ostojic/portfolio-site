'use client';

import React from 'react';

interface LogbookWriterOverlayProps {
  onClose: () => void;
  initialRoute?: 'tutorial' | 'login';
}

export function LogbookWriterOverlay({ onClose, initialRoute = 'login' }: LogbookWriterOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100]">

      {/* Close button - floating X */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[101] w-10 h-10 flex items-center justify-center rounded-full bg-olive-950 text-white hover:bg-olive-800 transition-colors shadow-lg"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* iframe with logbook-writer app */}
      <iframe
        src={`http://localhost:4001/${initialRoute}`}
        className="absolute w-full border-none z-[100]"
        style={{
          backgroundColor: 'transparent',
          top: '80px',
          height: 'calc(100% - 80px)',
        }}
        allow="clipboard-write"
      />
    </div>
  );
}
