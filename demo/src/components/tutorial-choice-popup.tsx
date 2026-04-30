'use client';

interface TutorialChoicePopupProps {
  onViewTutorial: () => void;
  onSkipToSignIn: () => void;
  onClose: () => void;
}

export function TutorialChoicePopup({
  onViewTutorial,
  onSkipToSignIn,
  onClose,
}: TutorialChoicePopupProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div
        className="pointer-events-auto relative flex flex-col items-center gap-6 text-center"
        style={{
          width: '420px',
          borderRadius: '1.5rem',
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 100%)',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.12)',
        }}
      >
        <div
          style={{
            width: '100%',
            borderRadius: 'calc(1.5rem - 5px)',
            padding: '32px',
            background: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'rgba(44,44,44,0.4)',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)';
              e.currentTarget.style.color = '#2C2C2C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'rgba(44,44,44,0.4)';
            }}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '22px',
                fontWeight: 600,
                color: '#2C2C2C',
                margin: 0,
              }}
            >
              Welcome to Logbook Writer
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#6B6B6B',
                margin: 0,
              }}
            >
              A crew scheduling system that generates optimal daily task assignments.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <button
              onClick={onViewTutorial}
              style={{
                width: '100%',
                padding: '10px 20px',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: 'white',
                backgroundColor: '#2C2C2C',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444444')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2C2C2C')}
            >
              View Tutorial
            </button>
            <button
              onClick={onSkipToSignIn}
              style={{
                width: '100%',
                padding: '10px 20px',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: '#9A999E',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'color 0.15s ease, background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2C2C2C';
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9A999E';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Skip to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
