import React from "react";
import Usefetchh from "./Usefetchh";
import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";
import ReactStars from "react-stars";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export default function Maping({ cat, catelec, catjewel, catallelec, catallmens, catallwomens}) {

  const { addToCart } = useCart();

  const datas = Usefetchh("https://fakestoreapi.com/products");
  console.log(datas);
  const filterdatas = datas.filter((data) => data.category == cat).splice(2, 1);

  const filterelecdata = datas
    .filter((data) => data.category == catelec)
    .splice(2, 3);

//   console.log(filterelecdata);

    const filterjewel = datas
    .filter((data) => data.category == catjewel);

    const filterallelec = datas
    .filter((data) => data.category == catallelec);

    const filtermens = datas
    .filter((data) => data.category == catallmens).splice(1, 3);

    const filterwomens = datas
    .filter((data) => data.category == catallwomens).splice(1, 3);

  return (
    <>
      {filterdatas.map((val, ind) => {
        return (
          <>
          
            <div
              className="card"
              style={{
                objectFit: "cover",
                height: "auto",
                border: "1px solid black",
                boxShadow: "10px 10px 5px lightblue",
              }}>
              <img
                src={val.image}
                className="card-img-top"
                style={{ height: "300px" }}
              ></img>
              <div className="card-body">
                <h2 className="card-title text-truncate">{val.title}</h2>
                <p
                  className="card-text text-truncate"
                  style={{ overflow: "hidden" }}
                >
                  {val.description}
                </p>
                <h3 className="card-text"> <b>Price: ${val.price}</b></h3>
                <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                <div>
                 
                <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                </div>
              </div>
            </div>
           
          </>
        );
      })}

      <div className="container">
        <div className="row">
          {filterelecdata.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "1px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                    }}
                  >
                
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "300px" }}
                    ></img>
                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}
                      >
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                      <div>
                      <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                      </div>
                    </div>
                  </div>
        
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filterjewel.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "1px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                    }}
                  >
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "300px" }}
                    ></img>
                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}
                      >
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                      <div>
                      <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filterallelec.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "3px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                    }}
                  >
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "300px" }}
                    ></img>
                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}
                      >
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                      <div>
                      <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filtermens.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "1px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                    }}
                  >
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "300px" }}
                    ></img>
                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}
                      >
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                      <div>
                      <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>


      <div className="container">
        <div className="row">
          {filterwomens.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4 g-3">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "1px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                    }}
                  >
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "300px" }}
                    ></img>
                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}
                      >
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange",fontWeight:"600" }}>{val.rating.rate}</span>
                      <ReactStars 
                        count={5}
                        value={val.rating?.rate}
                        size={28}
                        color2={"#ffd700"}
                        edit={false}/>
                      </h3>
                      <div>
                      <button className="readmorebtn" onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>

  <Link
    to={`/page/${val.id}`}
  className="readmorelink">
    Read More
  </Link>
</button>
    
<button
  className="cartbtn mt-3 ms-3"
  onClick={() => addToCart(val)}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }}>
  Add to Cart
</button>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
