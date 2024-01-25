import React from 'react';
import Cheese from "../../assets/images/Cheese.png";
import Crust from "../../assets/images/Crust.png";
import Olive from "../../assets/images/Olive.png";
import Pineapple from "../../assets/images/Pineapple.png";
import Mushroom from "../../assets/images/Mushroom.png";
import Tomato from "../../assets/images/Tomato.png";
import GreenPepper from "../../assets/images/GreenPepper.png";
import Ham from "../../assets/images/Ham.png";
import Bacon from "../../assets/images/Bacon.png";
import Pepperoni from "../../assets/images/Pepperoni.png";
import Sausage from "../../assets/images/Sausage.png";
import {motion} from "framer-motion";
import '../../styles/pizza.css'

function Pizza({toppings}) {
  return (
    <div className="pizza-container">
        <div className="pizza" >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["cheese"] ? 100: 100, opacity: (toppings["cheese"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Cheese} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["pepperoni"] ? 100: 100, opacity: (toppings["pepperoni"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Pepperoni} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["olive"] ? 100: 100, opacity: (toppings["olive"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Olive} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: 100, opacity: (toppings["pineapple"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Pineapple} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["mushroom"] ? 100: 100, opacity: (toppings["mushroom"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Mushroom} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["greenPepper"] ? 100: 100, opacity: (toppings["greenPepper"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={GreenPepper} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["ham"] ? 100: 100, opacity: (toppings["ham"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Ham} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["bacon"] ? 100: 100, opacity: (toppings["bacon"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Bacon} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["sausage"] ? 100: 100, opacity: (toppings["sausage"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Sausage} alt="img" className="pizza-topping-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{y: toppings["tomato"] ? 100: 100, opacity: (toppings["tomato"] != 0) ? 1 : 0}}
            transition={{ duration: 0.5 }}
            className="pizza-topping"
          >
            <img src={Tomato} alt="img" className="pizza-topping-img" />
          </motion.div>
          <img src={Crust} alt="img" className="pizza-topping-img" />
        </div>
      </div>
  );
};

export default Pizza;