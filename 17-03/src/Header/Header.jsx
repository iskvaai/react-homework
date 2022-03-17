import React from "react";
import mariella from '../img/mariella.svg';
import mari5 from '../img/icon.svg';
import mr1 from "../img/m1.svg"

const Header = () => {
    return (
        <header>

            <img className="mariella-photo"  src={mariella}  />
            <nav>
                <ul>
                    <li className="mari1">Home</li>
                    <li className="mari2">About me</li>
                    <li className="mari3">Products</li>
                    <li className="mari4">Contact me</li>
                    <li className="mari5"><img id="icon" src={mari5} /></li>
                </ul>
            </nav>
        </header>


    )
}



export default Header;