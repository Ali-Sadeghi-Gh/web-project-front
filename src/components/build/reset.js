import React from 'react';
import '../../styles/pizza.css'

function Functions({resetToppings}) {
  
  return (
    <div className="functions">
        <button className="functions-reset" onClick={() => resetToppings()}>
          Reset Pizza
        </button>
    </div>
  );
};

export default Functions;
