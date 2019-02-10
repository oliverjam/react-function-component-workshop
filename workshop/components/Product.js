import React from 'react';
import AddToCart from './AddToCart';
import RelatedProducts from './RelatedProducts';

function Product() {
  return (
    <main className="product">
      Product info
      <AddToCart />
      <RelatedProducts />
    </main>
  );
}

export default Product;
