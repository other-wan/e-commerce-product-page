
import { useState } from "react";
import "./Navbar.css";


const Navbar = ({menuIcon, logoIcon, closeIcon}) => {
    const [active, setActive] = useState(false);

    return ( 
        <nav className="navbar">
            <div className="container-start toggle-container">

                <button 
                    onClick={() => setActive(prev => !prev)} 
                    className={"sidebar-toggle-btn" + (active ? " active" : "")}>

                    <img className="open" src={menuIcon} alt="Menu" />
                    <img className="close" src={closeIcon} alt="Close" />

                </button>

                <a href="/" id="logo-container">
                    <img src={logoIcon} alt="Sneaker" />
                </a>
                
            </div>

            <div className={"nav-list-container" + (active ? " active" : "")}>

                <ul className="nav-list">

                    <li className="nav-item">
                        <a href="/">Collections</a>
                    </li>

                    <li className="nav-item">
                        <a href="/">Men</a>
                    </li>

                    <li className="nav-item">
                        <a href="/">Women</a>
                    </li>

                    <li className="nav-item">
                        <a href="/">About</a>
                    </li>

                    <li className="nav-item">
                        <a href="/">Contact</a>
                    </li>

                </ul>

            </div>

        </nav>
     );
}
 
export default Navbar;

