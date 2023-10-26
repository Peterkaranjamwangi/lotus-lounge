import React from 'react';


import { ProductItem } from '../../components';
import './Items.css';

const Items = ({ products }) => {
    return (
      <div className="carousel-items">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  };


export default Items;