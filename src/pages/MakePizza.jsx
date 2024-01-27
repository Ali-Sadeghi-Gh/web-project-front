import React, { useState, useEffect } from 'react';
import Build from '../components/build';


function Pizzas() {
  const [price, setPrice] = useState(20000)
  const [pizzaName, setPizzaName] = useState("")

  const [toppings, setToppings] = useState({
    cheese: 0,
    olive: 0,
    corn: 0,
    mushroom: 0,
    tomato: 0,
    greenPepper: 0,
    jambon: 0,
    bacon: 0,
    pepperoni: 0,
    sausage: 0,
  });

  const resetToppings = () => {
    setToppings({
      cheese: 0,
      olive: 0,
      corn: 0,
      mushroom: 0,
      tomato: 0,
      greenPepper: 0,
      jambon: 0,
      bacon: 0,
      pepperoni: 0,
      sausage: 0,
    });
    setPrice(20000);
    setPizzaName('my pizza')
    localStorage.clear();
  };

  useEffect(() => {
    // load toppings saved from local storage
    const data = localStorage.getItem("toppings");
    if (data)
      setToppings(JSON.parse(data));
  }, []);

  useEffect(() => {
    // load price saved from local storage
    const data = localStorage.getItem("price");
    if (data)
      setPrice(JSON.parse(data));
  }, []);

  useEffect(() => {
    // load price saved from local storage
    const data = localStorage.getItem("pizzaName");
    if (data)
      setPizzaName(JSON.parse(data));
  }, []);

  const updatePrice = async (newToppings) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/shop/calculate-price/', {
        method: 'POST',
        body: JSON.stringify(newToppings),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      const price = result["price"]
      let newPrice = price
      setPrice(newPrice);
      localStorage.setItem("price", JSON.stringify(newPrice));
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
  }


  const updatePizzaName = (value) => {
    setPizzaName(value);
    localStorage.setItem("pizzaName", JSON.stringify(value));
  }

  const addToCart = () => {
    //todo
  }

  const addToMyPizzas = () => {
    //todo
  }


  return (
    <div className="App">
      <Build
          toppings={toppings}
          setToppings={setToppings}
          resetToppings={resetToppings}
          addToCart={addToCart}
          addToMyPizzas={addToMyPizzas}
          updatePrice={updatePrice}
          price={price}
          updatePizzaName={updatePizzaName}
          pizzaName={pizzaName}
      />
    </div>
  );
}

export default Pizzas;


