import React from 'react';
import '../../styles/pizza.css'
import {useState } from "react";
import Slidebar from './slider'

function ToppingList({toppings, updateToppings, isLeft}) {
  const newToppings = JSON.parse(JSON.stringify(toppings)); // deep copy state
  var code_block = null
  if (isLeft){
    code_block = <div>
      <div>
        <div>
          <Slidebar 
          name={'cheese'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'pepperoni'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'olive'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'pineapple'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'mushroom'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
      </div>
    </div>
  }
  else{
    code_block = <div>
            <div>
        <div>
          <Slidebar 
          name={'greenPepper'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'ham'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'bacon'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'sausage'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
        <div>
          <Slidebar 
          name={'tomato'}
          updateToppings = {updateToppings}
          toppings = {toppings}
          />
        </div>
      </div>
    </div>
  }
  return (
    <>
      {code_block}
    </>
  );
};

export default ToppingList;
