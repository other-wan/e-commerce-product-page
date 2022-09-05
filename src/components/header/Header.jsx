
import "./Header.css";
import IMAGES  from "../../utils/Images";
import Navbar from "./navbar/Navbar";
import Checkout from "./checkout/Checkout";


const Header = () => {
    return ( 
        <header className="container-between">
            <Navbar 
                menuIcon={IMAGES.Menu}
                logoIcon={IMAGES.Logo}
                closeIcon={IMAGES.Close}
                />

            <Checkout
                iconCart={IMAGES.Cart}
                imageAvatar={IMAGES.Avatar}
                />
        </header>
     );
}
 
export default Header;
