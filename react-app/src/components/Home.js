import React from "react";
import Navbar from "./Navbar";
import Catogery from "./Catogery";
import backimg from "../images/downloadimages.jpg";
import Carousel from "./Carousel";
import Trail from "./Trail"
import Footer from "./Footer";
import Maping from "./Maping";
import Bestelec from "./Bestelec";
import Jewelery from "./Jewelery";
import Readmore from "./Readmore";
import Mens from "./Mens";
import Womens from "./Womens";
import Buynow from "./Buynow";

export default function Home() {
  return (
    <>
      
      <div className="container-fluid mainsec">
        <div className="d-flex justify-content-center" style={{}}>
          <h1 style={{ color: "black", fontFamily: "Smooch Sans, sans-serif", fontSize:"50px", padding:"0", margin:"0"}}>
            <b>ShopNgo</b>
          </h1>
        </div>
        <div style={{ color: "lightslategray" }}>
          <p style={{ textAlign: "center" }}>
            "Delivering Happiness, One Parcel at a Time!"
          </p>
          <p style={{ textAlign: "center", marginTop: "-15px" }}>
            "Shop Smart. Ship Fast. Ekart." "Your Trusted Partner in Fast &
            Reliable Delivery."
          </p>
        </div>

        <div className="row">
          <div className="col" style={{}}>
            <Carousel></Carousel>
            <Catogery></Catogery>
            <Maping></Maping>
            <hr></hr>
            <Bestelec></Bestelec>
            <hr></hr>
            <Mens></Mens>
            <hr></hr>
            <Womens></Womens>
            <hr></hr>
            

         
          </div>
        </div>
       </div>

    </>
  );
}
