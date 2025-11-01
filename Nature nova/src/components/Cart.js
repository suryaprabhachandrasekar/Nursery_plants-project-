import React, { useContext, useState } from "react";
import { Apicontext } from "./Usercontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { plants, fun, data, setData } = useContext(Apicontext);
  // console.log(plants);
  function remove(val) {
    const removedata = data.findIndex((x) => x.id == val.id);
    console.log(removedata);
    if ((removedata) => 0) {
      data.splice(removedata, 1);
      setData([...data]);
    }
  }
  function inc(val) {
    const exist = data.findIndex((x) => x.id === val.id);
    if (exist >= 0) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === val.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }
  function dec(val) {
    const exist = data.findIndex((x) => x.id === val.id);
    if (exist >= 0) {
      setData((prevData) =>
        prevData
          .map((item) =>
            item.id === val.id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  }
  function clearcart(val) {
    setData([]);
  }
 
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold text-success">Cart Items </h4>
            <button
              className="btn btn-outline-success rounded-4  border-0"
              onClick={() => clearcart()}
            >
              <h5 className="fw-bold">Clear Cart</h5>
            </button>
          </div>
          <div className="row">
            {data.map((val, ind) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mt-3">
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
                      <div className="d-flex justify-content-between">
                        <button className="border-0" onClick={() => dec(val)}>
                          -
                        </button>
                        <p>{val.quantity}</p>
                        <button className="border-0" onClick={() => inc(val)}>
                          +
                        </button>
                        <button
                          onClick={() => remove(val)}
                          className="btn btn-outline-danger rounded-5"
                        >
                          Remove
                        </button>
                      </div>
                      <Link to={'/buynow'}>
                      <button className="mt-3 btn btn-outline-success w-100">
                        Buy Now
                      </button></Link>
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
