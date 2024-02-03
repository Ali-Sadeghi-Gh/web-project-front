import { useState } from 'react';
import Pizza from './build';
import '../../styles/mypizza.css'

function ShowMyPizza({mypizza}) {
    return (
        <div className="column">
            <div className="pizza-box">
                <Pizza
                    toppings={mypizza}
                />    
                <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', fontSize: 20, }}>
                    name: {mypizza['name']}
                    <br/>
                    price: {mypizza['price']}
                </div>
            </div>
            <div className="overlay-mypizza">
                <div className="text-mypizza">coffee shop</div>
            </div>
        </div>
  );
};

export default ShowMyPizza;