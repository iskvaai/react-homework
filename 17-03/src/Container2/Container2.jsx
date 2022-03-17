import React from "react";
import foto1 from  "../img/photo1.svg"
import foto2 from  "../img/photo2.svg"
import keyboard from  "../img/photo3.svg"

const Container2 = () => {
    return (
        <>
            <div className="container2">
                <p className="designer">I'm a cushion designer</p>
                <p className="California">Based in San Francisco, California I design trendy and fashion Cushions, <br />
                    since I have memory I always had a tendency to design and illustration.</p>
                <button className="learn_more">Learn More</button>
                <div className="box3">
                    <img className="foto1" src={foto1}  />
                    <img className="foto2"  src={foto2} />
                    <img className="keyboard"  src={keyboard} />
                </div>
            </div>
            <div className="box4">
                <div className="first">
                    <p className="me">About me</p>
                    <p className="more">Learn more</p>
                </div>
                <div className="second">
                    <p className="me">My products</p>
                    <p className="more">Learn more</p>
                </div>
                <div className="third">
                    <p className="me">Contact me</p>
                    <p className="more">Learn more</p>
                </div>
            </div>
       </>
    )
}
export default Container2;