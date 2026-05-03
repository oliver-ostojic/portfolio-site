export function LogbookArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 582 352"
      width="100%"
      className="block w-full"
      aria-label="Logbook Writer system architecture"
    >
      <defs>
        <marker id="lw-fwd" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.55)" />
        </marker>
        <marker id="lw-bwd" markerWidth="7" markerHeight="5" refX="1" refY="2.5" orient="auto">
          <polygon points="7 0, 0 2.5, 7 5" fill="rgba(255,255,255,0.55)" />
        </marker>
      </defs>

      {/* ── Outer deployment zone containers ── */}
      {/* All zones: y=42, height=299, bottom=341. Side margins=16, top/bottom margins=16 */}
      <rect x="8"   y="42" width="122" height="299" rx="16"
        fill="rgba(255,255,255,0.05)" />
      <rect x="154" y="42" width="274" height="299" rx="16"
        fill="rgba(255,255,255,0.05)" />
      <rect x="452" y="42" width="122" height="299" rx="16"
        fill="rgba(255,255,255,0.05)" />

      {/* Zone labels */}
      <text x="69"  y="27" textAnchor="middle" fill="rgba(255,255,255,0.65)"
        fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Client</text>
      <text x="291" y="27" textAnchor="middle" fill="rgba(255,255,255,0.65)"
        fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Application Server</text>
      <text x="513" y="27" textAnchor="middle" fill="rgba(255,255,255,0.65)"
        fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Database Server</text>

      {/* ── Inner nodes ── */}
      {/* All inner boxes: 16px margin from zone on all sides */}
      {/* Zone top=42, inner top=58. Zone bottom=341, inner bottom=325. */}

      {/* Next.js — tall pill: x=24, y=58, w=90, h=267, center-y=191.5 */}
      <rect x="24" y="58" width="90" height="267" rx="18"
        fill="rgba(12,12,9,0.15)" />
      <text x="69" y="183" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Next.js</text>
      <text x="69" y="197" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">React 19</text>
      <text x="69" y="211" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">TypeScript</text>

      {/* Fastify REST API: x=170, y=58, w=242, h=108, center-y=112, bottom=166 */}
      <rect x="170" y="58" width="242" height="108" rx="18"
        fill="rgba(12,12,9,0.15)" />
      <text x="291" y="108" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Fastify REST API</text>
      <text x="291" y="122" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">Node.js · Orchestration</text>

      {/* PostgreSQL — tall pill: x=468, y=58, w=90, h=267, center-y=191.5 */}
      <rect x="468" y="58" width="90" height="267" rx="18"
        fill="rgba(12,12,9,0.15)" />
      <text x="513" y="183" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">PostgreSQL</text>
      <text x="513" y="197" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">Prisma ORM</text>

      {/* CP-SAT Solver: x=170, y=217, w=112, h=108, center-y=271, bottom=325 */}
      <rect x="170" y="217" width="112" height="108" rx="18"
        fill="rgba(12,12,9,0.15)" />
      <text x="226" y="263" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">CP-SAT</text>
      <text x="226" y="277" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Solver</text>
      <text x="226" y="291" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">Python · OR-Tools</text>

      {/* Logbook Manager: x=300, y=217, w=112, h=108, center-y=271, bottom=325 */}
      <rect x="300" y="217" width="112" height="108" rx="18"
        fill="rgba(12,12,9,0.15)" />
      <text x="356" y="263" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Logbook</text>
      <text x="356" y="277" textAnchor="middle"
        fill="white" fontSize="12" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.025em">Manager</text>
      <text x="356" y="291" textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter, system-ui, sans-serif">fairness tracking</text>

      {/* ── Arrows ── */}

      {/* 1. Next.js ↔ Fastify — at Fastify center y=112 */}
      <path d="M114,112 L170,112"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
        markerStart="url(#lw-bwd)" markerEnd="url(#lw-fwd)" />
      <text x="142" y="105" textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">REST</text>

      {/* 2. Fastify ↔ PostgreSQL — at y=112 */}
      <path d="M412,112 L468,112"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
        markerStart="url(#lw-bwd)" markerEnd="url(#lw-fwd)" />
      <text x="440" y="105" textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">Prisma</text>

      {/* 3. Fastify → CP-SAT — vertical from y=166 to y=217, midpoint=191.5 */}
      <path d="M226,166 L226,217"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
        markerEnd="url(#lw-fwd)" />
      <text x="230" y="194" textAnchor="start"
        fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">stdin JSON</text>

      {/* 4. CP-SAT → Logbook — at CP-SAT center y=271 */}
      <path d="M282,271 L300,271"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
        markerEnd="url(#lw-fwd)" />
      <text x="291" y="264" textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">stdout</text>

      {/* 5. Logbook → PostgreSQL — at y=271 */}
      <path d="M412,271 L468,271"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
        markerEnd="url(#lw-fwd)" />
      <text x="440" y="264" textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">write</text>
    </svg>
  )
}
