import React from 'react';
import '../../styles/pizza.css'

function Functions({resetToppings, addToCart, addToMyPizzas, price}) {
  return (
    <div className="functions">
      <div className="left-functions">
        <button className="functions-price" disabled>
            Price: {price}T
        </button>
        <button className="functions-button" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
      </div>
      <div className="right-functions">
        <button className="functions-button" onClick={() => addToCart()}>
          Add to cart
        </button>
        <button className="functions-button" onClick={() => addToMyPizzas()}>
          Add to my pizzas
        </button>
      </div>
    </div>
  );
};

export default Functions;
