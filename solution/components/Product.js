import React from 'react';
import AddToCart from './AddToCart';
import RelatedProducts from './RelatedProducts';

function Product({
  id,
  name,
  price,
  stock,
  description,
  // infoUrl,
  imageUrl,
  related,
  addToCart,
}) {
  return (
    <main className="product">
      <h1>{name}</h1>
      <p>{description}</p>
      <AddToCart stock={stock} id={id} name={name} addToCart={addToCart}>
        {price}
      </AddToCart>
      <img src={imageUrl} width="500" alt="" />
      <RelatedProducts products={related} />
    </main>
  );
}

export default Product;
