import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  withBackground?: boolean;
}

export default function BrandLogo({
  size = 40,
  className = '',
  withBackground = true,
}: BrandLogoProps) {
  const scale = 2.7142857; // 152 / 56

  return (
    <svg
      className={`wog-animated-logo ${className}`.trim()}
      viewBox="0 0 640 640"
      width={size}
      height={size}
      aria-label="Wall of Gardens Logo"
      role="img"
    >
      <defs>
        <clipPath id="wcl_nav_master">
          <rect x="11" y="13" width="34" height="31" />
        </clipPath>
      </defs>

      {/* Luxury Forest Green Emblem Background (matching official WOG brand logo) */}
      {withBackground && (
        <rect
          className="wog-bg-plate"
          x="0"
          y="0"
          width="640"
          height="640"
          rx="110"
          fill="#111E17"
        />
      )}

      {/* Tile 1: 'W' in Left Tile */}
      <rect
        className="wog-tile wog-t1"
        x="76"
        y="244"
        width="152"
        height="152"
        rx="18"
        fill="#F6F3EA"
      />
      <g transform={`translate(76, 244) scale(${scale})`}>
        <path
          className="wog-char"
          clipPath="url(#wcl_nav_master)"
          d="M11 9 L21 48 L28 27 L35 48 L45 9"
          fill="none"
          stroke="#111E17"
          strokeWidth="7"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </g>

      {/* Tile 2: 'O' in Center Tile */}
      <rect
        className="wog-tile wog-t2"
        x="244"
        y="244"
        width="152"
        height="152"
        rx="18"
        fill="#F6F3EA"
      />
      <g transform={`translate(244, 244) scale(${scale})`}>
        <circle
          className="wog-char"
          cx="28"
          cy="28"
          r="15.5"
          fill="none"
          stroke="#111E17"
          strokeWidth="6.5"
        />
      </g>

      {/* Tile 3: 'G' in Right Tile with Organic Leaf Sprout */}
      <rect
        className="wog-tile wog-t3"
        x="412"
        y="244"
        width="152"
        height="152"
        rx="18"
        fill="#F6F3EA"
      />
      <g transform={`translate(412, 244) scale(${scale})`}>
        <path
          className="wog-char"
          d="M40.5 17.5 A15.5 15.5 0 1 0 43 33 L43 28 L29 28"
          fill="none"
          stroke="#111E17"
          strokeWidth="6.5"
        />
        <path
          className="wog-leaf"
          d="M37 15 C37 9 41 5.5 48 6 C48 12 44 15.5 37 15Z"
          fill="#111E17"
        />
      </g>
    </svg>
  );
}
