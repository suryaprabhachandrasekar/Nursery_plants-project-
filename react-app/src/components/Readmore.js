import React from "react";
import Usefetchh from "./Usefetchh";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "./Cartcontext";

import ReactStars from "react-stars";

export default function Readmore() {

  const { addToCart } = useCart(); 
  const { id } = useParams();
  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <div className="container-fluid product-page">
        <div className="container product-image">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "60vh" }}
                className="img-fluid"
              />
            </div>
            <div className="d-flex col-lg-1 mb-2" >
              <div className="vr"></div>
            </div>
            {/* <div className="vr col-lg-1 d-flex" style={{height:"200px",}}></div> */}

            <div className="product-info col-lg-7">
              <h2>{product.title}</h2>
              <p className="category">
                <b className="fs-5">Category: </b>
                {product.category}
              </p>
              <p className="description">
                <b className="fs-5">Description: </b>
                {product.description}
              </p>
              <p className="price">
                <b className="fs-5">Price: </b> ${product.price}
              </p>
              <p className="rating">
                <b className="d-flex fs-5">Rating:
                <ReactStars
                  count={5}
                  value={product.rating?.rate}
                  size={20}
                  color2={"#ffd700"}
                  edit={false} className="ps-2"  
                /></b>
              </p>
              <p className="stock">
                
                <strong>Stock left: 🧾</strong> {product.rating?.count}
              </p>
              <button
  className="cartbtn mt-3 mb-3"
  onClick={() => addToCart(product)}
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
}
