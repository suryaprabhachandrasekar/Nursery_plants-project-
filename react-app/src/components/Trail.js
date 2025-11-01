import React from "react";
import bigsale from "../images/Premium_Vector___Sale_special_offer_banner_and_price_tags_design-removebg-preview.png";
import shout from "../images//Amazon_Live_Shoppable_Videos_Creator_Hub-removebg-preview.png";
import freedel from "../images/Download_Free_shipping_delivery_service_logo_badge_for_free-removebg-preview.png";
import Usefetchh from "./Usefetchh";

export default function Carousel() {
  const fetcheddats = Usefetchh("https://fakestoreapi.com/products");

  const elec = fetcheddats.filter((dat) => dat.category === "electronics").splice(1, 1);
  const jewel = fetcheddats.filter((dat) => dat.category === "jewelery").splice(1, 1);
  const mens = fetcheddats.filter((dat) => dat.category === "men's clothing").splice(1, 1);

  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
        style={{
          position: "relative",
          minHeight: "60vh",
          backgroundColor: "blueviolet",
          backgroundSize: "cover",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
              <img src={bigsale} className="img-fluid" alt="Sale Banner" />
              <p className="ps-md-5 mt-4 mt-md-0 h4">Offers for you</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
              <img src={shout} className="img-fluid" alt="Shout Banner" />
              <p className="ps-md-5 mt-4 mt-md-0 h4">Offers for you</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-white">
              <img src={freedel} className="img-fluid" alt="Free Delivery" />
              <p className="ps-md-5 mt-4 mt-md-0 h4">Offers for you</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Responsive Card Section */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {[...jewel, ...elec, ...mens].map((val, ind) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={ind}>
              <div className="card shadow-lg bg-body mb-3 h-100">
                <img src={val.image} className="card-img-top img-fluid p-3" alt={val.title} />
                <div className="card-body">
                  <h5 className="card-title text-truncate" title={val.title}>{val.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
