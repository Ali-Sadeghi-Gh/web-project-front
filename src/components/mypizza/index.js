import { useState } from 'react';
import Pizza from './build';
import '../../styles/mypizza.css'

function ShowMyPizza({mypizza}) {
    return (
        <div className="column">
            <Pizza
                toppings={mypizza}
            />    
            <div style={{textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', }}>
                {mypizza['name']}
            </div>
            {/* <div class="overlay_gallery">
                <div class="text_gallery">coffee shop</div>
            </div> */}
        </div>
  );
};

export default ShowMyPizza;