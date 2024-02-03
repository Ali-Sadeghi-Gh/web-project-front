import { useState } from 'react';
import Pizza from './build';
import '../../styles/mypizza.css'

function ShowMyPizza({mypizza, add_my_pizza_to_cart}) {
    return (
        // <div className="column">
        //     <div className="pizza-box">
        //         <Pizza
        //             toppings={mypizza}
        //         />    
        //         <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', fontSize: 20, }}>
        //             name: {mypizza['name']}
        //             <br/>
        //             price: {mypizza['price']}
        //         </div>
        //     </div>
        // </div>
        <div class="column">
                <div class="box-pizza">
                    <div class="container-pizza" onClick={() => add_my_pizza_to_cart(mypizza['pizza_id'])}>
                     <Pizza
                         toppings={mypizza}
                     />    
                    <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', fontSize: 20}}>
                        name: {mypizza['name']}
                        <br/>
                        price: {mypizza['price']}
                    </div>
                    <div class="overlay-pizza">
                        <div class="text-pizza"> Add to cart </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ShowMyPizza;