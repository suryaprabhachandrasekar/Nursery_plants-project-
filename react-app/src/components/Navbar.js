import ekartLogo from "../images/ekartLogo.png";
import Paymentmodel from "./Paymentmodel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";
import { useState } from "react";
import Search from "./Search";

export default function Navbar() {
  const [showPaymentmodel, setShowPaymentmodel] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { cartItems, increment, decrement, removeFromCart, clearCart } =
    useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid p-2">
          <div className="navbar-brand d-flex col-lg-1">
            <img src={ekartLogo} alt="" width="35" height="50" />
            <p className="logo">ShopNgo</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="d-none d-lg-block ps-4 col-lg-4">
            <form className="d-flex nav_form pt-0 pb-0 rounded-pill justify-content-end ">
              <input
                className="form-control me-0 rounded-pill"
                type="text"
                placeholder="what you are looking for?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="btn pe-1" type="submit">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  fade
                  style={{ color: "#ffffff" }}
                  className="icon"
                />
              </button>
            </form>
          </div>
           
          <ul className="navbar-nav ms-2 me-2 mb-2 mb-lg-0" id="navbarSupportedContent">
            <li className="nav-item">
              <div className="nav-link active ms-2 me-5" aria-current="page">
                <Link to={"/"} className="hoverhome">
                  Home
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle  ms-2 me-5"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                style={{ color: "black" }}
              >
                <Link to={"/"} className="hoverhome">
                  Category
                </Link>
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <div className="dropdown-item" >
                    <Link to={"/electronics"} style={{color:"Black", fontSize:"25px", textDecoration:"none", fontWeight:"600"}}>
                       Electronics
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item">
                    <Link to={"/jeweleries"} style={{color:"Black", fontSize:"25px", textDecoration:"none", fontWeight:"600"}} >
                      Jewelery
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="nav-link active ms-2 me-5" aria-current="page">
                <Link to={"/allproducts"} className="hoverhome">
                  Products
                </Link>
              </div>
            </li>
          </ul>
          

          <div className="logsign d-flex col-lg-1 align-self-center justify-content-around">
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "black", height: "28px" }}
                className="p-1"
              />
              {cartItems.length > 0 && (
                <span
                  style={{
                    border: "0px solid",
                    borderRadius: "50%",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

            <FontAwesomeIcon
              icon={faMoneyCheck}
              style={{ color: "black", height: "28px", cursor: "pointer" }}
              className="p-1"
              onClick={() => setShowPaymentmodel(true)}
            />
          </div>
        </div>
      </nav>
      <section className="container-fluid">
        <div className="container d-sm-block d-lg-none">
          <form className="d-flex nav_form ps-2 pt-2 pb-2 rounded-pill justify-content-end">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn pe-2" type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fade
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </button>
          </form>
        </div>
      </section>

      {searchInput.trim() !== "" && <Search searchTerm={searchInput} />}

      {showPaymentmodel && (
        <Paymentmodel onClose={() => setShowPaymentmodel(false)} />
      )}
    </>
  );
}