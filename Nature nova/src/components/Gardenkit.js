import React, { useContext, useEffect, useState } from "react";
import { Apicontext } from "./Usercontext";

export default function Gardenkit() {
  const {plants,fun } = useContext(Apicontext);
  console.log(plants);

  const filtered = plants.filter((item) => item.category == "gardening-kit");
  console.log(filtered);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            {filtered.map((val,ind) => {
              return (
                <div className="col-lg-3 col-md-6 mt-3">
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
                          Price:₹
                          {val.price}{" "}
                        </p>
                        <p className="fw-bold ">Rating: {val.rating?.rate} </p>
                      </div>
                      <button className="btn btn-outline-success rounded-5"onClick={()=>fun(val)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

