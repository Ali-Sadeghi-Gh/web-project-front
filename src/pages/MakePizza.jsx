import React, { useState, useEffect } from 'react';
import Build from '../components/build';


function Pizzas() {
  
  const [toppings, setToppings] = useState({
    cheese: false,
    olive: false,
    pineapple: false,
    mushroom: false,
    tomato: false,
    greenPepper: false,
    ham: false,
    bacon: false,
    pepperoni: false,
    sausage: false
  });

  const resetToppings = () => {
    setToppings({
      cheese: false,
      olive: false,
      pineapple: false,
      mushroom: false,
      tomato: false,
      greenPepper: false,
      ham: false,
      bacon: false,
      pepperoni: false,
      sausage: false
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
