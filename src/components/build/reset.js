import React from 'react';
import '../../styles/pizza.css'

function Functions({resetToppings}) {
  
  return (
    <div className="functions">
      <div className="left-functions">
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
      </div>
      <div className="right-functions">
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
      </div>
    </div>
  );
};

export default Functions;
