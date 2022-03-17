import React from "react";
import img1 from  "../img/1.svg"
import img2 from  "../img/2.svg"
import img3 from  "../img/3.svg"

const Container6 = () => {
    return (
        <div className="container6">
            <div><img src={img1}/><p className="center_text">Plated Cushion</p><p className="center_text2">$ 19.99 USD</p></div>
            <div><img src={img2} alt="" /><p className="center_text">Silver Cushion</p><p className="center_text2">$ 19.99 USD</p></div>
            <div><img src={img3} alt="" /><p className="center_text">Deep Blue Cushion</p><p className="center_text2">$ 19.99 USD</p></div>
        </div>
    )
}
export default Container6;