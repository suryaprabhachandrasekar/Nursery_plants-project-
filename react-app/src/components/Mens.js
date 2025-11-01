import React from 'react'
import Maping from './Maping'

export default function Mens() {
  return (
    <>
      <div className="container-fluid mb-5">
                      <div className="container">
                      <h1 className="mainsec"><b>Mens Clothing </b></h1>
                        <div className=" row catogery p-4" style={{border:"2px solid black", borderRadius:"20px"}}>           
                            <Maping catallmens="men's clothing"></Maping>
                       </div>
                       </div>
                       </div>
          
    </>
  )
}
