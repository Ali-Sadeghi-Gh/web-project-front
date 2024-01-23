import React from 'react';
import Pizza from './pizza';
import ToppingList from './toppingList';
import Reset from './reset';
import '../../styles/pizza.css'

function Build({toppings, setToppings, resetToppings}) {
  
  const updateToppings = name => {
    let newToppings = JSON.parse(JSON.stringify(toppings)); // deep copy state
    newToppings[name] = !newToppings[name];

    setToppings(newToppings);
    localStorage.setItem("toppings", JSON.stringify(newToppings));
  };

  return (
    <div>
      <Pizza toppings={toppings} />
      <ToppingList toppings={toppings} updateToppings={updateToppings}/>
      <Reset resetToppings={resetToppings}/>
    </div>
  );
};

export default Build;