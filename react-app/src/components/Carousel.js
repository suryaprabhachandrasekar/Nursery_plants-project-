import React from "react";
import bigsale from "../images/Premium_Vector___Sale_special_offer_banner_and_price_tags_design-removebg-preview.png";
import shout from "../images//Amazon_Live_Shoppable_Videos_Creator_Hub-removebg-preview.png";
import freedel from "../images/Download_Free_shipping_delivery_service_logo_badge_for_free-removebg-preview.png";
import Usefetchh from "./Usefetchh";
import { Link } from "react-router-dom";

export default function Carousel() {
  const fetcheddats = Usefetchh("https://fakestoreapi.com/products");
  console.log(fetcheddats);

  const elec = fetcheddats
    .filter((dat) => dat.category === "electronics")
    .splice(1, 1);
  console.log(elec);

  const jewel = fetcheddats
    .filter((dat) => dat.category === "jewelery")
    .splice(1, 1);
  console.log(jewel);

  const mens = fetcheddats
    .filter((dat) => dat.category === "men's clothing")
    .splice(1, 1);
  console.log(mens);


  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide d-flex container-fluid"
        data-bs-touch="false"
        data-bs-interval="false"
        style={{
          position: "relative",
          minHeight: "0vh",
          backgroundColor:"#9B7EBD",
          backgroundSize: "cover",
        }}>

        <div
          className="carousel-inner caroimg row d-none d-lg-block">

        <div className="container carousel-item active">
           <div className="row" style={{}}>
            <div className="col-lg-8">
            <img src={bigsale} className="d-flex img-fluid" alt="..." />
           </div>
           
           <div className="col-lg-4">
            <h2 className="mt-5 pt-5" style={{fontFamily:"fantasy",fontSize:"40px", color:"#e2d9d9",textShadow:"8px 8px 6px black"}}>Starting @199</h2>
            <p className="" style={{color:"#e2d9d9",textShadow:"8px 8px 6px black",fontWeight:"800",fontSize:"25px"}}>upto 70% off</p>
            <p className="pt-4" style={{fontFamily:"fantasy",fontSize:"30px", fontWeight:"300",color:"#e2d9d9",textShadow:"8px 8px 5px black"}}>For all electric Appliances...</p>
           </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row" style={{}}>
            <div className="col-lg-8">
            <img src={shout} className="d-flex img-fluid" alt="..." />
            </div>
           
           <div className="col-lg-4">
            <h2 className="mt-5 pt-5" style={{fontFamily:"fantasy",fontSize:"40px", color:"wheat",textShadow:"8px 8px 6px black"}}>All Jewels @60% off</h2>
            <p className="" style={{color:"wheat",textShadow:"8px 8px 6px black",fontWeight:"900",fontSize:"25px"}}>No more Waits!</p>
            <p className="pt-4" style={{fontFamily:"fantasy",fontSize:"30px", fontWeight:"300",color:"wheat",textShadow:"8px 8px 5px black"}}>Make your Neck Meanfull...!</p>
           </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row" style={{}}>
            <div className="col-lg-8">
            <img src={freedel} className="d-flex img-fluid" alt="..." />
            </div>
           
           <div className="col-lg-4">
            <h2 className="mt-5 pt-5" style={{fontFamily:"fantasy",fontSize:"40px", color:"#ead068",textShadow:"8px 8px 6px black"}}>Trending @999</h2>
            <p className="" style={{color:"#ead068",textShadow:"8px 8px 6px black",fontWeight:"800",fontSize:"25px"}}>Buy 1 Get 1</p>
            <p className="pt-4" style={{fontFamily:"fantasy",fontSize:"30px", fontWeight:"300",color:"#ead068",textShadow:"8px 8px 5px black"}}>Free Delivery at doorstep.!</p>
           </div>
          </div>
        </div>

        
        </div>

        {/* <div className="carousel-item ">
          <span className="d-flex flex-wrap" style={{}}>
            <img src={shout} className="img-fluid" alt="..." />
            <p className=" ps-5 mt-5 pt-5">Offers for you</p>
          </span>
        </div>
        <div className="carousel-item ">
          <span className="d-flex flex-wrap" style={{}}>
            <img src={freedel} className="img-fluid" alt="..." />
            <p className="ps-5 mt-5 pt-5">Offers for you</p>
          </span>
        </div>
        </div> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev" style={{width:"50px"}}>

          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next" style={{width:"50px"}}>
            
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      

      

<div className="container mt-5 position-relative" >

  <div className="row g-3 justify-content-center" >
    <div className="col-lg-4 col-md-6 col-sm-12">
      {jewel.map((val, ind) => (
        <div className="card bg-body shadow-lg mb-3" key={ind}>
          <img src={val.image} className="card-img-top img-fluid p-3" alt="..." style={{ height: "300px", objectFit: "contain" }} />
          <div className="card-body">
            <h5 className="card-title text-truncate">{val.title}</h5>
            <p className="card-text">
            <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

                   <Link to={`/page/${val.id}`}
                      className="readmorelink">
                           Read More
                   </Link>
                </button>
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">
      {elec.map((val, ind) => (
        <div className="card bg-body shadow-lg mb-3" key={ind}>
          <img src={val.image} className="card-img-top img-fluid p-3" alt="..." style={{ height: "300px", objectFit: "contain" }} />
          <div className="card-body">
            <h5 className="card-title text-truncate" >{val.title}</h5>
            <p className="card-text">
            <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

                   <Link to={`/page/${val.id}`}
                      className="readmorelink">
                           Read More
                   </Link>
                </button>
            </p>
          </div>
        </div>
      ))}
    </div>


    <div className="col-lg-4 col-md-6 col-sm-12">
      {mens.map((val, ind) => (
        <div className="card bg-body shadow-lg mb-3"  key={ind}>
          <img src={val.image} className="card-img-top img-fluid p-3" style={{ height: "300px", objectFit: "contain" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title  text-truncate">{val.title}</h5>
            <p className="card-text">
                <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

                   <Link to={`/page/${val.id}`}
                      className="readmorelink">
                           Read More
                   </Link>
                </button>
            </p>
          </div>
        </div>
      ))}
    </div>
   
   </div>
  </div>
</div>
    </>
  );
}

    

