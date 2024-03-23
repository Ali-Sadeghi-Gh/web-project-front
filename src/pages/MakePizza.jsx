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
    localStorage.removeItem('price')
    localStorage.removeItem('toppings')
  };

  useEffect(() => {
    const data = localStorage.getItem("toppings");
    if (data)
      setToppings(JSON.parse(data));
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("price");
    if (data)
      setPrice(JSON.parse(data));
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("pizzaName");
    if (data)
      setPizzaName(JSON.parse(data));
  }, []);

  const updatePrice = async (newToppings) => {
    try {
      const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
      const url = main_url + '/shop/calculate-price/'
      const response = await fetch(url, {
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

  const addToCart = async () => {
    try {
      const user_token = localStorage.getItem("token");
      const pizza_name = localStorage.getItem("pizzaName");
      const data = {
        cheese: toppings['cheese'],
        pepperoni: toppings['pepperoni'],
        olive: toppings['olive'],
        corn: toppings['corn'],
        mushroom: toppings['mushroom'],
        greenPepper: toppings['greenPepper'],
        jambon: toppings['jambon'],
        bacon: toppings['bacon'],
        sausage: toppings['sausage'],
        tomato: toppings['tomato'],
        name: pizza_name
      }
      const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
      const url = main_url + '/cart/add-pizza-to-cart/'
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + user_token,
        }
      });
      console.log('added successfully')

      setPizzaName('')
      localStorage.removeItem('pizzaName')
      resetToppings()
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
  }

  const addToMyPizzas = async () => {
    try {
      const user_token = localStorage.getItem("token");
      const pizza_name = localStorage.getItem("pizzaName");
      const data = {
        cheese: toppings['cheese'],
        pepperoni: toppings['pepperoni'],
        olive: toppings['olive'],
        corn: toppings['corn'],
        mushroom: toppings['mushroom'],
        greenPepper: toppings['greenPepper'],
        jambon: toppings['jambon'],
        bacon: toppings['bacon'],
        sausage: toppings['sausage'],
        tomato: toppings['tomato'],
        name: pizza_name
      }
      const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
      const url = main_url + '/cart/add-to-my-pizza/'
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + user_token,
        }
      });
      console.log('added successfully')

      setPizzaName('')
      localStorage.removeItem('pizzaName')
      resetToppings()
    } 
    catch (error) {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    }
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


