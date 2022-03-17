import React from "react";
import Header from "./Header/Header";
import Container1 from "./Container1/Container1";
import Container2 from "./Container2/Container2";
import Container3 from "./Container3/Container3";
import Container4 from "./Container4/Container4";
import Container5 from "./Container5/Container5";
import Container6 from "./Container6/Container6";
import Container7 from "./Container7/Container7";
import Footer from "./Footer/Footer";



function App() {
  return (
      <div className="container">
        <div className="block">
          <Header/>
          </div>
       <Container1/>
       <Container2/>
       <Container3/>
      <Container4/>
      <Container5/>
      <Container6/>
      <Container7/>
      <Footer/>
          <div className="Header_Footer">

      </div>
      </div>

  );
}

export default App;
