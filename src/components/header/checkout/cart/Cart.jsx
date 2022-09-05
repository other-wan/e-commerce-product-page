import { useContext } from "react";
import SneakerContext from "../../../../contexts/SneakerContext";
import "./Cart.css";
import { motion } from "framer-motion";

const getPrice = (price, rate) => price * rate;

const Cart = () => {
    const {sneakers, sneakersCount} = useContext(SneakerContext);

    return ( 
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            className="cart">
            <h3 className="cart-title">Cart</h3> 

            { sneakersCount ? 

                <div className="cart-body">

                    <div className="cart-content">
                        <img src="" alt="" />

                        <div className="cart-description">
                            <p>Autumn Limited Edition</p>
                            <p>${getPrice(sneakers.price.original_price, sneakers.price.slashed_rate)} x {sneakersCount}&nbsp;
                                <span>${getPrice(sneakers.price.original_price, sneakers.price.slashed_rate) * sneakersCount}</span>
                            </p>
                        </div>

                        <button className="btn-delete">
                            <img src="" alt="" />
                        </button>

                    </div>

                    <button className="">
                        Checkout
                    </button>

                </div> :

                <h5>Your cart is empty</h5>
            }

        </motion.div>
     );
}
 
export default Cart;
