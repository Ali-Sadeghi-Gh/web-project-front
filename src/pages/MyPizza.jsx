import ShowMyPizza from '../components/mypizza/index.js'
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { renderMatches } from 'react-router';
import '../styles/mypizza.css'


const MyPizza = () => {
  // const [mypizzas, setMyPizzas] = useState({'mypizza': [{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', pizza_id:1, cheese:2, pepperoni:2 ,price:3}]})  
  const [mypizzas, setMyPizzas] = useState({'mypizza': []})  


  const add_my_pizza_to_cart = async (pizza_id) => {
    console.log(pizza_id)
    try {
      const user_token = localStorage.getItem("token");
      const data = {
          pizza_id: pizza_id
      }
      const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
      const url = main_url + '/cart/add-my-pizza-to-cart/'
      const response = await fetch(url, {//todo
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + user_token,
        }
      });
      alert("Added to cart successfully")
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
}


  const get_my_pizzas = async () => {
        try {
          const user_token = localStorage.getItem("token");
          const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
          const url = main_url + '/cart/get-my-pizzas/'
          const response = await fetch(url, {//todo
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        const result = await response.json();
        setMyPizzas(result);
        } 
        catch (error) {
          console.error('Error:', error);
        }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) get_my_pizzas();
  }, []);

  const handle_rows = (mypizzas) => {
    const rows = []
    console.log(mypizzas['mypizza'])
    for(var i=0; i < mypizzas['mypizza'].length; i++) {
      if (i % 4 == 0) {
        rows.push([])
      }
      rows[Math.floor(i/4)].push(mypizzas['mypizza'][i])
    }
    return rows
  }

  console.log(handle_rows(mypizzas))

  return (
    <div style={{}}>
      {handle_rows(mypizzas).map((row)=>(
        <div className='row'>
          {row.map((pizza)=>(
            <ShowMyPizza
              mypizza={pizza}
              add_my_pizza_to_cart={add_my_pizza_to_cart}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyPizza;
