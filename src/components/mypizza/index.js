import { useState } from 'react';
// import Pizza from './build';
import '../../styles/mypizza.css'

function ShowMyPizza({mypizza}) {
    return (
        <div className='row'>
            <div className="column">
                <div className="box-gallery">
                    <div className="container-gallery">
                    <img src="../../assets/images/gallary2.jpg" alt="image" class="image-gallery"></img>
                    <div className="overlay-gallery"></div>
                        <div className="text-gallery">coffee shop</div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ShowMyPizza;