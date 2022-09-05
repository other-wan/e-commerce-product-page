
import Cart from "./cart/Cart";
import "./Checkout.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


const Checkout = ({iconCart, imageAvatar}) => {

    const [showCart, setShowCart] = useState(false);

    const toggleShowCart = () => setShowCart(prev => !prev)

    return ( 
        <div className="checkout-container">
            <div className="checkout container-end">

                <img 
                    className="cart-img" 
                    src={iconCart} 
                    alt="Cart" 
                    onClick={toggleShowCart} />

                <img 
                    className="avatar-img" 
                    src={imageAvatar} 
                    alt="Avatar" />

            </div>
            
            <AnimatePresence>
                { showCart && <Cart /> }
            </AnimatePresence>

        </div>
     );
}
 
export default Checkout;