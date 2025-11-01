import React, { useContext, useEffect, useState } from "react";

import { Apicontext } from "./Usercontext";

export const Home = () => {
  const {plants,fun}=useContext(Apicontext)
  console.log(plants);
  
  const array = [
    {
      image:
        "https://thursd.com/storage/media/71833/marble-pothos-are-very-simple-to-care-for-and-are-low-maintenance.jpg",
      name: "Creeper plants",
    },
    {
      image:
        "https://nurserylive.com/cdn/shop/collections/plants-canna-yellow-flower-with-green-leaves-plant-in-5-inch-black-grower-pot-3-352966_600x600.jpg?v=1681381749",
      name: "Ground Cover Plant",
    },
    {
      image:
        "https://nurserylive.com/cdn/shop/files/nurserylive-g-set-of-2-adorable-portulaca-plants-in-hanging-baskets-884260.jpg?v=1753273962",
      name: "Hanging-plants",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdV7-UPFB65wXtaf7OCnE-BC2pyH8Hb6IYQ&s",
      name: "Portulaca Plant",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71mmHnTiEtL._UF1000,1000_QL80_.jpg",
      name: "Succulant Plant",
    },
  ];
  return (
    < >
    <div >
      <div className="container-fluid ">
        <div className=" container ">
          <div className="row text-center">
            <div className="text-lg-start">
              <p className="text-muted fw-medium mt-4">
                Home / Hanging & Creeper Plant
              </p>
              <h1 className="fw-medium">Hanging & Creeper Plant</h1>
            </div>
            <div className="d-flex justify-content-around align-items-center mt-4">
              {array.map((v) => {
                return (
                  <div>
                    <img
                      src={v.image}
                      height={150}
                      width={150}
                      className="  rounded-circle border border-success border-5"
                    ></img>
                    <h6 className="mt-3">{v.name}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            {plants.map((val, ind) => {
              return (
                <div className="col-lg-3 col-md-6 mt-5">
                  <div className="card gap-0">
                    <img
                      src={val.image}
                      className="card-img-top"
                      alt="..."
                      height={250}
                      width={200}
                    />
                    <div className="card-body">
                      <p className="card-title fw-bold ">{val.title}</p>
                      <p className="card-text text-muted  text-truncate">
                        {val.description}
                      </p>
                      <div className="d-flex justify-content-between ms-0">
                        <p className="fw-medium ">
                          Price:₹{val.price}
                        </p>
                        <p className="fw-bold ">Rating: {val.rating?.rate} </p>
                      </div>
                      <button onClick={()=>fun(val)} className="btn btn-outline-success rounded-5">Add to Cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
       </div>
    </>
  );
};