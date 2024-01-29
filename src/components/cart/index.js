import { useState } from 'react';
import Pizza from './build';
import '../../styles/cart.css'

function ShowCart({cart}) {
    const addPizza = (key) => {
        // todo
    }

    const subPizza = (key) => {
        // todo
    }
  return (
    <div>
        {     
        Object.keys(cart).map((key, index) => ( 
         <div>
            <div className='cart-leftdiv'>
                <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'red', marginLeft: '40%', marginTop: '20%'}} onClick={subPizza(key)}> - </button>
            </div>

            <div className='cart-middlediv'>

                <Pizza 
                    toppings={cart[key]}
                />
                <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', }}>
                    {cart[key]['name']}: {cart[key]['number']}
                </div>
                
            </div>

            <div className='cart-rightdiv'>
            <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'green', marginLeft: '40%', marginTop: '20%'}} onClick={addPizza(key)}> + </button>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>

            
         </div>       
        ))
        }
        <div>
            Price
        </div>
    </div>
  );
};

export default ShowCart;