import React from "react";
import  nalojenie1 from "../img/nalojenie1.svg"
import nalojenie2 from "../img/nalojenie2.svg"


const Container1 = () => {
    return (
        <div className="container1">
            <div className="box1">
                <img className="nalojenie1"  src={nalojenie1}  />
                <img className="nalojenie2" src={nalojenie2} />
                <div className="spring">
                    <p className="new">new</p>
                    <p className="cushion">Spring Cushion</p>
                    <p className="collection">Collection 2019</p>
                    <button className="buy">buy now</button>
                </div>
            </div>
            <div className="box2" />
        </div>
    )
}
export default Container1;