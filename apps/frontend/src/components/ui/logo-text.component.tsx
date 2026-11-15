import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="101"
      height="33"
      viewBox="0 0 101 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="vinsmoke-ember"
          x1="10"
          y1="10"
          x2="50"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A5C" />
          <stop offset="0.55" stopColor="#F04E23" />
          <stop offset="1" stopColor="#D63E14" />
        </linearGradient>
      </defs>
      {/* V monogram + smoke curl, same mark as Logo, scaled to 24px */}
      <g transform="translate(0 4) scale(0.4)">
        <path
          d="M47 14C54 10 56 4.5 51 1.5"
          stroke="#FF8A5C"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M12 12L30 48L48 12"
          stroke="url(#vinsmoke-ember)"
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="53" cy="23" r="2.2" fill="#FF8A5C" opacity="0.85" />
      </g>
      <text
        x="29"
        y="15.5"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="13.5"
        fontWeight="800"
        fill="currentColor"
      >
        Vinsmoke
      </text>
      <text
        x="29.5"
        y="27.5"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="2.4"
        fill="currentColor"
        opacity="0.6"
      >
        MEDIA
      </text>
    </svg>
  );
};
