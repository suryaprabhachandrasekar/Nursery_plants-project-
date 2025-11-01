import React from 'react'
import ekartlogo from "../images/ekartLogo.png"

export default function Footer() {
  return (
    <>
      <div className="container-fluid cont" style={{backgroundColor:"#B5FCCD", fontFamily: "Smooch Sans, sans-serif", fontSize:"25px", fontWeight:"700"}}>
       <div className="row pt-3 pb-3">
       <div className="col-lg-2">
          <img src={ekartlogo} alt='' style={{height:"15vh", width:"15vh"}}></img>
          <p></p>
          <h3 className='higlit'>ShopNgo..!</h3>
        </div>

        <div className="col-lg-2">
          <h2 className='higlit'>About us</h2>
          <p>Contact us</p>
          <p>About us</p>
          <p>Carrers</p>
          <p>Stores</p>
          <p>Press</p>
          <p>Corporate</p>
        </div>
       
        <div className="col-lg-2">
          <h2 className='higlit'>Help</h2>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Erp Complains</p>
          <p>FAQs</p>
        </div>
        <div className="col-lg-2">
          <h2 className='higlit'>Consumer Policy</h2>
          <p>Cancelation and Returns</p>
          <p>Terms of use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Site map</p>
          <p>Grievance</p>
          
        </div>
        
        <div className="col-lg-2 line">
          <h2 className='higlit'>Mail Us</h2>
          <p>ShopNgo Internet private Limited, Buildings alyssa,begonia & Clove Embassy Tech Village, Outer Ring Road,Devabessanahalli Village, Bengalure, 560103,Karnataka,India</p>
        </div>

        <div className="col-lg-2">
          <h2 className='higlit'>Address</h2>
          <p>ShopNgo Internet private Limited, Buildings alyssa,begonia & Clove Embassy Tech Village, Outer Ring Road,Devabessanahalli Village, Bengalure, 560103,Karnataka,India</p>
          <p>Cell No: 1023123145</p>
        </div>

       </div>
      </div>
    </>
  )
}
