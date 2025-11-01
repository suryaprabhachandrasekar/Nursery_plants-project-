import { useState } from "react";
import Paymentmodel from "./Paymentmodel";

function Buynow() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showPayment, setShowPayment] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.address.trim() || formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setShowPayment(true); // Show payment modal
    }
  };

  return (
    <>
      {showPayment && <Paymentmodel onClose={() => setShowPayment(false)}/>}

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)"
      }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0, 150, 136, 0.2)",
            width: "100%",
            maxWidth: "450px",
            fontFamily: "Segoe UI, sans-serif"
        }}>

          <h2 style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#00695c",
            fontSize: "24px"
          }}>
            Delivery Details
          </h2>

          {["name", "address", "city", "pincode", "phone"].map((field) => (
            <div key={field} style={{ marginBottom: "22px" }}>
              <label
                htmlFor={field}
                style={{
                  display: "block",
                  marginBottom: "6px",
                  color: "#37474f",
                  fontWeight: "bold",
                  textTransform: "capitalize"
                }}
              >
                {field}
              </label>
              <input
                id={field}
                type={field === "phone" || field === "pincode" ? "tel" : "text"}
                name={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: `1px solid ${errors[field] ? "#e53935" : "#80cbc4"}`,
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
              />
              {errors[field] && (
                <div style={{ color: "#e53935", marginTop: "5px", fontSize: "13px" }}>
                  {errors[field]}
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#26a69a",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#00796b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#26a69a")}
          >
            Submit Order
          </button>
        </form>
      </div>
    </>
  );
}

export default Buynow;

