import Home from "./components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/components/Navbar.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";
import Readmore from "./components/Readmore";
import Allproducts from "./components/Allproducts";
import { CartProvider } from "./components/Cartcontext";
import Cart from "./components/Cart";
import { Search } from "./components/Search";
import Paymentmodal from "./components/Paymentmodel";
import Barcode from "react-barcode";
import Buynow from "./components/Buynow";
import Deliveryform from "./components/Deliveryform";
import { ToastContainer } from "react-toastify";


function App() {
  return ( 
  <>
  <CartProvider>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/jeweleries" element={<Jewelery/>}></Route>
      <Route path="/electronics" element={<Electronics/>}></Route>
      <Route path="/page/:id" element={<Readmore/>}></Route>
      <Route path="/allproducts" element={<Allproducts/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/delivery" element={<Deliveryform/>}></Route>
      <Route path="/Paymentportal" element={<Paymentmodal/>}></Route>
      
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  </CartProvider>
  <ToastContainer/>
  </>
  );
}

export default App;
