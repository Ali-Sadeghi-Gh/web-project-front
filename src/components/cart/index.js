import { useState } from 'react';
import Pizza from './build';
import '../../styles/cart.css'

function ShowCart({cart, price}) {
    const addPizza = async (pizza_id) => {
        try {
            const user_token = localStorage.getItem("token");
            data = {
                pizza_id: pizza_id
            }
            const response = await fetch('http://127.0.0.1:8000/cart/add-pizza-from-cart/', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user_token,
              }
            });
            const result = await response.json();
          } 
          catch (error) {
            // Handle any error that occurred during the request
            console.error('Error:', error);
          }
    }
    

    const subPizza = async (pizza_id) => {
        try {
            const user_token = localStorage.getItem("token");
            data = {
                pizza_id: pizza_id
            }
            const response = await fetch('http://127.0.0.1:8000/cart/sub-pizza-from-cart/', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user_token,
              }
            });
            const result = await response.json();
          } 
          catch (error) {
            // Handle any error that occurred during the request
            console.error('Error:', error);
          }
    }
    
    return (
        <div>
        {   
            <div>
            {cart.map((item) => (
                <div>
                    <div className='cart-leftdiv'>
                      <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'red', marginLeft: '70%', marginTop: '20%'}} onClick={subPizza(item['pizza_id'])}> - </button>
                    </div>


                     <div className='cart-middlediv'>
                         <Pizza
                             toppings={item}
                        />    
                        <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', }}>
                            {item['quantity']}: {item['name']}
                        </div>
                    </div>
                    <div className='cart-rightdiv'>
                     <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'green', marginLeft: '5%', marginTop: '20%'}} onClick={addPizza(item['pizza_id'])}> + </button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr
                    style={{
                        color: "black",
                        height: 2,
                        width: '50%',
                        marginLeft: '25%'
                    }}
                    />
                </div>
            ))}
            </div>
        }
        <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', }}>
            Price: {price}
        </div>

        <div className="cart-functions">
            <div className="cart-left-functions">
                <button className="cart-functions-price" disabled>
                    Total Price: {price}T
                </button>
            </div>
            <div className="cart-right-functions">
                <button className="cart-functions-button">
                    Payoff
                </button>
            </div>
        </div>

        <br/>
        <br/>
    </div>
  );
};

export default ShowCart;