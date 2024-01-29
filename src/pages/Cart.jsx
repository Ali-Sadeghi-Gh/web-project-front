import ShowCart from '../components/cart/index.js'
import React from "react";

const Cart = () => {
  const my_cart = {
    1: {
      'name': 'my pizza',
      'number': 1,
      'cheese': 1,
    },
    2: {
      'name': 'my pizza',
      'number': 1,
      'cheese': 2,
    },
    3: {
      'name': 'my pizza',
      'number': 1,
      'cheese': 3,
    },

    4: {
      'name': 'my pizza',
      'number': 1,
      'cheese': 4,
    }
  }
  return (
    <ShowCart 
      cart={my_cart}
    />
  );
};

export default Cart;
