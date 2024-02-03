import { useState } from 'react';
import Pizza from './build';
import '../../styles/cart.css'

function ShowCart({cart, price, onclick_payoff, addPizza, subPizza}) {
    return (
        <div>
        {   
            <div>
            {cart.map((item) => (
                <div>
                    <div className='cart-leftdiv'>
                      <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'red', marginLeft: '70%', marginTop: '20%'}} onClick={() => subPizza(item['pizza_id'])}> - </button>
                    </div>


                     <div className='cart-middlediv'>
                         <Pizza
                             toppings={item}
                        />    

                        <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', marginTop: '1%'}}>
                            name: {item['name']}
                        </div>
                        <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', }}>
                            quantity: {item['quantity']}
                        </div>
                    </div>
                    <div className='cart-rightdiv'>
                     <button  style={{borderRadius: '16px', width:'20%', height: '50%', textAlign: 'center', backgroundColor: 'green', marginLeft: '5%', marginTop: '20%'}} onClick={() => addPizza(item['pizza_id'])}> + </button>
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
                <button className="cart-functions-button" onClick={onclick_payoff}>
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