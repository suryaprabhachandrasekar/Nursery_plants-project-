import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import Plants from "./components/Plants";
import Seeds from "./components/Seeds";
import Potplants from "./components/Potplants";
import Planter from "./components/Planter";
import Manures from "./components/Manures";
import { Usercontext } from "./components/Usercontext";
import "./components/Style.css";
import Gardenkit from "./components/Gardenkit";
import Cart from "./components/Cart";
import Buynow from "./components/Buynow";

function App() {
  const [data, setData] = useState();

  return (
    <>
      <Usercontext>
        {/* 👇 Add basename here */}
        <BrowserRouter basename="/React_Plant_Nursery">
          <Routes>
            <Route
              path="/"
              element={[
                <Navbar />,
                <Navigation />,
                <Home />,
                <Footer />,
              ]}
            />
            <Route
              path="/plants"
              element={[
                <Navbar />,
                <Navigation />,
                <Plants />,
                <Footer />,
              ]}
            />
            <Route
              path="/potplants"
              element={[
                <Navbar />,
                <Navigation />,
                <Potplants />,
                <Footer />,
              ]}
            />
            <Route
              path="/planter"
              element={[
                <Navbar />,
                <Navigation />,
                <Planter />,
                <Footer />,
              ]}
            />
            <Route
              path="/seeds"
              element={[
                <Navbar />,
                <Navigation />,
                <Seeds />,
                <Footer />,
              ]}
            />
            <Route
              path="/manures"
              element={[
                <Navbar />,
                <Navigation />,
                <Manures />,
                <Footer />,
              ]}
            />
            <Route
              path="/gardeningkit"
              element={[
                <Navbar />,
                <Navigation />,
                <Gardenkit />,
                <Footer />,
              ]}
            />
            <Route
              path="/cart"
              element={[<Navbar />, <Cart />, <Footer />]}
            />
            <Route
              path="/buynow"
              element={[
                <Navbar />,
                <Navigation />,
                <Buynow />,
                <Footer />,
              ]}
            />
            <Route
              path="/PaymentModal"
              element={[
                <Navbar />,
                <Navigation />,
                <Footer />,
              ]}
            />
          </Routes>
        </BrowserRouter>
      </Usercontext>
    </>
  );
}

export default App;
