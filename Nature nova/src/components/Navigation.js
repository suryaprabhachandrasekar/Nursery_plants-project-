import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="container-fluid " >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="d-flex justify-content-between text-success hvr_line">
                <Link to={"/plants"} className="text-decoration-none">
                  <p className="text-success fw-bold">PLANTS </p>
                </Link>
                <Link to={"/potplants"} className="text-decoration-none">
                  {" "}
                  <p className="text-success fw-bold">POT PLANTS</p>
                </Link>
                <Link to={"/planter"} className="text-decoration-none">
                  {" "}
                  <p className="text-success fw-bold">PLANTERS</p>
                </Link>
                <Link to={"/manures"} className="text-decoration-none">
                  {" "}
                  <p className="text-success fw-bold">MANURES</p>
                </Link>
                <Link to={"/seeds"} className="text-decoration-none">
                  {" "}
                  <p className="text-success fw-bold">SEEDS</p>
                </Link>
                <Link to={"/gardeningkit"} className="text-decoration-none">
                  {" "}
                  <p className="text-success fw-bold">GARDEN KIT</p>
                </Link>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
