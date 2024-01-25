import React, { useState, useEffect } from 'react';
import Build from '../components/build';


function Pizzas() {
  
  const [toppings, setToppings] = useState({
    cheese: 0,
    olive: 0,
    pineapple: 0,
    mushroom: 0,
    tomato: 0,
    greenPepper: 0,
    ham: 0,
    bacon: 0,
    pepperoni: 0,
    sausage: 0
  });

  const resetToppings = () => {
    setToppings({
      cheese: 0,
      olive: 0,
      pineapple: 0,
      mushroom: 0,
      tomato: 0,
      greenPepper: 0,
      ham: 0,
      bacon: 0,
      pepperoni: 0,
      sausage: 0
    });
    localStorage.clear();
  };
  useEffect(() => {
    // load toppings saved from local storage
    const data = localStorage.getItem("toppings");
    if (data)
      setToppings(JSON.parse(data));
  }, []);

  return (
    <div className="App">
      <Build
          toppings={toppings}
          setToppings={setToppings}
          resetToppings={resetToppings}
      />
    </div>
  );
}

export default Pizzas;


