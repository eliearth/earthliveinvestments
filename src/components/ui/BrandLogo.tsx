import React from "react";

export function BrandLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3"/>
      <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"/>
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"/>
      <g opacity="0.8">
        <line x1="100" y1="30" x2="100" y2="15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="141.4" y1="41.4" x2="151.4" y2="31.4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="170" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="141.4" y1="158.6" x2="151.4" y2="168.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="170" x2="100" y2="185" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="58.6" y1="158.6" x2="48.6" y2="168.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="30" y1="100" x2="15" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="58.6" y1="41.4" x2="48.6" y2="31.4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <rect x="85" y="85" width="30" height="30" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <line x1="100" y1="85" x2="100" y2="115" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="85" y1="100" x2="115" y2="100" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="100" cy="30" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="170" cy="100" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="100" cy="170" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="30" cy="100" r="3" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}
