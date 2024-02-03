import ShowMyPizza from '../components/mypizza/index.js'
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { renderMatches } from 'react-router';
import '../styles/mypizza.css'


const MyPizza = () => {
  const [mypizzas, setMyPizzas] = useState({'mypizza': [{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3},{name: 'my', id:1, cheese:2, pepperoni:2 ,price:3}]})  

  // const add_pizza_to_my_pizza = async (pizza_id) => {
  //     try {
  //       const user_token = localStorage.getItem("token");
  //       const data = {
  //           pizza_id: pizza_id
  //       }
  //       const response = await fetch('${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/myPizza/add-pizza-to-my-pizza/', {//todo
  //         method: 'POST',
  //         body: JSON.stringify(data),
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Token ' + user_token,
  //         }
  //       });
  //       const result = await response.json();
  //       get_my_pizzas()
  //     } 
  //     catch (error) {
  //       // Handle any error that occurred during the request
  //       console.error('Error:', error);
  //     }
  // }

  const add_my_pizza_to_cart = async (pizza_id) => {
    try {
      const user_token = localStorage.getItem("token");
      const data = {
          pizza_id: pizza_id
      }
      const response = await fetch('${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/myPizza/add-my-pizza-to-cart/', {//todo
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + user_token,
        }
      });
      const result = await response.json();
      get_my_pizzas()
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
}


  const delete_pizza_from_my_pizza = async (pizza_id) => {
      try {
        const user_token = localStorage.getItem("token");
        const data = {
            pizza_id: pizza_id
        }
        const response = await fetch('${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/cart/delete-pizza-from-my-pizza/', {//todo
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        const result = await response.json();
        get_my_pizzas()
        } 
        catch (error) {
          console.error('Error:', error);
        }
  }


  const get_my_pizzas = async () => {
        try {
          const user_token = localStorage.getItem("token");
          const response = await fetch('${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/cart/get-my-pizzas/', {//todo
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + user_token,
          }
        });
        const result = await response.json();
        setMyPizzas(result);//todo
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
    for(var i=0; i < mypizzas['mypizza'].length; i++) {
      if (i % 4 == 0) {
        rows.push([])
      }
      rows[Math.floor(i/4)].push(mypizzas['mypizza'][i])
    }
    return rows
  }


  return (
    <>
      {handle_rows(mypizzas).map((row)=>(
        <div className='row'>
          {row.map((pizza)=>(
            <ShowMyPizza
              mypizza={pizza}
            />  
          ))}
        </div>
      ))}
    </>
  );
};

export default MyPizza;
