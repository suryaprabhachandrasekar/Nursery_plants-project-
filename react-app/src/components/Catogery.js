import React from "react";
import Maping from "./Maping";

export default function Catogery() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container">
          <h1 className="mainsec">
            <b>Best Deals </b>
          </h1>
          <div
            className=" row catogery p-4"
            style={{ border: "2px solid black", borderRadius: "20px" }}
          >
            <div className="col-lg-4">
              <Maping cat="men's clothing"></Maping>
            </div>

            <div className="col-lg-4">
              <Maping cat="women's clothing"></Maping>
            </div>

            <div className="col-lg-4">
              <Maping cat="electronics"></Maping>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
