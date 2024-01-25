import React, { useState } from 'react';
import Pizza from './pizza';
import ToppingList from './toppingList';
import Reset from './reset';
import '../../styles/pizza.css'

function Build({toppings, setToppings, resetToppings}) {
  const updateToppings = (name, value) => {
    let newToppings = JSON.parse(JSON.stringify(toppings)); // deep copy state
    newToppings[name] = value;

    setToppings(newToppings);
    localStorage.setItem("toppings", JSON.stringify(newToppings));
  };

  return (
    <div>
      <div className='leftdiv'>
        <ToppingList toppings={toppings} updateToppings={updateToppings} isLeft={true}/>
      </div>
      <div className='middlediv'>
        <Pizza toppings={toppings} />
      </div>
      <div className='rightdiv'>
        <ToppingList toppings={toppings} updateToppings={updateToppings} isLeft={false}/>
      </div>      
      <Reset resetToppings={resetToppings}/>
    </div>
  );
};

export default Build;