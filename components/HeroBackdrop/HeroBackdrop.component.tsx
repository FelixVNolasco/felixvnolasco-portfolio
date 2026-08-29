const NODES = [
  [760, 120],
  [920, 80],
  [1088, 140],
  [1240, 70],
  [1360, 160],
  [820, 250],
  [980, 220],
  [1144, 270],
  [1300, 300],
  [740, 390],
  [900, 360],
  [1060, 400],
  [1224, 430],
  [1380, 460],
  [860, 520],
  [1020, 560],
  [1180, 540],
  [1330, 620],
  [940, 680],
  [1120, 700],
] as const;

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 6],
  [2, 7],
  [4, 8],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [8, 13],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [10, 14],
  [11, 15],
  [12, 16],
  [13, 17],
  [14, 15],
  [15, 16],
  [16, 17],
  [14, 18],
  [15, 18],
  [16, 19],
  [17, 19],
];

const TOKENS = [
  { x: 1188, y: 198, text: "{ }", delay: "0s" },
  { x: 1324, y: 248, text: "=>", delay: "1.4s" },
  { x: 868, y: 168, text: "</>", delay: "0.7s" },
  { x: 1260, y: 508, text: "fn()", delay: "2.1s" },
  { x: 980, y: 628, text: "01 10", delay: "1.1s" },
  { x: 1090, y: 88, text: "const", delay: "1.8s" },
] as const;

const FLOW_EDGES = [0, 5, 9, 14, 19, 24];

const HeroBackdrop = () => (
  <div
    className="hero-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <svg
      className="h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <pattern
          id="hero-bg-grid"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M56 0H0V56"
            stroke="white"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="hero-bg-glow" cx="78%" cy="38%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-bg-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#hero-bg-grid)" />
      <rect width="1440" height="900" fill="url(#hero-bg-glow)" />

      {EDGES.map(([from, to], index) => {
        const [x1, y1] = NODES[from];
        const [x2, y2] = NODES[to];
        const isFlow = FLOW_EDGES.includes(index);

        return (
          <line
            key={`${from}-${to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeOpacity={isFlow ? 0.34 : 0.16}
            strokeWidth={isFlow ? 1.2 : 0.85}
            className={isFlow ? "hero-bg-flow" : undefined}
            style={
              isFlow
                ? { animationDelay: `${(index % 6) * 0.8}s` }
                : undefined
            }
          />
        );
      })}

      {FLOW_EDGES.map((edgeIndex, index) => {
        const [from, to] = EDGES[edgeIndex];
        const [x1, y1] = NODES[from];
        const [x2, y2] = NODES[to];

        return (
          <circle
            key={`packet-${edgeIndex}`}
            r="2"
            fill="white"
            className="hero-bg-packet"
            style={{ animationDelay: `${index * 1.1}s` }}
          >
            <animateMotion
              dur="7s"
              begin={`${index * 1.1}s`}
              repeatCount="indefinite"
              path={`M ${x1} ${y1} L ${x2} ${y2}`}
            />
          </circle>
        );
      })}

      {NODES.map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r="10"
            stroke="white"
            strokeOpacity="0.14"
            className="hero-bg-pulse"
            style={{ animationDelay: `${index * 0.18}s` }}
          />
          <circle
            cx={x}
            cy={y}
            r="2.5"
            fill="white"
            fillOpacity={index % 4 === 0 ? 0.62 : 0.34}
          />
        </g>
      ))}

      {TOKENS.map((token) => (
        <text
          key={token.text}
          x={token.x}
          y={token.y}
          fill="white"
          fillOpacity="0.38"
          fontFamily="Geist Mono, ui-monospace, monospace"
          fontSize="13"
          letterSpacing="0.18em"
          className="hero-bg-float"
          style={{ animationDelay: token.delay }}
        >
          {token.text}
        </text>
      ))}

      <g fill="white" fillOpacity="0.2" fontFamily="Geist Mono, ui-monospace, monospace" fontSize="12">
        <text x="1210" y="368">{"{ stack: ['react', 'convex'] }"}</text>
        <text x="1210" y="390">{"await ship(product)"}</text>
      </g>

      <rect
        x="0"
        y="0"
        width="1440"
        height="2"
        fill="url(#hero-bg-line)"
        className="hero-bg-scan"
      />
    </svg>

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
  </div>
);

export default HeroBackdrop;
