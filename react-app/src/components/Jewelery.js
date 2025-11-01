import React from 'react'
import Maping from './Maping'

export default function Jewelery() {
  return (
    <>
            <div className="container-fluid mb-5">
                <div className="container">
                <h1 className="mainsec"><b>Jeweleries </b></h1>
                  <div className=" row catogery p-4" style={{border:"2px solid black", borderRadius:"20px"}}>           
                      <Maping catjewel="jewelery"></Maping>
                 </div>
                 </div>
            </div>
    </>
  )
}
