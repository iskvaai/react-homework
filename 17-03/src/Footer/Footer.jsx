import React from "react";
import icons1 from "../img/icon1.svg"
import icons2 from "../img/icon2.svg"
import icons3 from "../img/icon3.svg"
import mr1 from "../img/m1.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer_block">
                <div className="icons_footer">
                    <div>
                        <img className="icons1" src={icons1} alt="" />
                        <p className="footer_text f1">Safe shopping</p>
                        <p className="footer_text1 f1 ">Buy with confidence</p>
                    </div>
                    <div>
                        <img className="icons2" src={icons2}alt="" />
                        <p className="footer_text f1">Fast shipping</p>
                        <p className="footer_text1 f1">Get your product fast</p>
                    </div>
                    <div>
                        <img className="icons3" src={icons3} alt="" />
                        <p className="footer_text f1">Satisfaction guarantee</p>
                        <p className="footer_text1 f1 ">Or get your money back</p>
                    </div>
                </div>

                <div className="blog-footer">

                    <img className="" src={mr1} alt="" />


                    <nav>
                        <ul>
                            <li className="mari1 m1">Home</li>
                            <li className="mari2 m1">About me</li>
                            <li className="mari3 m1">Products</li>
                            <li className="mari4 m1">Contact me</li>
                        </ul>
                    </nav>
                </div>

                    </div>


        </footer>
    )
}
export default Footer;