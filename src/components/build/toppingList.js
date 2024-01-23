import React from 'react';
import '../../styles/pizza.css'
import {useState } from "react";

function ToppingList({toppings, updateToppings}) {
  // console.log(toppings)
  const newToppings = JSON.parse(JSON.stringify(toppings)); // deep copy state

  return (
    <div className="list-container" >
      <div className="list">
        <button className={newToppings["cheese"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("cheese")}>Cheese</button>
        <button className={newToppings["pepperoni"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("pepperoni")}>Pepperoni</button>
        <button className={newToppings["olive"] ? "list-item selected" : "list-item" } onClick={() => updateToppings("olive")}>Olive</button>
        <button className={newToppings["pineapple"] ? "list-item selected" : "list-item" } onClick={() => updateToppings("pineapple")}>Pineapple</button>
        <button className={newToppings["mushroom"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("mushroom")}>Mushroom</button>
        <button className={newToppings["greenPepper"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("greenPepper")}>Green Pepper</button>
        <button className={newToppings["ham"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("ham")}>Ham</button>
        <button className={newToppings["bacon"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("bacon")}>Bacon</button>
        <button className={newToppings["sausage"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("sausage")}>Sausage</button>
        <button className={newToppings["tomato"] ? "list-item selected" : "list-item"} onClick={() => updateToppings("tomato")}>Tomato</button>
      </div>
    </div>
  );
};

export default ToppingList;
