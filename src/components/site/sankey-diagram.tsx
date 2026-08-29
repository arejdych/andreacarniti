"use client";

export function SankeyDiagram() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#211f2d] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
      <svg
        viewBox="0 0 800 450"
        role="img"
        aria-label="Animated Sankey diagram showing data flowing from forest sensors to sustainability outcomes"
        className="mt-12 h-[calc(100%-3rem)] w-full"
      >
        <defs>
          <linearGradient id="sankey-flow-cyan" x1="0" x2="1">
            <stop offset="0" stopColor="#e11d74" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#e9dc35" stopOpacity="0.34" />
            <stop offset="1" stopColor="#4ac5d9" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="sankey-flow-blue" x1="0" x2="1">
            <stop offset="0" stopColor="#d8c928" stopOpacity="0.45" />
            <stop offset="1" stopColor="#3e82e8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g className="sankey-flow">
          <path d="M105 75 C190 75 180 130 270 130 L270 210 C180 210 190 155 105 155Z" fill="url(#sankey-flow-cyan)" />
          <path d="M105 180 C190 180 200 220 270 220 L270 275 C200 275 190 235 105 235Z" fill="url(#sankey-flow-blue)" />
          <path d="M105 290 C190 290 205 300 270 300 L270 345 C205 345 190 325 105 325Z" fill="url(#sankey-flow-cyan)" />
          <path d="M290 130 C380 130 365 170 450 170 L450 280 C365 280 380 210 290 210Z" fill="url(#sankey-flow-cyan)" />
          <path d="M290 275 C375 275 385 255 450 255 L450 315 C385 315 375 300 290 300Z" fill="url(#sankey-flow-blue)" />
          <path d="M470 170 C555 170 545 145 630 145 L630 230 C545 230 555 280 470 280Z" fill="url(#sankey-flow-cyan)" />
          <path d="M470 280 C550 280 555 300 630 300 L630 350 C555 350 550 315 470 315Z" fill="url(#sankey-flow-blue)" />
        </g>

        <g fill="#343142">
          <rect x="92" y="65" width="18" height="100" rx="2" />
          <rect x="92" y="175" width="18" height="70" rx="2" />
          <rect x="92" y="285" width="18" height="50" rx="2" />
          <rect x="270" y="120" width="20" height="230" rx="2" fill="#e6db31" />
          <rect x="450" y="160" width="20" height="160" rx="2" fill="#936dff" />
          <rect x="630" y="135" width="20" height="220" rx="2" fill="#36bed3" />
          <rect x="690" y="115" width="18" height="48" rx="2" fill="#31a8e8" />
          <rect x="690" y="170" width="18" height="42" rx="2" fill="#3d7ee5" />
          <rect x="690" y="220" width="18" height="50" rx="2" fill="#f4d338" />
          <rect x="690" y="278" width="18" height="58" rx="2" fill="#5ac9b0" />
        </g>

      </svg>
    </div>
  );
}
