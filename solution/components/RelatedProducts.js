import React from 'react';

function RelatedProducts({ products }) {
  return (
    <ul className="related">
      {products.map(product => (
        <li key={product.id}>
          <figure>
            <figcaption>{product.name}</figcaption>
            <img src={product.imageUrl} alt="" />
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default RelatedProducts;
