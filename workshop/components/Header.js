import React from 'react';

function Header() {
  return (
    <header className="header">
      <svg
        viewBox="0 0 32 32"
        width="48"
        height="48"
        fill="none"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M2 16 a12 12 0 0 0 28 0 z" />
        <path d="M8 4 l16 14 a4 4 0 0 1 -6 6 l-14 -16 z" />
      </svg>
      <span>Dip Depot</span>
    </header>
  );
}

export default Header;
