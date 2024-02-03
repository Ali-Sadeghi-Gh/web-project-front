import React, { useEffect } from "react";
import '../styles/sendpage.css'
import ImageUrl from "../assets/images/delivery2.gif";
import { useState } from "react";

const SendPage = () => {
  const [flipped, setFlipped] = useState(false);
  var [image_block, setImageBlock] = useState(<img src={ImageUrl} alt="loading..." className="sendpage-image" />);
  
  const handleImageClick = () => {
    console.log(flipped)
    setFlipped(!flipped); // Toggle the flipped state
    if (flipped)

        setImageBlock(<img src={ImageUrl} alt="loading..." className="sendpage-image" />)
    else
        setImageBlock(
            <img src={ImageUrl} alt="loading..." className="sendpage-image flippable-style" />)
  };

  return (
    <div>
        <div className="sendpage-image-container" onClick={handleImageClick}>
              {image_block}
        </div>
        <div className="text-style">
                Thanks for your choice. Will send it soon...
        </div>
    </div>
    
  );

  
};



export default SendPage;
