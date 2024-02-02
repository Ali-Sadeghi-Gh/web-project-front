import React, { useEffect } from "react";
import '../styles/sendpage.css'
import ImageUrl from "../assets/images/delivery2.gif";
import { useState } from "react";
import {motion} from "framer-motion";

const SendPage = () => {
  const [flipped, setFlipped] = useState(false);
  var [image_block, setImageBlock] = useState(<img src={ImageUrl} alt="loading..." className="sendpage-image" />);
  
  const handleImageClick = () => {
    console.log(flipped)
    setFlipped(!flipped); // Toggle the flipped state
    if (flipped)

        setImageBlock(
        <div>
            <img src={ImageUrl} alt="loading..." className="sendpage-image" />
            <div className="text-style">
                Will send soon...
            </div>
        </div>
        )
    else
        setImageBlock(<div>
            <img src={ImageUrl} alt="loading..." className="sendpage-image flippable-style" />
            <div className="text-style flippable-style">
                Will send soon...
            </div>
        </div>)
  };


  


  return (
    <div>
        <div className="sendpage-image-container" onClick={handleImageClick}>
              {image_block}
        </div>
    </div>
    
  );

  
};



export default SendPage;
