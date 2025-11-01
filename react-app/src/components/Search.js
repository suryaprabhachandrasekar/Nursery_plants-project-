import React from "react";
import Usefetchh from "./Usefetchh"; // Your API fetch hook
import { Link } from "react-router-dom";

export default function Search({ searchTerm }) {
  const datas = Usefetchh("https://fakestoreapi.com/products");

  const filtered = datas.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-3">
      <h4>Search Results for "{searchTerm}":</h4>
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div className="col-lg-3" key={item.id}>
              <div className="card mb-3">
                <img src={item.image} alt="no image" className="card-img-top" style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p>${item.price}</p>
                 <button className="btn btn-outline-secondary btn-bg-blue mt-3">
                 <Link to={`/page/${item.id}`} className="text-decoration-none text-blue">Readmore...</Link>
                 </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}