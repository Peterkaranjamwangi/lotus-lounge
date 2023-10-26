import React from 'react';


import './ProductItem.css';

const ProductItem = ({ product }) => {
    return (
      <div className="product-item">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </div>
    );
  };


export default ProductItem;