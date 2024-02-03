import React from 'react';
import Cheese1 from "../../assets/images/Cheese_1.png";
import Cheese2 from "../../assets/images/Cheese_2.png";
import Cheese3 from "../../assets/images/Cheese_3.png";
import Cheese4 from "../../assets/images/Cheese_4.png";
import Pepperoni1 from "../../assets/images/Pepperoni_1.png";
import Pepperoni2 from "../../assets/images/Pepperoni_2.png";
import Pepperoni3 from "../../assets/images/Pepperoni_3.png";
import Pepperoni4 from "../../assets/images/Pepperoni_4.png";
import Olive1 from "../../assets/images/Olive_1.png";
import Olive2 from "../../assets/images/Olive_2.png";
import Olive3 from "../../assets/images/Olive_3.png";
import Olive4 from "../../assets/images/Olive_4.png";
import Corn1 from "../../assets/images/Corn_1.png";
import Corn2 from "../../assets/images/Corn_2.png";
import Corn3 from "../../assets/images/Corn_3.png";
import Corn4 from "../../assets/images/Corn_4.png";
import Crust from "../../assets/images/Crust.png";
import Mushroom1 from "../../assets/images/Mushroom_1.png";
import Mushroom2 from "../../assets/images/Mushroom_2.png";
import Mushroom3 from "../../assets/images/Mushroom_3.png";
import Mushroom4 from "../../assets/images/Mushroom_4.png";
import GreenPepper1 from "../../assets/images/GreenPepper_1.png";
import GreenPepper2 from "../../assets/images/GreenPepper_2.png";
import GreenPepper3 from "../../assets/images/GreenPepper_3.png";
import GreenPepper4 from "../../assets/images/GreenPepper_4.png";
import Jambon1 from "../../assets/images/Jambon_1.png";
import Jambon2 from "../../assets/images/Jambon_2.png";
import Jambon3 from "../../assets/images/Jambon_3.png";
import Jambon4 from "../../assets/images/Jambon_4.png";
import Bacon1 from "../../assets/images/Bacon_1.png";
import Bacon2 from "../../assets/images/Bacon_2.png";
import Bacon3 from "../../assets/images/Bacon_3.png";
import Bacon4 from "../../assets/images/Bacon_4.png";
import Sausage1 from "../../assets/images/Sausage_1.png";
import Sausage2 from "../../assets/images/Sausage_2.png";
import Sausage3 from "../../assets/images/Sausage_3.png";
import Sausage4 from "../../assets/images/Sausage_4.png";
import Tomato1 from "../../assets/images/Tomato_1.png";
import Tomato2 from "../../assets/images/Tomato_2.png";
import Tomato3 from "../../assets/images/Tomato_3.png";
import Tomato4 from "../../assets/images/Tomato_4.png";
import {motion} from "framer-motion";
import '../../styles/pizza.css'

function Pizza({toppings}) {
  return (
    <div className="pizza-container">
        <div className="pizza" >
          <> {/* cheese */}
            <motion.div
              animate={{ y: 100, opacity: (toppings["cheese"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Cheese1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["cheese"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Cheese2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["cheese"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Cheese3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["cheese"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Cheese4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* pepperoni */}
            <motion.div
              animate={{ y: 100, opacity: (toppings["pepperoni"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Pepperoni1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["pepperoni"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Pepperoni2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["pepperoni"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Pepperoni3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{ y: 100, opacity: (toppings["pepperoni"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Pepperoni4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* olive */}
            <motion.div
              animate={{y: 100, opacity: (toppings["olive"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Olive1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["olive"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Olive2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["olive"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Olive3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["olive"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Olive4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* corn */}
            <motion.div
              animate={{y: 100, opacity: (toppings["corn"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Corn1} alt="img" className="pizza-topping-img" />
            </motion.div><motion.div
              animate={{y: 100, opacity: (toppings["corn"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Corn2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["corn"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Corn3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["corn"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Corn4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* mashroom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{y: 100, opacity: (toppings["mushroom"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Mushroom1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{y: 100, opacity: (toppings["mushroom"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Mushroom2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{y: 100, opacity: (toppings["mushroom"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Mushroom3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{y: 100, opacity: (toppings["mushroom"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Mushroom4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* greenPapper */}
            <motion.div
              animate={{y: 100, opacity: (toppings["greenPepper"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
            <img src={GreenPepper1} alt="img" className="pizza-topping-img" />
            </motion.div>
              <motion.div
                animate={{y: 100, opacity: (toppings["greenPepper"] == 2) ? 1 : 0}}
                transition={{ duration: 0 }}
                className="pizza-topping"
              >
              <img src={GreenPepper2} alt="img" className="pizza-topping-img" />
            </motion.div>
              <motion.div
                animate={{y: 100, opacity: (toppings["greenPepper"] == 3) ? 1 : 0}}
                transition={{ duration: 0 }}
                className="pizza-topping"
              >
              <img src={GreenPepper3} alt="img" className="pizza-topping-img" />
            </motion.div>
              <motion.div
                animate={{y: 100, opacity: (toppings["greenPepper"] == 4) ? 1 : 0}}
                transition={{ duration: 0 }}
                className="pizza-topping"
              >
              <img src={GreenPepper4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* jambon */}
            <motion.div
              animate={{y: 100, opacity: (toppings["jambon"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Jambon1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["jambon"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Jambon2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["jambon"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Jambon3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["jambon"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Jambon4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* bacon */}
            <motion.div
              animate={{y: 100, opacity: (toppings["bacon"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Bacon1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["bacon"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Bacon2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["bacon"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Bacon3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["bacon"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Bacon4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* sausage */}
            <motion.div
              animate={{y: 100, opacity: (toppings["sausage"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Sausage1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["sausage"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Sausage2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["sausage"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Sausage3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["sausage"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Sausage4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <> {/* tomato */}
            <motion.div
              animate={{y: 100, opacity: (toppings["tomato"] == 1) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Tomato1} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["tomato"] == 2) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Tomato2} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["tomato"] == 3) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Tomato3} alt="img" className="pizza-topping-img" />
            </motion.div>
            <motion.div
              animate={{y: 100, opacity: (toppings["tomato"] == 4) ? 1 : 0}}
              transition={{ duration: 0 }}
              className="pizza-topping"
            >
              <img src={Tomato4} alt="img" className="pizza-topping-img" />
            </motion.div>
          </>
          <img src={Crust} alt="img" className="pizza-topping-img" />
        </div>
      </div>
  );
};

export default Pizza;
