import { useState } from 'react';
import Pizza from './pizza';
import ToppingList from './toppingList';
import Buttons from './buttons';
import '../../styles/pizza.css'

function Build({toppings, setToppings, resetToppings, addToCart, addToMyPizzas, updatePrice, price, updatePizzaName, pizzaName}) {
  const updateToppings = (name, value) => {
    let newToppings = JSON.parse(JSON.stringify(toppings));
    newToppings[name] = value;

    setToppings(newToppings);
    updatePrice(newToppings);
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
      <div>
        <input placeholder={pizzaName} style={{borderRadius: '16px', textAlign: 'center',width: '15%',marginLeft: '42.5%'}} onChange={ev => updatePizzaName(ev.target.value)}>
        </input>
       </div>
       <br/>
      <Buttons resetToppings={resetToppings} addToCart={addToCart}
       addToMyPizzas={addToMyPizzas} price={price}/>

       
    </div>
  );
};

export default Build;