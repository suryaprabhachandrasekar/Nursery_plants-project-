import React, { useState } from "react";
import Barcode from "react-barcode";
import { QRCodeSVG } from "qrcode.react"; 
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export default function PaymentModal({ onClose }) {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const buttonStyle = (active) => ({
    padding: "5px 20px",
    borderRadius: "25px",
    backgroundColor: active ? "#3b82f6" : "#e5e7eb",
    color: active ? "white" : "black",
    border: "none",
    cursor: "pointer",
    margin: "0 5px",
  });

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "400px",
        width: "90%",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          fontSize: "20px",
          background: "none",
          border: "none",
          color: "#555",
          cursor: "pointer"
        }}>
          ×
        </button>

        {/* Payment Method Selector */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <button style={buttonStyle(selectedMethod === "card")} onClick={() => setSelectedMethod("card")}>Card</button>
          <button style={buttonStyle(selectedMethod === "barcode")} onClick={() => setSelectedMethod("barcode")}>QRCode</button>
          <button style={buttonStyle(selectedMethod === "cod")} onClick={() => setSelectedMethod("cod")}>Cash on Delivery</button>
        </div>

        {/* Payment Options */}
        {selectedMethod === "card" && (
          <>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" style={{ margin: "0 5px" }} />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" style={{ margin: "0 5px" }} />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" style={{ margin: "0 5px" }} />
            </div>
            <form>
              <input type="text" placeholder="Cardholder Name" style={inputStyle} />
              <input type="text" placeholder="Card Number" style={inputStyle} />
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="text" placeholder="MM/YY" style={{ ...inputStyle, flex: 1 }} />
                <input type="text" placeholder="CVV" style={{ ...inputStyle, flex: 1 }} />
              </div>
              <button type="button" style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"}}>
                Add Card
              </button>
            </form>
          </>
        )}

        
        {selectedMethod === "barcode" && (
            <div style={{ textAlign: "center" }}>
                <p>Scan this QR Code to pay:</p>
                <QRCodeSVG 
                  value={`ORDER-${Date.now()}`}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#000000"/>
            </div>
        )}
        

        {selectedMethod === "cod" && (
          <div style={{ textAlign: "center", color: "#16a34a", fontWeight: "bold", fontSize: "18px" }}>
            Order placed successfully with Cash on Delivery!
            <div className="">

            <button className="readmorebtn" onClick={onClose} onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>
            
              <Link to={'/'} 
              className="readmorelink">
               
                Continue Shopping
              </Link>  
              
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};
