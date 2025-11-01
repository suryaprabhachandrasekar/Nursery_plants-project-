import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "./Cartcontext";
import ReactStars from 'react-stars';
import { useState, useEffect } from 'react';

export default function Allproducts() {

    const { addToCart } = useCart();

    const [products, setProducts] = useState([]);
    const [sortedBy, setSortedBy] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...products];

    if (value === "price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    setProducts(sorted);
    setSortedBy(value);
  };
  return (
    <>
   <div className="container py-3">
  <div
    className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"
    style={{ fontFamily: "Smooch Sans, sans-serif" }}>
    <h1
      className="m-0"
      style={{ fontSize: "60px", fontWeight: "700", paddingBottom: "10px" }} >
      All Products
    </h1>

    <select
      className="form-select w-auto ms-md-auto"
      onChange={handleSort}
      value={sortedBy}
      style={{
        fontSize: "20px",
        fontWeight: "700",
        minWidth: "200px",
      }}>
      <option value="">Sort Products</option>
      <option value="price">Price: Low to High</option>
      <option value="name">Name: A to Z</option>
    </select>
  </div>
</div>


      <div className="container mb-5">
        <div className="row g-5">
          {products.map((val, ind) => {
            return (
              <>
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      border: "2px solid black",
                      boxShadow: "10px 10px 5px lightblue",
                      padding:"10px"
                    }}>
                
                    <img
                      src={val.image}
                      className="card-img-top"
                      style={{ height: "350px" }} alt='noimage'></img>

                    <div className="card-body">
                      <h2 className="card-title text-truncate">{val.title}</h2>
                      <p
                        className="card-text text-truncate"
                        style={{ overflow: "hidden" }}>
                        {val.description}
                      </p>
                      <h3 className="card-text"> Price: ${val.price}</h3>
                      
                      <h3 className="card-text d-flex">Rating:<span className='ps-2 pe-2' style={{ color: "orange" }}>{val.rating.rate}</span>
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
  )
}
