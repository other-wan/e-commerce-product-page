
import "./Main.css";
import Product from "./product/Product";
import IMAGES from "../../utils/Images";
import { useContext } from "react";
import SneakerContext from "../../contexts/SneakerContext";
import Gallery from "./gallery/Gallery";

const Main = () => {
    const {sneakers, } = useContext(SneakerContext);


    return ( 
        <main>

            <Gallery 
                pictures={sneakers.pictures}
                iconNext={IMAGES.Next}
                iconPrev={IMAGES.Previous}
            />
            
            <Product 
                iconAdd={IMAGES.Plus}
                iconMinus={IMAGES.Minus}
                iconCart = {IMAGES.CartWhite}
            />

        </main>
     );
}
 
export default Main;
