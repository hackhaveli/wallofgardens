import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export default function BrandLogo({ size = 40, className = '' }: BrandLogoProps) {
  return (
    <svg
      className={`wog-free-logo ${className}`.trim()}
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wall of Gardens - Living Architecture Logo"
      role="img"
    >
      <defs>
        {/* Luxury Brushed Champagne Gold Gradients */}
        <linearGradient id="wogGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E0" />
          <stop offset="45%" stopColor="#E5C365" />
          <stop offset="85%" stopColor="#A47D22" />
          <stop offset="100%" stopColor="#E5C365" />
        </linearGradient>

        <linearGradient id="wogGoldSecondary" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6827" />
          <stop offset="50%" stopColor="#E2C382" />
          <stop offset="100%" stopColor="#FFF9E6" />
        </linearGradient>

        {/* Lush Living Flora Gradients */}
        <linearGradient id="wogLeafLeft" x1="0%" y1="100%" x2="20%" y2="0%">
          <stop offset="0%" stopColor="#0E3D1D" />
          <stop offset="55%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#86EFAC" />
        </linearGradient>

        <linearGradient id="wogLeafRight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14532D" />
          <stop offset="65%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#BBF7D0" />
        </linearGradient>

        {/* Ethereal Biophilic Respiration Aura (Borderless) */}
        <radialGradient id="wogLivingAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#C8A55B" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </radialGradient>

        {/* Golden Sun Glint Shimmer Filter */}
        <filter id="wogGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. LIVING BIOPHILIC RESPIRATION AURA (FREE-FLOATING, NO BOX) */}
      <circle
        className="wog-aura"
        cx="24"
        cy="24"
        r="20"
        fill="url(#wogLivingAura)"
      />

      {/* 2. CELESTIAL SUN / ORBITAL HARMONY RING ('O') */}
      <circle
        className="wog-orbit"
        cx="24"
        cy="24"
        r="17.5"
        stroke="url(#wogGoldPrimary)"
        strokeWidth="0.9"
        strokeDasharray="2.5 3.5"
        opacity="0.6"
      />
      <circle
        cx="24"
        cy="24"
        r="19"
        stroke="url(#wogGoldSecondary)"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* 3. ARCHITECTURAL LIVING TRELLIS STRUCTURE ('W') */}
      {/* Left Outer Pillar & Slats */}
      <path
        className="wog-trellis-pillar"
        d="M 8 35 L 14 13 L 18 35"
        stroke="url(#wogGoldPrimary)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="11"
        y1="24"
        x2="16"
        y2="24"
        stroke="url(#wogGoldSecondary)"
        strokeWidth="1.2"
        opacity="0.8"
      />

      {/* Right Outer Pillar & Slats */}
      <path
        className="wog-trellis-pillar"
        d="M 30 35 L 34 13 L 40 35"
        stroke="url(#wogGoldPrimary)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="32"
        y1="24"
        x2="37"
        y2="24"
        stroke="url(#wogGoldSecondary)"
        strokeWidth="1.2"
        opacity="0.8"
      />

      {/* Central Keystone Chevron (The Heart of the W) */}
      <path
        className="wog-keystone"
        d="M 18 35 L 24 21 L 30 35"
        stroke="url(#wogGoldSecondary)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Architectural Ground Plinth Foundation */}
      <line
        className="wog-foundation"
        x1="6"
        y1="38"
        x2="42"
        y2="38"
        stroke="url(#wogGoldPrimary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* 4. LIVING BOTANICAL FLORA ('G' / GARDENS) WITH BREEZE MOTION */}
      {/* Left Leaf Sprout */}
      <g className="wog-leaf-left">
        <path
          d="M 24 19 C 18 15 15 8 21.5 4 C 25.5 7.5 25.5 14.5 24 19 Z"
          fill="url(#wogLeafLeft)"
          filter="url(#wogGlow)"
        />
        <path
          d="M 24 19 C 21 15 19.5 9 22.5 5"
          stroke="#FEF08A"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* Right Leaf Sprout */}
      <g className="wog-leaf-right">
        <path
          d="M 24 19 C 30 15 33 8 26.5 4 C 22.5 7.5 22.5 14.5 24 19 Z"
          fill="url(#wogLeafRight)"
          filter="url(#wogGlow)"
        />
        <path
          d="M 24 19 C 27 15 28.5 9 25.5 5"
          stroke="#FEF08A"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* Living Dewdrop Seed Core */}
      <circle cx="24" cy="19.5" r="1.8" fill="#FFF9E6" />
      <circle cx="24" cy="19.5" r="2.8" stroke="#22C55E" strokeWidth="0.7" opacity="0.8" />
    </svg>
  );
}
