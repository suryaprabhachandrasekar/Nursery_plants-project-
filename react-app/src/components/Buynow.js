// BuyNow.jsx
import { useNavigate } from "react-router-dom";

function BuyNow() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/delivery");
  };
  
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default BuyNow;
