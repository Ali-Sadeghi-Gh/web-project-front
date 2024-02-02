import ShowMyPizza from '../components/mypizza/index.js'
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const MyPizza = () => {
  const [mypizza, setMyPizza] = useState(
    {'mypizza': []})
  

  const add_pizza_to_my_pizza = async (pizza_id) => {
      try {
        } 
        catch (error) {
          // Handle any error that occurred during the request
        }
  }


  const delete_pizza_from_my_pizza = async (pizza_id) => {
      try {
        } 
        catch (error) {
        }
  }


  const get_my_pizzas = async () => {
        try {
        } 
        catch (error) {
        }
  }

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token)
//     getMyPizzas();
//   }, []);

  return (
    <ShowMyPizza
        mypizza={mypizza}
    />
  );
};

export default MyPizza;
