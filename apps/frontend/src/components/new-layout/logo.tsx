'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
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
      {/* Smoke curl rising from the right arm of the V */}
      <path
        d="M47 14C54 10 56 4.5 51 1.5"
        stroke="#FF8A5C"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Bold V monogram */}
      <path
        d="M12 12L30 48L48 12"
        stroke="url(#vinsmoke-ember)"
        strokeWidth="10.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ember spark */}
      <circle cx="53" cy="23" r="2.2" fill="#FF8A5C" opacity="0.85" />
    </svg>
  );
};
