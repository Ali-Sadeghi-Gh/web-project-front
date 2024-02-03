import ShowCart from '../components/cart/index.js'
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();
  const [my_cart, set_my_cart] = useState(
    {'cart': [], 
      'price': 0})
  
  const onclick_payoff = async () => {
      try {
        const user_token = localStorage.getItem("token");
        const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
        const url = main_url + '/order/order/'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({}),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        navigate('/send');
      } 
      catch (error) {
        // Handle any error that occurred during the request
        console.error('Error:', error);
      }
  }



  const getActiveCart = async () => {
    try {
      const user_token = localStorage.getItem("token");
      const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
      const url = main_url + '/cart/get-active-cart/'
      const response = await fetch(url, {
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

  const addPizza = async (pizza_id) => {
    try {
        const user_token = localStorage.getItem("token");
        const data = {
            pizza_id: pizza_id
        }
        const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
        const url = main_url + '/cart/add-exits-pizza-to-cart/'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        getActiveCart()
      } 
      catch (error) {
        // Handle any error that occurred during the request
        console.error('Error:', error);
      }
}


const subPizza = async (pizza_id) => {
    try {
        const user_token = localStorage.getItem("token");
        const data = {
            pizza_id: pizza_id
        }

        const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
        const url = main_url + '/cart/sub-exits-pizza-from-cart/'
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        getActiveCart()
      } 
      catch (error) {
        // Handle any error that occurred during the request
        console.error('Error:', error);
      }
}


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getActiveCart();
  }, []);

  return (
    <ShowCart
      cart={my_cart['cart']}
      price={my_cart['price']}
      subPizza={subPizza}
      addPizza={addPizza}
      onclick_payoff={onclick_payoff}
    />
  );
};

export default Cart;
