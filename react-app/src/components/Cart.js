import React from "react";
import { useCart } from "./Cartcontext";
import Noresult from "../images/NoSearchResult.jpg"
import BuyNow from "./Buynow";

export default function Cart() {
  const { cartItems, increment, decrement, removeFromCart, clearCart, setSearchTerm } = useCart();

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <>
    {cartItems.length === 0 ? (
        <div className="container">
            <div className="row">
            <div className="col-lg-12 justify-content-center">
            <img src={Noresult} alt="noimage" className="rounded mx-auto d-block"/>
            </div>
            </div>
        </div>
      ) : (
    <div className="container mt-5">
      <h2>Cart</h2>
      <button className="btn btn-danger mb-4" onClick={clearCart}>Remove All</button>
      
      <div className="row">
        {cartItems.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card" style={{border:"2px solid green",boxShadow: "10px 10px 5px lightblue"}}>
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title text-truncate">{item.title}</h5>
                <p className="card-text text-truncate">{item.description}</p>
                <div className="d-flex justify-content-around align-items-center">
                  <button onClick={() =>decrement(item.id)} className="btn btn-outline-secondary">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} className="btn btn-outline-secondary">+</button>
                  <h2>Total: ${Math.floor(item.price * (item.quantity || 1))}</h2>
                </div>
                
                <button className="btn btn-danger mt-3" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              
            </div>
            
          </div>
          
        ))}
    </div>
    <div className="text-end">
    <div className="mt-5">
      <table className="text-start">
        <tr>
          <td><h1>Total Quantity </h1></td>
          <td><h1>:</h1></td>
          <td><h1 className="ps-2" style={{color:"green"}}>{totalQty}</h1></td>
        </tr>
      
        <tr>
          <td><h1>Total Price </h1></td>
          <td><h1>:</h1></td>
          <td><h1 className="ps-2" style={{color:"green"}}>$  {Math.floor(totalPrice)}</h1></td>
        </tr>
      </table>
     </div> 
     </div>
    </div>
  )}
  <BuyNow></BuyNow>
  </>
);
  
}
