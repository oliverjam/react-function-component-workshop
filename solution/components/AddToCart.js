import React from 'react';

function Quantity({ stock }) {
  const options = Array.from({ length: stock }, (_, i) => i + 1);
  return (
    <select name="quantity">
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function AddToCart({ children, stock, id, name, addToCart }) {
  function handleSubmit(event) {
    event.preventDefault();
    const qty = parseInt(event.target.elements.quantity.value, 10);
    addToCart({ id, name, price: children, qty });
  }
  return (
    <div>
      <span>£{children / 100}</span>
      <form onSubmit={handleSubmit}>
        <div>{stock > 0 ? <Quantity stock={stock} /> : 'Sold out'}</div>
        <button type="submit" disabled={stock < 1}>
          + Cart
        </button>
      </form>
    </div>
  );
}

export default AddToCart;
