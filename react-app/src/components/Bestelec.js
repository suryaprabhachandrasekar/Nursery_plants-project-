import React from 'react'
import Maping from './Maping'

export default function Bestelec() {
  return (
    <>
      <div className="container-fluid mb-5">
          <div className="container">
          <h1 className="mainsec"><b>Best of Electronics </b></h1>
            <div className=" row catogery p-4" style={{border:"2px solid black", borderRadius:"20px"}}>    
             
                <Maping catelec="electronics"></Maping>
           
              {/* <div className="col-lg-4">
          <Maping catelec="electronics"></Maping>
              </div>
          
         
              <div className="col-lg-4">
          <Maping catelec="electronics"></Maping>
              </div> */}
      
           </div>
           </div>
           </div>
            
    </>
  )
}
