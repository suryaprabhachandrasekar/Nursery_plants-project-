import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Apicontext } from "./Usercontext";
import Searchcomp from "./Searchcomp";

export default function Navbar() {
  const { data, plants } = useContext(Apicontext);
  const [searchinp,setSearchinp] = useState('');
  console.log("SearchInput:",searchinp);
  
  return (
    <>
      <div className="container-fluid bg-white sticky-top">
        <div className="container">
          <div className="row bg">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <div>
                <Link to={"/"}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-uy3h_Gg3la4UFgLtDikolx_cWZ3INQfTQ&s"
                    height={100}
                    width={100}
                    
                  ></img>
                </Link>
              </div>
              <div className="d-flex gap-5 align-items-center">
                <span >
                  <input type="text" placeholder="Search here.."className="rounded-5 fs-4 text-center border-1 border-success" onChange={(e)=>setSearchinp(e.target.value)}></input>
                </span>
                <i>
                  <button className="border-0 text bg-white fs-3" 
                  style={{ color: "darkgreen" }}>
                    <FaUserCircle />
                  </button>
                </i>
                <i>
                  <Link to={"/cart"}>
                   
                    <button
                      className="border-0 text bg-white fs-3  "
                      style={{ color: "darkgreen" }}>
                  
                      <BsCartCheckFill />
                      ({data.length})
                    </button>
                  </Link>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {searchinp!=="" && <Searchcomp searchterm={searchinp}></Searchcomp>}
    </>
  );
}
