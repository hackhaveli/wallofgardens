import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export default function BrandLogo({ size = 38, className = '' }: BrandLogoProps) {
  return (
    <svg
      className={`wog-animated-logo ${className}`.trim()}
      viewBox="-91 -91 182 182"
      width={size}
      height={size}
      aria-label="Wall of Gardens Logo"
      role="img"
    >
      {/* 9 Rounded Architectural Tiles with Living Sunlight Shimmer */}
      <rect className="wog-tile wog-t1" x="-89" y="-89" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t2" x="-28" y="-89" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t3" x="33" y="-89" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t4" x="-89" y="-28" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t5" x="-28" y="-28" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t6" x="33" y="-28" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t7" x="-89" y="33" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t8" x="-28" y="33" width="56" height="56" rx="5" fill="#F6F3EA" />
      <rect className="wog-tile wog-t9" x="33" y="33" width="56" height="56" rx="5" fill="#F6F3EA" />

      {/* 'W' in Middle-Left Tile */}
      <g transform="translate(-89,-28)">
        <clipPath id="wcl_nav">
          <rect x="11" y="13" width="34" height="31" />
        </clipPath>
        <path
          className="wog-char"
          clipPath="url(#wcl_nav)"
          d="M11 9 L21 48 L28 27 L35 48 L45 9"
          fill="none"
          stroke="#101E17"
          strokeWidth="7"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </g>

      {/* 'O' in Middle-Center Tile */}
      <g transform="translate(-28,-28)">
        <circle className="wog-char" cx="28" cy="28" r="15.5" fill="none" stroke="#101E17" strokeWidth="6.5" />
      </g>

      {/* 'G' in Middle-Right Tile with Animated Organic Leaf Sprout */}
      <g transform="translate(33,-28)">
        <path
          className="wog-char"
          d="M40.5 17.5 A15.5 15.5 0 1 0 43 33 L43 28 L29 28"
          fill="none"
          stroke="#101E17"
          strokeWidth="6.5"
        />
        <path
          className="wog-leaf"
          d="M37 15 C37 9 41 5.5 48 6 C48 12 44 15.5 37 15Z"
          fill="#101E17"
        />
      </g>
    </svg>
  );
}
