import Slider from 'rc-slider';
import React, { useState } from 'react';
import 'rc-slider/assets/index.css';

function Slidebar({name, updateToppings, toppings}){
  const newToppings = JSON.parse(JSON.stringify(toppings)); // deep copy state
  const handleChange = newValue => {
    if (newValue != newToppings[name]){
      updateToppings(name, newValue)
    }
  };

  const marks = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };

  return(


    <div style={{ width: 'auto', margin: 'auto' }}>
          <div style={{fontStyle: 'italic', fontFamily: "Times New Roman"}}>{name}</div>
          <div>
          <Slider dots
            marks={marks}
            max={4}
            min={0}
            value={newToppings[name]}
            onChange={handleChange}
            trackStyle={{ backgroundColor: "black", height: 5}}
            railStyle={{ backgroundColor: "lightblue", height: 5}}
            handleStyle={{
              borderColor: "red",
              height: 5,
              width: 5,
              marginTop: 0,
              backgroundColor: "red"
            }}
            
          />
          <br/>
          </div>
    </div>
  )

}

export default Slidebar
