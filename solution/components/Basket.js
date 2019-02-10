import React from 'react';

function Basket({ items = [] }) {
  const total = items.reduce((total, item) => total + item.price * item.qty, 0);
  return (
    items.length > 0 && (
      <aside className="basket">
        <header>
          <h2>Basket</h2>
          <svg
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          >
            <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
            <circle cx="25" cy="27" r="2" />
            <circle cx="12" cy="27" r="2" />
          </svg>
        </header>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} x {item.qty}
            </li>
          ))}
        </ul>
        <strong>Total £{total / 100}</strong>
      </aside>
    )
  );
}

export default Basket;
