import ShowCart from '../components/cart/index.js'
import React from "react";
import { useState } from 'react';

const Cart = () => {

  const [my_cart, set_my_cart] = useState(
    {'cart': [], 
    'price': 0})

  const getActiveCart = async () => {
    try {
      const user_token = localStorage.getItem("token");
      const response = await fetch('http://127.0.0.1:8000/cart/get-active-cart/', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + user_token,
        }
      });

      const result = await response.json();
      const cart = result["cart"]
      set_my_cart(cart)
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
    
  }

  
  useEffect(() => {
    getActiveCart();
  }, []);
  
  return (
    <ShowCart
      cart={my_cart['cart']}
      price={my_cart['price']}
    />
  );
};

export default Cart;
